import React, { useState, useEffect } from 'react';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';
import MainLogo from '@assets/logo.png';
import ViewIcon from '@assets/viewsIcon.png';
import { useParams } from 'react-router-dom';
import WanderHubAPI from '@/api/WanderHubAPI';
import AuthAPI from '@/api/AuthAPI';
import { regions } from '../Writing/Writing';
import EditBtn from './EditBtn';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/recoil/login/userInfoAtoms';
import DeleteBtn from './DeleteBtn';

const CommunityDetail = () => {
  const { boardId } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [showRegionDropdown, setShowRegionDropdown] = useState<boolean>(false);
  const [boardContents, setBoardContents] = useState({
    title: '',
    nickName: '',
    createdAt: '',
    content: '',
    viewPoint: 0,
    local: '',
  });
  const userInfo = useRecoilValue(userInfoAtom);

  const handleSubmitPost = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (boardContents.title === '' || boardContents.content === '') {
      alert('제목과 본문은 필수 입력사항입니다.');
    }

    const patchData = {
      title: boardContents.title,
      content: boardContents.content,
      local: boardContents.local,
    };

    await AuthAPI.patch(`/community/${boardId}`, patchData);
    setIsEdit(!isEdit);
  };

  const handleSelectRegion = (e: React.MouseEvent<HTMLElement>, region: string) => {
    e.preventDefault();
    setBoardContents({ ...boardContents, local: region });
    setShowRegionDropdown(false);
  };

  const isAuthor = () => {
    return userInfo.nickName === boardContents.nickName ? true : false;
  };

  const getBoard = async () => {
    const res = await WanderHubAPI.get(`/community/${boardId}`);
    setBoardContents(res.data.data);
  };

  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center min-h-[80vh]">
        <div className="w-[50%]">
          {!isEdit && isAuthor() && (
            <div className="float-right flex flex-col">
              <EditBtn isEdit={isEdit} setIsEdit={setIsEdit} />
              <DeleteBtn />
            </div>
          )}
          {isEdit ? (
            <input
              type="text"
              id="contact-form-name"
              className="mt-16 mb-8 rounded-lg appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
              placeholder="Title"
              defaultValue={boardContents.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBoardContents({ ...boardContents, title: e.target.value })
              }
            />
          ) : (
            <div className="mt-16 mb-8 font-medium text-3xl text-gray-800 dark:text-white">
              {boardContents.title}
            </div>
          )}
          <div className="font-bold text-[17px] mb-2">{boardContents.nickName}</div>
          <div className="flex mb-3 border-b pb-6 mb-6">
            <div className="flex text-slate-500 text-[15px] mr-5">
              <div className="mr-2">작성일</div>
              <div>{boardContents.createdAt.slice(0, 10)}</div>
            </div>
            <div className="flex text-slate-500 text-[15px] mr-4">
              <img src={ViewIcon} alt="view icon" className="w-5 h-3 mt-[5px] mr-2" />
              <div className="mr-2">조회수</div>
              <div>{boardContents.viewPoint}</div>
            </div>
            <div className="relative flex text-slate-500 text-[15px]">
              <img src={MainLogo} alt="main logo" className="w-6 h-6 mr-1" />
              <div className="mr-2">여행지</div>
              {isEdit ? (
                <>
                  <button
                    id="contact-form-region"
                    className="absolute py-1 top-[-4px] left-[86px] w-24 rounded-lg appearance-none border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder=""
                    onClick={() => setShowRegionDropdown(!showRegionDropdown)}
                  >
                    {boardContents.local}
                  </button>
                  {showRegionDropdown ? (
                    <ul
                      id="listbox"
                      className="rounded-lg appearance-none border border-gray-300 w-24 ml-[5px] mt-[29px] bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      {regions.map(region => {
                        return (
                          <div
                            className="first:rounded-t-lg last:rounded-b-lg hover:bg-blue-100"
                            key={region}
                          >
                            <li className="p-1 pl-3" onClick={e => handleSelectRegion(e, region)}>
                              {region}
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  ) : null}
                </>
              ) : (
                <div>{boardContents.local}</div>
              )}
            </div>
          </div>
          {isEdit ? (
            <textarea
              className="flex-1 w-full h-[400px] px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              id="comment"
              placeholder="Content"
              name="comment"
              rows={5}
              cols={40}
              defaultValue={boardContents.content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setBoardContents({ ...boardContents, content: e.target.value })
              }
            ></textarea>
          ) : (
            <div>{boardContents.content}</div>
          )}
          {isEdit && (
            <button
              onClick={e => handleSubmitPost(e)}
              className="py-2 px-4 mt-8 mb-16 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              등록
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityDetail;
