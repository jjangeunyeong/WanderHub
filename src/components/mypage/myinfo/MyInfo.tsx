import React, { useState, useCallback, ChangeEvent } from 'react';
import { mapList } from '@/constant/MapPath';

type UserProfileType = {
  name: string;
  region: string;
  email: string;
  profileImage: string;
};

const MyInfo = () => {
  const [user, setUser] = useState<UserProfileType>({
    name: 'User Name',
    region: '서울',
    email: 'user@example.com',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XypT9CzoXN60AoEj6MFesk3FZ1XGQP1853I5BqS2Wg&s',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempUser, setTempUser] = useState<UserProfileType>({ ...user });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleEdit = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  const handleSave = useCallback(() => {
    console.log(tempUser);

    setUser(tempUser);
    setIsEditing(!isEditing);
  }, [tempUser, isEditing]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTempUser(prevTempUser => ({ ...prevTempUser, [e.target.name]: e.target.value }));
  }, []);

  const handleImageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    console.log(selectedImage);
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempUser(prevTempUser => ({ ...prevTempUser, profileImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

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
        {isEditing ? (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border px-2 py-1"
          />
        ) : (
          <img src={user.profileImage} alt="Profile" className="w-52 h-52 rounded-full mx-auto" />
        )}
        <div
          style={{ justifyItems: 'flex-start', gridTemplateColumns: '30% 80%' }}
          className="grid content-center grid-cols-2 gap-2 w-52 mt-10 mb-[20%]"
        >
          <label className="font-bold text-right">닉네임 : </label>
          <span>{user.name}</span>
          <label className="font-bold text-right">지역 : </label>
          {isEditing ? (
            <select
              name="region"
              value={tempUser.region}
              onChange={handleChange}
              className="border px-2 py-1"
            >
              {mapList.map(item => (
                <option key={item.id}>{item.id}</option>
              ))}
            </select>
          ) : (
            <span>{user.region}</span>
          )}
          <label className="font-bold text-right">이메일 : </label>
          <span>{user.email}</span>
        </div>
      </div>
    </>
  );
};

export default MyInfo;
