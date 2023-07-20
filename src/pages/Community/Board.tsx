import React from 'react';
import Button from '@pages/Community/Button';
import PostList from '@pages/Community/PostList';

const Board = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[70%]">
        <Button />
        <PostList />
      </div>
    </div>
  );
};

export default Board;
