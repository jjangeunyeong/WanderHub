import React from 'react';
import localImg from '@assets/local_img.gif';

interface LocalImgType {
  localName: string;
}

const LocalImg = ({ localName }: LocalImgType) => {
  const findLocalImgPosition = (name: string): number => {
    let result;
    switch (name) {
      case '서울':
        result = 0;
        break;
      case '인천':
        result = -120 * 1;
        break;
      case '대전':
        result = -120 * 2;
        break;
      case '대구':
        result = -120 * 3;
        break;
      case '광주':
        result = -120 * 4;
        break;
      case '부산':
        result = -120 * 5;
        break;
      case '울산':
        result = -120 * 6;
        break;
      case '경기도':
        result = -120 * 7;
        break;
      case '강원도':
        result = -120 * 8;
        break;
      case '충청북도':
        result = -120 * 9;
        break;
      case '충청남도':
        result = -120 * 10;
        break;
      case '경상북도':
        result = -120 * 11;
        break;
      case '경상남도':
        result = -120 * 12;
        break;
      case '전라북도':
        result = -120 * 13;
        break;
      case '전라남도':
        result = -120 * 14;
        break;
      case '제주도':
        result = -120 * 15;
        break;
      case '세종':
        result = -120 * 16;
        break;
      default:
        result = -120 * 17;
    }
    return result;
  };

  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center">
      <div
        style={{
          backgroundImage: `url(${localImg})`,
          backgroundPositionY: `${findLocalImgPosition(localName)}px`,
        }}
        className={`rounded-full w-[120px] h-[120px] bg-no-repeat`}
      ></div>
    </div>
  );
};

export default LocalImg;
