'use client';

import mermaid from 'mermaid';
import { useEffect, useRef } from 'react';

interface MermaidDiagramProps {
  chart: string;
  id: string;
}

export function MermaidDiagram({ chart, id }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize mermaid with Acid & Bone theme colors
    mermaid.initialize({
      startOnLoad: true,
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
    });

    if (ref.current) {
      ref.current.innerHTML = chart;
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div
      ref={ref}
      id={id}
      className='mermaid my-8 flex items-center justify-center bg-[#f2efe9] p-8 border border-[#dbd8d0] overflow-x-auto' />
  );
}
