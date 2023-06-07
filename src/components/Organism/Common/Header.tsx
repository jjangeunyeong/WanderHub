import React from 'react';
import { useLocation } from 'react-router-dom';
import LinkButton from '@components/Atoms/LinkButton';
import Button from '@components/Atoms/Button';
import MainLogo from '@components/Molecules/MainLogo';

const LinkList = [
  {
    title: '동행',
    path: '/accompany',
  },
  {
    title: '여행지',
    path: '/travel', // 예비로 넣어놓음
  },
  {
    title: '커뮤니티',
    path: '/comunity', // 예비로 넣어놓음
  },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-primary py-4 border-b border-gray-300">
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <MainLogo />
        </div>
        <ul className="mr-auto ml-5 flex space-x-4">
          {LinkList.map(link => {
            return (
              <li key={link.path}>
                <LinkButton
                  path={link.path}
                  classNameProps={
                    location.pathname.includes(link.path)
                      ? 'text-white hover:text-white border-b border-white'
                      : 'text-gray-300 hover:text-white'
                  }
                >
                  {link.title}
                </LinkButton>
              </li>
            );
          })}
        </ul>
        <div>
          <Button
            classNameProps="text-gray-300 hover:text-white border border-gray-300 rounded-full px-4 py-2"
            clickEvent={() => console.log('click')}
          >
            내정보
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
