'use client';
import mermaid from 'mermaid';
import { useEffect, useRef, useState } from 'react';

interface MermaidDiagramProps {
  chart: string;
  id: string;
}

let mermaid_initialized = false;

export function MermaidDiagram({ chart, id }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [is_rendering, set_is_rendering] = useState(false);
  const [has_centered, set_has_centered] = useState(false);

  // Reset centering when chart changes
  useEffect(() => {
    set_has_centered(false);
  }, [chart]);

  useEffect(() => {
    if (!mermaid_initialized) {
      // Initialize mermaid with Acid & Bone theme colors
      const config = {
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          primaryColor: '#dcee24', // Acid Lime
          primaryTextColor: '#141414', // Charcoal
          primaryBorderColor: '#141414',
          lineColor: '#141414',
          secondaryColor: '#f2efe9', // Cream
          tertiaryColor: '#e8e5de', // Darker Cream
          background: '#f2efe9',
          mainBkg: '#f2efe9',
          secondBkg: '#e8e5de',
          textColor: '#141414',
          border1: '#141414',
          border2: '#454545',
          note: '#dcee24',
          noteBkgColor: '#dcee24',
          noteTextColor: '#141414',
          noteBorderColor: '#141414',
          clusterBkg: '#e8e5de',
          clusterBorder: '#141414',
          defaultLinkColor: '#141414',
          titleColor: '#141414',
          edgeLabelBackground: '#f2efe9',
          nodeTextColor: '#141414',
          actorBkg: '#dcee24',
          actorBorder: '#141414',
          actorTextColor: '#141414',
          actorLineColor: '#141414',
          signalColor: '#141414',
          signalTextColor: '#141414',
          labelBoxBkgColor: '#e8e5de',
          labelBoxBorderColor: '#141414',
          labelTextColor: '#141414',
          loopTextColor: '#141414',
          activationBkgColor: '#dcee24',
          activationBorderColor: '#141414',
          sequenceNumberColor: '#f2efe9'
        },
        flowchart: { htmlLabels: true, curve: 'linear', padding: 20 },
        sequence: { diagramMarginX: 50, diagramMarginY: 10, boxTextMargin: 5, noteMargin: 10, messageMargin: 35 },
        gantt: { titleTopMargin: 25, barHeight: 40, barGap: 8, topPadding: 50, leftPadding: 75, gridLineStartPadding: 35, fontSize: 12 }
      };
      
      // Initialize both top-level and mermaidAPI
      mermaid.initialize(config);
      mermaid.mermaidAPI.initialize(config);
      mermaid_initialized = true;
    }

    let is_mounted = true;

    const render_diagram = async () => {
      if (!ref.current || is_rendering || !is_mounted) return;

      set_is_rendering(true);
      try {
        // Wait for next frame to ensure DOM is ready
        await new Promise((resolve) => requestAnimationFrame(resolve));
        
        if (!is_mounted || !ref.current) return;

        // Clear previous content
        ref.current.innerHTML = '';
        
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
        
        if (!is_mounted || !ref.current) return;
        
        // Insert SVG directly using innerHTML to let browser handle HTML content
        // Then modify attributes in the DOM to avoid XML parsing issues with HTML content
        ref.current.innerHTML = '';
        
        // Insert SVG as HTML (browser will parse HTML content correctly)
        ref.current.innerHTML = svg;
        
        // Now modify the SVG element in the DOM
        const svg_element = ref.current.querySelector('svg');
        
        if (svg_element) {
          // Get or create viewBox
          let viewBox = svg_element.getAttribute('viewBox');
          if (!viewBox) {
            const width_attr = svg_element.getAttribute('width');
            const height_attr = svg_element.getAttribute('height');
            if (width_attr && height_attr) {
              const width_num = parseFloat(width_attr) || 800;
              const height_num = parseFloat(height_attr) || 600;
              viewBox = `0 0 ${width_num} ${height_num}`;
              svg_element.setAttribute('viewBox', viewBox);
            }
          }
          
          // Set responsive attributes
          svg_element.setAttribute('preserveAspectRatio', 'xMidYMid meet');
          svg_element.removeAttribute('width');
          svg_element.removeAttribute('height');
          svg_element.style.width = '100%';
          svg_element.style.height = 'auto';
          svg_element.style.maxWidth = '100%';
          svg_element.style.display = 'block';
          svg_element.style.margin = '0 auto';
          
          // Center the SVG content within its container
          if (!has_centered && ref.current) {
            try {
              const bbox = svg_element.getBBox();
              const container_rect = ref.current.getBoundingClientRect();
              
              // Calculate centering offsets
              const svg_width = bbox.width + bbox.x * 2;
              const svg_height = bbox.height + bbox.y * 2;
              
              // If SVG is smaller than container, center it
              if (svg_width < container_rect.width) {
                const offset_x = (container_rect.width - svg_width) / 2;
                svg_element.style.marginLeft = `${offset_x}px`;
                svg_element.style.marginRight = `${offset_x}px`;
              }
              
              set_has_centered(true);
            } catch (bbox_error) {
              // getBBox might fail on some diagrams, silently continue
              console.debug('Could not calculate bbox for centering:', bbox_error);
            }
          }
        }
      } catch (error) {
        console.error('Failed to render Mermaid diagram:', error);
        if (is_mounted && ref.current) {
          ref.current.innerHTML = `<div class="text-red-600 p-4">Failed to render diagram: ${error instanceof Error ? error.message : 'Unknown error'}</div>`;
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

  return (
    <div
      ref={ref}
      id={id}
      className='mermaid my-8 flex items-center justify-center bg-[#f2efe9] p-8 border border-[#dbd8d0] overflow-x-auto'
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
  );
}
