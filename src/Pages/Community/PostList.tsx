import React, { useEffect } from 'react';
import ViewsIcon from '@assets/viewsIcon.png';
import WanderHubAPI from '@/api/WanderHubAPI';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function getPostAll() {
      const res = await WanderHubAPI.get('/community?page=1&size=12');
      console.log(res);
    }
    getPostAll();
  }, []);

  return (
    <div onClick={() => navigate('/community/detail')} className="border-t">
      <div className="relative border-b p-5 hover:bg-zinc-100">
        <p className="font-semibold pb-7">제목제목제목제목제목제목제목제목</p>
        <span className="font-medium text-zinc-500">작성자</span>
        <img src={ViewsIcon} width="25px" className="absolute bottom-6 right-16" />
        <span className="absolute bottom-5 right-10 font-bold text-zinc-500">22</span>
      </div>
    </div>
  );
};

export default PostList;
