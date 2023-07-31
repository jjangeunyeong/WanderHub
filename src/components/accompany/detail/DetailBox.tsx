import React from 'react';
import KakaoMap from '@components/common/KakaoMap';
import { useParams } from 'react-router-dom';
import DetailInfo from './DetailInfo';
import useGetAccompanyDetail from '@/hooks/queryHooks/useGetAccompanyDetail';
import Spinner from '@components/common/Spinner';
import usePostJoinAccompany from '@/hooks/queryHooks/usePostJoinAccompany';
import useDeleteQuitAccompany from '@/hooks/queryHooks/useDeleteQuitAccompany';
import { AxiosError } from 'axios';

const DetailBox = () => {
  const { accompanyId } = useParams();
  const { data, isLoading } = useGetAccompanyDetail(accompanyId);
  const joinAccompanyMutation = usePostJoinAccompany();
  const deleteQuitAccompanyMutation = useDeleteQuitAccompany();

  const handleJoin = (id: string) => {
    joinAccompanyMutation.mutate(id, {
      onSuccess: () => alert('참여가 완료되었습니다.'),
      onError: (error: unknown) => {
        const axiosError = error as AxiosError;
        const message = (axiosError.response?.data as { message: string }).message;
        if (axiosError.message === 'Request failed with status code 500') {
          alert('로그인이 필요합니다.');
        } else {
          handleErrorAlert(message);
        }
      },
    });
  };

  const handleQuit = (id: string) => {
    deleteQuitAccompanyMutation.mutate(id, {
      onSuccess: () => alert('탈퇴가 완료되었습니다.'),
      onError: (error: unknown) => {
        const axiosError = error as AxiosError;
        const message = (axiosError.response?.data as { message: string }).message;
        if (axiosError.message === 'Request failed with status code 500') {
          alert('로그인이 필요합니다.');
        } else {
          handleErrorAlert(message);
        }
      },
    });
  };
  const handleErrorAlert = (msg: string) => {
    switch (msg) {
      case 'Cannot quit as not a member':
        alert('참여멤버가 아니면 탈퇴를 할 수 없습니다.');
        break;
      case 'Cannot quit as you made':
        alert('본인의 동행글은 탈퇴 할 수 없습니다.');
        break;
      case 'Already joined':
        alert('이미 참여중입니다.');
        break;
      case 'Max num over':
        alert('참여인원이 꽉 찼습니다.');
        break;
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      {data && (
        <>
          <div className="flex justify-end mt-[.5rem]">
            <div>
              <button
                onClick={() => accompanyId && handleJoin(accompanyId)}
                className="text-gray-300 mb-[.5rem] hover:text-white border border-gray-300 rounded-lg px-4 py-2 bg-primary"
              >
                참여하기
              </button>
              <button
                onClick={() => accompanyId && handleQuit(accompanyId)}
                className="text-gray-300 mb-[.5rem] hover:text-white border border-gray-300 rounded-lg px-4 py-2 bg-primary ml-2"
              >
                탈퇴하기
              </button>
            </div>
          </div>
          <div className="flex justify-around mt-[.5rem]">
            <div className="w-[45%] rounded-lg overflow-hidden">
              <KakaoMap mapX={data.coordX} mapY={data.coordY} placeTitle={data.placeTitle} />
            </div>
            <div className="w-[45%] border-2 p-2 rounded-lg">
              <DetailInfo {...data} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailBox;
