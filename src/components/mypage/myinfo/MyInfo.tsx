import React, { useState, useCallback, ChangeEvent } from 'react';
import { mapList } from '@/constant/MapPath';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@/recoil/login/userInfoAtoms';
import Logo from '@assets/logo.png';
import AuthAPI from '@/api/AuthAPI';
import DeleteCheckModal from '../../../pages/MyPage/components/DeleteCheckModal';

// type UserProfileType = {
//   name: string;
//   region: string;
//   email: string;
// };

const MyInfo = () => {
  // const [user, setUser] = useState<UserProfileType>({
  //   name: '',
  //   region: '',
  //   email: '',
  // });
  const userInfo = useRecoilValue(userInfoAtom);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [userRegion, setUserRegion] = useState(userInfo.local);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  //const [tempUser, setTempUser] = useState<UserProfileType>({ ...user });
  //const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleEdit = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  const patchUserData = async () => {
    const patchData = { local: userRegion };
    const { data } = await AuthAPI.patch('/members', patchData);
    setUserInfo(data.data);
    setIsEditing(false);
  };

  const handleSave = () => {
    //setUser(tempUser);
    //console.log(userRegion);
    patchUserData();
    //setIsEditing(!isEditing);
  };

  // const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   setTempUser(prevTempUser => ({ ...prevTempUser, [e.target.name]: e.target.value }));
  //}, [])

  const handleChangeRegion = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserRegion(e.target.value);
  };

  // const handleImageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   console.log(selectedImage);
  //   if (file) {
  //     setSelectedImage(file);
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setTempUser(prevTempUser => ({ ...prevTempUser, profileImage: reader.result as string }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }, []);

  return (
    <>
      <div className="absolute right-[1rem] top-[1rem]">
        <button
          onClick={isEditing ? handleSave : handleEdit}
          className="px-4 py-2 border rounded bg-primary text-white"
        >
          {isEditing ? '저장' : '수정'}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center w-[50%] h-full">
        {/* <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border px-2 py-1"
          /> */}
        <img
          src={Logo}
          alt="Profile"
          className="w-52 h-52 border border-gray-300 rounded-full mx-auto"
        />
        <div
          style={{ justifyItems: 'flex-start', gridTemplateColumns: '30% 80%' }}
          className="grid content-center grid-cols-2 gap-2 w-52 mt-10 mb-[20%]"
        >
          <label className="font-bold text-right">닉네임 : </label>
          <span>{userInfo.nickName}</span>
          <label className="font-bold text-right">지역 : </label>
          {isEditing ? (
            <select
              name="region"
              value={userRegion}
              onChange={handleChangeRegion}
              className="border px-2 py-1"
            >
              {mapList.map(item => (
                <option key={item.id} value={item.id}>
                  {item.id}
                </option>
              ))}
            </select>
          ) : (
            <span>{userInfo.local}</span>
          )}
          <label className="font-bold text-right">이메일 : </label>
          <span>{userInfo.email}</span>
          {isEditing && (
            <button
              type="button"
              onClick={() => setIsOpenDeleteModal(true)}
              className="float-right mt-2 h-10 w-32 flex justify-center items-center bg-red-500 hover:bg-red-700 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>{' '}
              </svg>
              계정탈퇴
            </button>
          )}
        </div>
        {isOpenDeleteModal && <DeleteCheckModal setIsOpenDeleteModal={setIsOpenDeleteModal} />}
      </div>
    </>
  );
};

export default MyInfo;
