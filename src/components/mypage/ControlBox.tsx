import React from 'react';
import MyInfo from './myinfo/MyInfo';
import { myPageTabType } from './SideBar';
import MyBoard from './myboard/MyBoard';

export interface ControlBoxPropsType {
  curTab: myPageTabType;
}

const ControlBox = ({ curTab }: ControlBoxPropsType) => {
  const myPageBoxOptions = (tabIdx: myPageTabType) => {
    switch (tabIdx) {
      case 'myInfo':
        return <MyInfo />;
      case 'myBoard':
        return <MyBoard />;
    }
  };
  return (
    <div className="border col-span-4 w-full bg-gray-100 p-4">
      <div className="flex flex-col space-y-4 items-center bg-white h-full min-h-[60vh] relative shadow-lg">
        {myPageBoxOptions(curTab)}
      </div>
    </div>
  );
};

export default ControlBox;
