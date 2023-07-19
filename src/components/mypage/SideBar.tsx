import React from 'react';

interface SideBarPropsType {
  curTab: myPageTabType;
  handleTab: (tabName: myPageTabType) => void;
}

export type myPageTabType = string;
const tabArr: { textKo: string; textEn: myPageTabType }[] = [
  { textKo: '개인정보', textEn: 'myInfo' },
  { textKo: '나의글', textEn: 'myBoard' },
];

const SideBar = ({ curTab, handleTab }: SideBarPropsType) => {
  return (
    <div className=" col-span-1 flex border-l justify-center items-center min-h-[50vh] relative shadow-lg">
      <aside style={{ borderTopColor: '#6c9976' }} className="absolute top-0 left-0 w-full">
        <ul>
          {tabArr.map((item, idx) => {
            return (
              <li
                key={idx}
                className={
                  curTab === item.textEn
                    ? 'h-[5rem] p-2 text-xl bg-primary text-white'
                    : 'h-[5rem] border-b-2  p-2 text-xl bg-white'
                }
              >
                <button className="w-full h-full text-start" onClick={() => handleTab(item.textEn)}>
                  {item.textKo}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
