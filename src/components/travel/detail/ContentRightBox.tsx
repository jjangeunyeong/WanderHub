import { TravelDetailType } from '@/types/travelDataType';
import React from 'react';

interface ContentRightBoxType {
  detailData: TravelDetailType;
}

const ContentRightBox = ({ detailData }: ContentRightBoxType) => {
  return (
    <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
      <div className="border-b border-gray-200 pb-6">
        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-black-800 mt-2">
          {detailData.title}
        </h1>
      </div>
      {detailData.addr1 && (
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-black-800">주소 :</p>
          <div className="flex items-center justify-center">
            <p className="text-xs leading-none text-black-600">
              {detailData.addr1} {detailData.addr2} ({detailData.zipcode})
            </p>
          </div>
        </div>
      )}
      {detailData.tel && (
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-black-800">전화번호 :</p>
          <div className="flex items-center justify-center">
            <p className="text-sm leading-none text-black-600 mr-3">{detailData.tel}</p>
          </div>
        </div>
      )}
      {detailData.homepage && (
        <div className="border-b py-4 border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-black-800">홈페이지 :</p>
          <div className="flex items-center justify-center">
            <p
              dangerouslySetInnerHTML={{ __html: detailData.homepage }}
              className="text-xs leading-none text-black-600 mr-3 hover:text-primary"
            ></p>
          </div>
        </div>
      )}
      <div>
        <p className="text-base border-b pb-7 lg:leading-tight leading-normal text-black-600 mt-7">
          {detailData.overview}
        </p>
      </div>
    </div>
  );
};

export default ContentRightBox;
