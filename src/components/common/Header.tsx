import React, { useState, useEffect } from 'react';
import Logo from '@assets/logo.png';
import { useLocation } from 'react-router-dom';
import { ModalProps } from '@pages/Login/Modal';
import { Link } from 'react-router-dom';

const LinkList = [
  {
    title: '동행',
    path: '/accompany',
  },
  {
    title: '여행지',
    path: '/travel',
  },
  {
    title: '커뮤니티',
    path: '/community',
  },
];

const Header = ({ setOpenModal }: ModalProps) => {
  const location = useLocation();
  const [assignBtn, setAssignBtn] = useState('');
  const clickLoginBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken');
      setAssignBtn('로그인');
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };

  useEffect(() => {
    localStorage.getItem('accessToken') ? setAssignBtn('로그아웃') : setAssignBtn('로그인');
  });

  return (
    <header className="flex bg-primary py-4 border-b border-gray-300 h-[10vh]">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <Link to={'/'} className={'text-white font-bold text-xl'}>
            <img className="w-[4rem] h-[4rem]" src={Logo} alt="mainLogo" />
          </Link>
        </div>
        <ul className="mr-auto ml-5 flex space-x-4">
          {LinkList.map(link => {
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={
                    location.pathname.includes(link.path)
                      ? 'text-white hover:text-white border-b border-white text-xl'
                      : 'text-gray-300 hover:text-white text-xl'
                  }
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <button
            onClick={e => clickLoginBtn(e)}
            className={
              'text-gray-300 hover:text-white border border-gray-300 rounded-full px-4 py-2'
            }
          >
            {assignBtn}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
