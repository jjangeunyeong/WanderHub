import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface PaginationTypes {
  totalPages: number;
  curPage: number;
  handlePageNation: (page: number) => void;
}

const Pagenation = ({ totalPages, curPage, handlePageNation }: PaginationTypes) => {
  const [pageStartNum, setPageStartNum] = useState(1);

  useEffect(() => {
    const pageEndNum = pageStartNum + 9;
    if (curPage < pageStartNum || curPage > pageEndNum) {
      setPageStartNum(Math.floor((curPage - 1) / 10) * 10 + 1);
    }
  }, [curPage]);

  const pageEndNum = Math.min(pageStartNum + 9, totalPages);

  return (
    <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
      <div className="flex items-center">
        <button
          type="button"
          className={
            pageStartNum !== 1
              ? 'w-full p-3 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-400'
              : 'w-full p-3 text-base text-gray-300 bg-gray-100 border rounded-l-xl cursor-not-allowed'
          }
          onClick={() => {
            if (pageStartNum !== 1) {
              setPageStartNum(pageStartNum - 10);
            }
          }}
        >
          <IoIosArrowBack />
        </button>
        {Array.from({ length: pageEndNum - pageStartNum + 1 }, (_, i) => i + pageStartNum).map(
          pageNum => {
            return (
              <button
                key={pageNum}
                className={
                  curPage === pageNum
                    ? 'w-full px-4 py-2 text-base text-gray-600 bg-primary border'
                    : 'w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-400'
                }
                onClick={() => handlePageNation(pageNum)}
              >
                {pageNum}
              </button>
            );
          },
        )}
        <button
          type="button"
          className={
            pageStartNum + 10 <= totalPages
              ? 'w-full p-3 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-400'
              : 'w-full p-3 text-base text-gray-300 bg-gray-100 border-t border-b border-r rounded-r-xl cursor-not-allowed'
          }
          onClick={() => {
            if (pageStartNum + 10 <= totalPages) {
              setPageStartNum(pageStartNum + 10);
            }
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagenation;
