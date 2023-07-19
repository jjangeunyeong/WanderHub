import React, { useState } from 'react';

interface SvgMapProps {
  pathList: Array<{ id: string; name: string; d: string }>;
  curLocal: string | null;
  getLocalName: (name: string) => void;
}

const SvgMap = ({ pathList, curLocal, getLocalName }: SvgMapProps) => {
  // const [curTarget, setCurTarget] = useState('');
  const handleTarget = (targetId: string) => {
    console.log(targetId);
    // setCurTarget(targetId);
    getLocalName(targetId);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 630"
      aria-label="Map of South Korea"
      className="bg-sky-200 w-full h-full rounded-2xl"
    >
      {pathList.map(item => {
        return (
          <path
            key={item.id}
            id={item.id}
            name={item.name}
            d={item.d}
            onClick={() => handleTarget(item.id)}
            className={curLocal === item.id ? 'fill-primary' : 'hover:fill-gray-200 fill-white'}
          />
        );
      })}
    </svg>
  );
};

export default SvgMap;
