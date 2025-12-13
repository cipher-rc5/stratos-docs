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

export function ZoomableDiagram({ chart, id, minScale = 0.3, maxScale = 5 }: ZoomableDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1.2);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
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
      flowchart: { htmlLabels: true, curve: 'linear', padding: 30, nodeSpacing: 80, rankSpacing: 80 },
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
    });

    if (contentRef.current) {
      contentRef.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, [chart]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.3, maxScale));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.3, minScale));
  };

  const handleReset = () => {
    setScale(1.2);
    setPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
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

  return (
    <div
      className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-[#f2efe9]' : 'border-2 border-[#141414] bg-[#f2efe9] my-8 shadow-lg'}`}>
      {/* Control Panel */}
      <div className='absolute top-4 right-4 z-10 flex gap-2'>
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
        className={`overflow-hidden ${isFullscreen ? 'h-screen w-screen' : 'h-200 w-full'}`}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}>
        <div
          ref={contentRef}
          id={id}
          className='mermaid flex items-center justify-center p-8 transition-transform duration-200'
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center',
            minWidth: '100%',
            minHeight: '100%'
          }} />
      </div>

      {/* Instructions */}
      <div className='absolute bottom-4 left-4 text-sm text-[#141414] bg-[#dcee24] px-4 py-2 border-2 border-[#141414] font-medium'>
        <p>Scroll to zoom • Drag to pan • Click fullscreen for immersive view</p>
      </div>
    </div>
  );
}
