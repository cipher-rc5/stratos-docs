'use client';
import { type ZoomableDiagramProps } from '@/components/zoomable-diagram';
import dynamic from 'next/dynamic';

const ZoomableDiagramNoSSR = dynamic(() => import('@/components/zoomable-diagram').then((mod) => mod.ZoomableDiagram), { ssr: false });

export function ClientZoomableDiagram(props: ZoomableDiagramProps) {
  return <ZoomableDiagramNoSSR {...props} />;
}
