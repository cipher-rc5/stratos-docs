'use client';
import { Button } from '@/components/ui/button';
import { Maximize2, Minimize2, ZoomIn, ZoomOut } from 'lucide-react';
import mermaid from 'mermaid';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

interface ZoomableDiagramProps {
  chart: string;
  id: string;
  minScale?: number;
  maxScale?: number;
}

let mermaid_initialized = false;

export function ZoomableDiagram({ chart, id, minScale = 0.3, maxScale = 5 }: ZoomableDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [is_rendering, set_is_rendering] = useState(false);
  const [hasCentered, setHasCentered] = useState(false);

  // Recenter whenever the chart content changes
  useEffect(() => {
    setHasCentered(false);
    setPosition({ x: 0, y: 0 });
  }, [chart]);

  useEffect(() => {
    if (!mermaid_initialized) {
      const config = {
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          primaryColor: '#dcee24',
          primaryTextColor: '#141414',
          primaryBorderColor: '#141414',
          lineColor: '#141414',
          secondaryColor: '#f2efe9',
          tertiaryColor: '#e8e5de',
          background: '#f2efe9',
          mainBkg: '#f2efe9',
          secondBkg: '#e8e5de',
          textColor: '#141414',
          border1: '#141414',
          border2: '#454545',
          noteBkgColor: '#dcee24',
          noteTextColor: '#141414',
          noteBorderColor: '#141414',
          clusterBkg: '#e8e5de',
          clusterBorder: '#141414',
          defaultLinkColor: '#141414',
          titleColor: '#141414',
          edgeLabelBackground: '#f2efe9',
          nodeTextColor: '#141414',
          fontSize: '16px'
        },
        flowchart: { htmlLabels: true, curve: 'linear', padding: 24, nodeSpacing: 50, rankSpacing: 50, useMaxWidth: false },
        gantt: {
          titleTopMargin: 35,
          barHeight: 50,
          barGap: 12,
          topPadding: 75,
          leftPadding: 120,
          gridLineStartPadding: 50,
          fontSize: 14,
          sectionFontSize: 16
        }
      };
      
      // Initialize both top-level and mermaidAPI
      mermaid.initialize(config);
      mermaid.mermaidAPI.initialize(config);
      mermaid_initialized = true;
    }

    let is_mounted = true;

    const render_diagram = async () => {
      if (!contentRef.current || is_rendering || !is_mounted) return;

      set_is_rendering(true);
      try {
        // Wait for next frame to ensure DOM is ready
        await new Promise((resolve) => requestAnimationFrame(resolve));
        
        if (!is_mounted || !contentRef.current) return;

        // Clear previous content
        contentRef.current.innerHTML = '';
        
        // Generate unique ID for this render
        const unique_id = `${id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const chart_text = chart.trim();
        
        // Render the diagram using mermaid.mermaidAPI.render() for better compatibility
        let svg: string;
        try {
          const result = await mermaid.mermaidAPI.render(unique_id, chart_text);
          svg = result.svg;
        } catch (api_error) {
          // Fallback to top-level render if mermaidAPI fails
          console.warn('mermaidAPI.render failed, trying mermaid.render:', api_error);
          const result = await mermaid.render(unique_id, chart_text);
          svg = result.svg;
        }
        
        if (!is_mounted || !contentRef.current) return;
        
        // Insert SVG directly using innerHTML to let browser handle HTML content
        // Then modify attributes in the DOM to avoid XML parsing issues with HTML content
        contentRef.current.innerHTML = '';
        
        // Create wrapper div - ensure it doesn't clip content
        const wrapper = document.createElement('div');
        wrapper.style.width = '100%';
        wrapper.style.height = '100%';
        wrapper.style.display = 'flex';
        wrapper.style.alignItems = 'center';
        wrapper.style.justifyContent = 'center';
        wrapper.style.overflow = 'visible';
        wrapper.style.minWidth = '100%';
        wrapper.style.minHeight = '100%';
        wrapper.style.position = 'relative';
        wrapper.style.contain = 'none'; // Don't contain layout/paint to prevent clipping
        
        try {
          // Insert SVG as HTML (browser will parse HTML content correctly)
          wrapper.innerHTML = svg;
          
          // Wait for SVG and all foreignObject content to fully render
          // ForeignObject elements (used for HTML labels) need extra time
          await new Promise((resolve) => requestAnimationFrame(resolve));
          await new Promise((resolve) => requestAnimationFrame(resolve));
          await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for foreignObject rendering
          await new Promise((resolve) => requestAnimationFrame(resolve));
          
          // Now modify the SVG element in the DOM
          const svg_element = wrapper.querySelector('svg');
          
          if (svg_element) {
            // Preserve Mermaid's viewBox - it's already correctly calculated
            // Only modify if absolutely necessary
            let viewBox = svg_element.getAttribute('viewBox');
            const width_attr = svg_element.getAttribute('width');
            const height_attr = svg_element.getAttribute('height');
            
            // If viewBox exists, keep it as-is (Mermaid calculates it correctly)
            // Only create one if it doesn't exist
            if (!viewBox && width_attr && height_attr) {
              const width_num = parseFloat(width_attr);
              const height_num = parseFloat(height_attr);
              viewBox = `0 0 ${width_num} ${height_num}`;
              svg_element.setAttribute('viewBox', viewBox);
            }
            
            // Set responsive attributes - ensure SVG fits container without clipping
            svg_element.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            
            // Remove fixed dimensions to allow responsive scaling
            svg_element.removeAttribute('width');
            svg_element.removeAttribute('height');
            
            // Set styles for responsive behavior - allow SVG to expand naturally
            svg_element.style.width = '100%';
            svg_element.style.height = 'auto';
            svg_element.style.maxWidth = 'none'; // Allow expansion beyond container
            svg_element.style.maxHeight = 'none'; // Allow expansion beyond container
            svg_element.style.display = 'block';
            svg_element.style.overflow = 'visible'; // Critical: don't clip content
            svg_element.style.contain = 'none'; // Don't contain to prevent clipping
            
            // Ensure all content is visible
            svg_element.style.visibility = 'visible';
            svg_element.style.opacity = '1';
            
            // Force reflow to ensure foreignObject content is measured
            void svg_element.offsetHeight;
            
            // Check for foreignObject elements and ensure they're visible
            const foreign_objects = svg_element.querySelectorAll('foreignObject');
            foreign_objects.forEach((fo) => {
              (fo as HTMLElement).style.overflow = 'visible';
              (fo as HTMLElement).style.display = 'block';
            });

            // Center the rendered SVG within the available container on first render
            if (!hasCentered && containerRef.current) {
              const box = svg_element.getBBox();
              const container_rect = containerRef.current.getBoundingClientRect();
              const offset_x = (container_rect.width - box.width) / 2 - box.x;
              const offset_y = (container_rect.height - box.height) / 2 - box.y;
              setPosition({ x: offset_x, y: offset_y });
              setHasCentered(true);
            }
          } else {
            throw new Error('SVG element not found after insertion');
          }
          
          if (!is_mounted || !contentRef.current) return;
          contentRef.current.appendChild(wrapper);
        } catch (insert_error) {
          console.error('Error inserting SVG:', insert_error);
          // Fallback: try inserting raw SVG
          if (!is_mounted || !contentRef.current) return;
          contentRef.current.innerHTML = `<div style="padding: 20px; color: red;">Error rendering diagram. Please refresh the page.</div>`;
          throw insert_error;
        }
      } catch (error) {
        console.error('Failed to render Mermaid diagram:', error);
        if (is_mounted && contentRef.current) {
          contentRef.current.innerHTML = `<div class="text-red-600 p-4">Failed to render diagram: ${error instanceof Error ? error.message : 'Unknown error'}</div>`;
        }
      } finally {
        if (is_mounted) {
          set_is_rendering(false);
        }
      }
    };

    render_diagram();

    return () => {
      is_mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart, id]);

  // Re-render diagram when fullscreen changes to ensure proper sizing
  useEffect(() => {
    if (contentRef.current && contentRef.current.innerHTML) {
      const render_diagram_again = async () => {
        if (!contentRef.current || is_rendering) return;
        
        set_is_rendering(true);
        try {
          await new Promise((resolve) => requestAnimationFrame(resolve));
          
          if (!contentRef.current) return;
          
          const existing_svg = contentRef.current.querySelector('svg');
          if (existing_svg) {
            // Update SVG attributes for responsive sizing
            existing_svg.setAttribute('width', '100%');
            existing_svg.setAttribute('height', '100%');
            existing_svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            existing_svg.style.maxWidth = '100%';
            existing_svg.style.height = 'auto';
          }
        } finally {
          set_is_rendering(false);
        }
      };
      
      render_diagram_again();
    }
  }, [isFullscreen, is_rendering]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.3, maxScale));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.3, minScale));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setHasCentered(false);
  };

  const toggleFullscreen = () => {
    const new_fullscreen = !isFullscreen;
    setIsFullscreen(new_fullscreen);
    
    // Prevent body scroll when in fullscreen
    if (new_fullscreen) {
      document.body.style.overflow = 'hidden';
      // Reset scale and position for fullscreen
      setTimeout(() => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
        setHasCentered(false);
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    setScale((prev) => Math.max(minScale, Math.min(maxScale, prev + delta)));
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isFullscreen) {
        document.body.style.overflow = '';
      }
    };
  }, [isFullscreen]);

  return (
    <div
      className={`relative hide-scrollbar ${isFullscreen ? 'fixed inset-0 z-50 bg-[#f2efe9] overflow-hidden' : 'border-2 border-[#141414] bg-[#f2efe9] my-8 shadow-lg overflow-x-auto'}`}
      style={isFullscreen ? { 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        margin: 0
      } : {
        maxWidth: '100%'
      }}>
      {/* Control Panel */}
      <div className='absolute top-2 right-2 sm:top-4 sm:right-4 z-10 flex gap-1 sm:gap-2 flex-wrap'>
        <Button
          onClick={handleZoomOut}
          disabled={scale <= minScale}
          size='sm'
          variant='outline'
          className='bg-[#141414] text-[#dcee24] border-[#141414] hover:bg-[#000000] hover:text-[#dcee24]'>
          <ZoomOut className='h-4 w-4' />
        </Button>
        <Button
          onClick={handleZoomIn}
          disabled={scale >= maxScale}
          size='sm'
          variant='outline'
          className='bg-[#141414] text-[#dcee24] border-[#141414] hover:bg-[#000000] hover:text-[#dcee24]'>
          <ZoomIn className='h-4 w-4' />
        </Button>
        <Button
          onClick={handleReset}
          size='sm'
          variant='outline'
          className='bg-[#141414] text-[#dcee24] border-[#141414] hover:bg-[#000000] hover:text-[#dcee24]'>
          Reset
        </Button>
        <Button
          onClick={toggleFullscreen}
          size='sm'
          variant='outline'
          className='bg-[#141414] text-[#dcee24] border-[#141414] hover:bg-[#000000] hover:text-[#dcee24]'>
          {isFullscreen ? <Minimize2 className='h-4 w-4' /> : <Maximize2 className='h-4 w-4' />}
        </Button>
      </div>

      {/* Diagram Container */}
      <div
        ref={containerRef}
        className={`hide-scrollbar ${isFullscreen ? 'absolute inset-0 w-full h-full overflow-auto' : 'h-[660px] w-full sm:w-[125%] max-w-full overflow-auto'}`}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={(e) => {
          if (e.touches.length === 1 && !isDragging) {
            const touch = e.touches[0];
            setIsDragging(true);
            setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
          }
        }}
        onTouchMove={(e) => {
          if (isDragging && e.touches.length === 1) {
            const touch = e.touches[0];
            setPosition({ x: touch.clientX - dragStart.x, y: touch.clientY - dragStart.y });
          }
        }}
        onTouchEnd={() => {
          setIsDragging(false);
        }}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          ...(isFullscreen && {
            width: '100vw',
            height: '100vh'
          })
        }}>
        <div
          ref={contentRef}
          id={id}
          className='mermaid flex items-center justify-center p-4 sm:p-8 transition-transform duration-200'
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'top left',
            width: 'fit-content',
            height: 'fit-content',
            minWidth: '100%',
            minHeight: '100%',
            overflow: 'visible',
            touchAction: 'none',
            // Ensure content isn't clipped
            contain: 'none'
          }} />
      </div>

      {/* Instructions */}
      <div className='absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-xs sm:text-sm text-[#141414] bg-[#dcee24] px-2 py-1 sm:px-4 sm:py-2 border-2 border-[#141414] font-medium'>
        <p className='hidden sm:inline'>Scroll to zoom • Drag to pan • Click fullscreen for immersive view</p>
        <p className='sm:hidden'>Pinch to zoom • Drag to pan • Tap fullscreen</p>
      </div>
    </div>
  );
}
