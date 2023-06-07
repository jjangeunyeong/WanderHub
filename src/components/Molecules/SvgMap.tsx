import React, { useState } from 'react';
import Path from '@/components/Atoms/Path';

interface SvgMapProps {
  pathList: Array<{ id: string; name: string; d: string }>;
}

const SvgMap = ({ pathList }: SvgMapProps) => {
  const [curTarget, setCurTarget] = useState('');
  const handleTarget = (targetId: string) => setCurTarget(targetId);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 630"
      aria-label="Map of South Korea"
      className="bg-sky-200 w-full h-full rounded-2xl"
    >
      {pathList.map(item => {
        return <Path key={item.id} item={item} curTarget={curTarget} handleTarget={handleTarget} />;
      })}
    </svg>
  );
};

export default SvgMap;
