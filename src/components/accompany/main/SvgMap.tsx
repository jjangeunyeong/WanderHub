import React from 'react';

interface SvgMapProps {
  pathList: Array<{ id: string; code: string; d: string; rnum: number }>;
  curLocal: string | null;
  getLocalName: (name: string | null) => void;
}

const SvgMap = ({ pathList, curLocal, getLocalName }: SvgMapProps) => {
  const handleTarget = (targetId: string) => {
    if (curLocal === targetId) {
      getLocalName(null);
      return;
    }
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
            name={item.id}
            d={item.d}
            onClick={() => handleTarget(item.id)}
            className={
              curLocal === item.id
                ? 'fill-primary cursor-pointer'
                : 'hover:fill-gray-200 fill-white cursor-pointer'
            }
          />
        );
      })}
    </svg>
  );
};

export default SvgMap;
