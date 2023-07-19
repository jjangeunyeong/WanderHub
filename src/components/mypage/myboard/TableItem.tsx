import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const TableItem = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleDropdown = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <tr>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">서울</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">2023-06-16</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">2023-07-16</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">반포대교놀러가요!</p>
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
              123123123123123123123 123123123123123123123 123123123123123123123
              123123123123123123123 123123123123123123123 123123123123123123123
              123123123123123123123 123123123123123123123 123123123123123123123
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableItem;
