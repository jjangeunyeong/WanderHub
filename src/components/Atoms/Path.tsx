import React from 'react';

interface PathType {
  item: { id: string; name: string; d: string };
  curTarget: string;
  handleTarget: (targetId: string) => void;
}

const Path = ({ item, curTarget, handleTarget }: PathType) => {
  return (
    <path
      id={item.id}
      name={item.name}
      d={item.d}
      onClick={() => handleTarget(item.id)}
      className={curTarget === item.id ? 'fill-primary' : 'hover:fill-gray-200 fill-white'}
    />
  );
};

export default Path;
