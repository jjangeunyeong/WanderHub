import React, { SetStateAction } from 'react';
import Logo from '@assets/white_bg_logo.png';
import GoogleSymbol from '@assets/google_symbol.png';
import KaKaoSymbol from '@assets/kakao_symbol.png';
import XMarkIcon from '@assets/cross.png';
export interface ModalProps {
  setOpenModal: React.Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ setOpenModal }: ModalProps) => {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center">
          <div className="transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
            <div className="bg-white sm:px-8 sm:pl sm:py-12">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <button
                  type="button"
                  className="absolute right-8 top-6"
                  onClick={() => setOpenModal(false)}
                >
                  <img src={XMarkIcon} alt="close button" className="h-4 w-4" />
                </button>
                <div className=" sm:w-full sm:max-w-sm">
                  <img className="w-52 h-19 mb-5" src={Logo} alt="WanderHub Logo" />
                  <h2 className="mb-3 text-3xl font-bold leading-9 tracking-tight text-gray-900">
                    소셜 로그인
                  </h2>
                </div>
                <p className="mb-large text-base text-gray-900">
                  동행을 찾아 함께 여행해 보세요 :)
                </p>
                <button
                  className="flex justify-center w-full h-14 rounded-lg px-20 py-3 bg-primary hover:bg-neutral-400"
                  type="button"
                >
                  <img
                    src={GoogleSymbol}
                    width={20}
                    height={20}
                    alt="GoogleSymbol"
                    className="pt-1.5 hover:bg-black"
                  />
                  <span className="px-5 font-semibold mt-1">구글 계정 로그인</span>
                </button>
                <button
                  className="mt-3 flex justify-center w-full h-14 rounded-lg py-3 bg-kakao hover:bg-neutral-400"
                  type="button"
                  onClick={() => {
                    window.location.href =
                      'http://ec2-3-34-80-242.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao';
                  }}
                >
                  <img src={KaKaoSymbol} alt="GoogleSymbol" className="h-full" />
                  <span className="px-3 font-semibold mt-1">카카오 계정 로그인</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
