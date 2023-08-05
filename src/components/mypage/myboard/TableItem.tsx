import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { BoardType } from '@/types/boardType';
import { AccompanyDetailDataType } from '@/types/accompanyType';
import { useNavigate } from 'react-router-dom';

interface TableItemProps {
  curMenu: string;
  communityBoard?: BoardType;
  accompanyBoard?: AccompanyDetailDataType;
}
const TableItem = ({ curMenu, communityBoard, accompanyBoard }: TableItemProps) => {
  const [isToggle, setIsToggle] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <tr
        className="cursor-pointer"
        onClick={() => {
          curMenu === 'myAccompany'
            ? navigate(`/accompany/${accompanyBoard?.id}`)
            : navigate(`/community/${communityBoard?.boardId}`);
        }}
      >
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">
            {curMenu === 'myAccompany' ? accompanyBoard?.accompanyLocal : communityBoard?.local}
          </p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">
            {curMenu === 'myAccompany'
              ? accompanyBoard?.createdAt?.slice(0, 10)
              : communityBoard?.createdAt.slice(0, 10)}
          </p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">
            {curMenu === 'myAccompany'
              ? accompanyBoard?.accompanyDate.slice(0, 10)
              : communityBoard?.modifiedAt.slice(0, 10)}
          </p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">
            {curMenu === 'myAccompany' ? accompanyBoard?.accompanyTitle : communityBoard?.title}
          </p>
        </td>
        <td className="pr-2 py-5 text-sm bg-white border-b border-gray-200">
          <button onClick={toggleDropdown}>
            {isToggle ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </button>
        </td>
      </tr>
      {isToggle && (
        <tr>
          <td className="px-5 py-5 w-full" colSpan={5}>
            <div>
              {curMenu === 'myAccompany'
                ? accompanyBoard?.accompanyContent
                : communityBoard?.content}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableItem;
