import React, { useState } from 'react';
import Header from '@components/common/Header';
import Modal from '@pages/Login/Modal';

const Writing = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showRegionDropdown, setShowRegionDropdown] = useState<boolean>(false);
  const [curRegion, setCurRegion] = useState('지역 선택');
  const [post, setPost] = useState({ title: '', content: '' });

  const regions: string[] = [
    '서울',
    '제주도',
    '경기도',
    '강원도',
    '부산',
    '울산',
    '대구',
    '대전',
    '광주',
    '세종',
    '인천',
    '충청남도',
    '충청북도',
    '경상남도',
    '경상북도',
    '전라남도',
    '전라북도',
  ];

  const handleSelectRegion = (e: React.MouseEvent<HTMLElement>, region: string) => {
    e.preventDefault();
    setCurRegion(region);
    setShowRegionDropdown(false);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (post.title === '' || post.content === '') {
      window.alert('제목과 본문은 필수 입력사항입니다.');
    }
  };

  return (
    <div>
      <Header setOpenModal={setOpenModal} />
      <div className="flex items-center justify-center">
        <div className="w-2/3 mt-10">
          <div className="mb-6 text-2xl text-gray-800 dark:text-white">
            여행의 추억을 공유해 보아요!
          </div>
          <div className="mb-5">
            <div className="mb-1">제목</div>
            <input
              type="text"
              id="contact-form-name"
              className="rounded-lg appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Title"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPost({ ...post, title: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <div className="mb-1">지역</div>
            <button
              id="contact-form-region"
              className="rounded-lg appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder=""
              onClick={() => setShowRegionDropdown(!showRegionDropdown)}
            >
              {curRegion}
            </button>
            {showRegionDropdown ? (
              <ul
                id="listbox"
                className="rounded-lg appearance-none border border-gray-300 w-full bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                {regions.map(region => {
                  return (
                    <div key={region}>
                      <li
                        className="p-2 hover:bg-blue-100"
                        onClick={e => handleSelectRegion(e, region)}
                      >
                        {region}
                      </li>
                    </div>
                  );
                })}
              </ul>
            ) : null}
          </div>
          <div className="mb-6">
            <div className="mb-1">본문</div>
            <label className="text-gray-700" htmlFor="name">
              <textarea
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Content"
                name="comment"
                rows={5}
                cols={40}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setPost({ ...post, content: e.target.value })
                }
              ></textarea>
            </label>
          </div>
          <button
            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            onClick={e => handleSubmit(e)}
          >
            등록
          </button>
        </div>
      </div>
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
    </div>
  );
};

export default Writing;
