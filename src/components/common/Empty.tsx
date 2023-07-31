import React from 'react';

interface EmptyProps {
  message: string;
}

const Empty = ({ message }: EmptyProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-[150px] rounded-md">
      <div className="text-xl font-semibold text-gray-600 mb-4">🚫</div>
      <div className="text-2xl text-gray-500">{message}</div>
    </div>
  );
};

export default Empty;
