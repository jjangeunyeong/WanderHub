import React from 'react';
import Logo from '@assets/logo.png';

const SideBar = () => {
  const metroCity = [
    '서울특별시',
    '부산광역시',
    '대구광역시',
    '인천광역시',
    '광주광역시',
    '대전광역시',
    '울산광역시',
  ];
  const doCity = [
    '경기도',
    '강원도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
    '제주도',
  ];

  const showByRegionPostList = (e: React.MouseEvent<HTMLElement>, region: string) => {
    e.preventDefault();
    console.log(region);
  };

  return (
    <div className="float-left h-screen w-72dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen w-72">
          <nav className="mt-10 px-6">
            <div className="flex items-center justify-start mt-10 mb-8 ">
              <img className="h-10" src={Logo} />
              <span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold">
                지역별
              </span>
            </div>
            <div>
              <p className="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md">
                특별시·광역시
              </p>
              {metroCity.map(city => {
                return (
                  <button
                    className="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                    onClick={e => showByRegionPostList(e, city.slice(0, 2))}
                    key={city}
                  >
                    <span className="mx-4 font-normal text-md">{city}</span>
                  </button>
                );
              })}
            </div>
            <div>
              <p className="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md">
                도별
              </p>
              {doCity.map(city => {
                return (
                  <button
                    className="flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                    onClick={e => showByRegionPostList(e, city)}
                    key={city}
                  >
                    <span className="mx-4 font-normal text-md">{city}</span>
                  </button>
                );
              })}
            </div>
            <div className="pb-14">
              <p className="w-full pb-2 mb-4 ml-2 font-normal text-gray-300 border-b-2 border-gray-100 text-md">
                특별자치시
              </p>
              <button
                className="w-full flex items-center justify-start p-2 my-4 font-thin text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                onClick={e => showByRegionPostList(e, '세종')}
              >
                <span className="mx-4 font-normal text-md">세종시</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
