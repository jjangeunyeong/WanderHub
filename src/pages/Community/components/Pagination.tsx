import React, { useState, useEffect } from 'react';
import WanderHubAPI from '@/api/WanderHubAPI';
import { BoardType } from '@/types/boardType';
import { useNavigate } from 'react-router-dom';

interface PaginationProps {
  totalPages: number;
  setBoardList: React.Dispatch<React.SetStateAction<BoardType[]>>;
}

const Pagination = ({ totalPages, setBoardList }: PaginationProps) => {
  const navigate = useNavigate();
  const [curPage, setCurPage] = useState(1);
  const [paginationFirstNum, setPaginationFirstNum] = useState(1);

  const goToFirstPage = () => {
    setCurPage(1);
    setPaginationFirstNum(1);
  };

  const goToLastPage = () => {
    setCurPage(totalPages);
    const newFirstNum =
      totalPages % 10 > 0 && totalPages % 10 < 6
        ? Math.floor(totalPages / 10) * 10 + 1
        : totalPages % 10 === 0
        ? (totalPages / 10 - 1) * 10 + 6
        : Math.floor(totalPages / 10) * 10 + 6;
    setPaginationFirstNum(newFirstNum);
  };

  const clickPrevPage = () => {
    setCurPage(curPage - 1);
    setPaginationFirstNum(
      curPage % 10 === 1 || curPage % 10 === 6 ? paginationFirstNum - 5 : paginationFirstNum,
    );
  };

  const clickNextPage = () => {
    setCurPage(curPage + 1);
    setPaginationFirstNum(
      curPage % 10 === 5 || curPage % 10 === 0 ? paginationFirstNum + 5 : paginationFirstNum,
    );
  };

  const showPrevPagination = () => {
    setPaginationFirstNum(paginationFirstNum - 5);
    setCurPage(paginationFirstNum - 5);
  };

  const showNextPagination = () => {
    setPaginationFirstNum(paginationFirstNum + 5);
    setCurPage(paginationFirstNum + 5);
  };

  useEffect(() => {
    async function getCurpagePostlist() {
      const res = await WanderHubAPI.get(`/community?page=${curPage - 1}`);
      setBoardList(res.data.data);
    }
    getCurpagePostlist();
    navigate(`?page=${curPage}`);
  }, [curPage]);

  return (
    <div className="flex flex justify-center py-10 w-full">
      <nav className="block w-full">
        <ul className="w-full flex justify-between rounded list-none">
          <div className="w-20">
            {curPage !== 1 && (
              <li onClick={clickPrevPage}>
                <a className="first:ml-0 text-xs font-semibold flex w-20 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-stone-500 text-stone-500 cursor-pointer">
                  이전페이지
                </a>
              </li>
            )}
          </div>
          <div className="flex flex-wrap">
            {paginationFirstNum > 5 && (
              <li onClick={goToFirstPage}>
                <a className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-stone-500 text-stone-500 cursor-pointer">
                  1
                </a>
              </li>
            )}
            {paginationFirstNum > 5 && (
              <li onClick={showPrevPagination}>
                <a className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-stone-500 text-stone-500 cursor-pointer">
                  ...
                </a>
              </li>
            )}
            {Array(totalPages - paginationFirstNum <= 5 ? totalPages - paginationFirstNum + 1 : 5)
              .fill(paginationFirstNum)
              .map((page, i) => {
                return (
                  <li key={i + page} onClick={() => setCurPage(page + i)}>
                    <a
                      className={`${
                        curPage === page + i && `bg-gray-300`
                      } first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-stone-500 text-stone-500 cursor-pointer`}
                    >
                      {page + i}
                    </a>
                  </li>
                );
              })}
            {totalPages > 5 && totalPages - paginationFirstNum >= 5 && (
              <li onClick={showNextPagination}>
                <a className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-stone-500 text-stone-500 cursor-pointer">
                  ...
                </a>
              </li>
            )}
            {totalPages > 5 &&
              !(
                curPage >=
                  (totalPages % 10 > 0 && totalPages % 10 < 6
                    ? Math.floor(totalPages / 10) * 10 + 1
                    : totalPages % 10 === 0
                    ? (totalPages / 10 - 1) * 10 + 6
                    : Math.floor(totalPages / 10) * 10 + 6) && curPage <= totalPages
              ) && (
                <li onClick={goToLastPage}>
                  <a className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-stone-500 text-stone-500 cursor-pointer">
                    {totalPages}
                  </a>
                </li>
              )}
          </div>
          <div className="w-20">
            {curPage !== totalPages && (
              <li onClick={clickNextPage}>
                <a className="first:ml-0 text-xs font-semibold flex w-20 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-stone-500 bg-white text-stone-500 cursor-pointer">
                  다음페이지
                </a>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
