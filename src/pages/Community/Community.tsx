import React from 'react';
import Header from '@components/common/Header';
import Button from '@pages/Community/Button';
import PostList from '@pages/Community/PostList';
import Footer from '@components/common/Footer';

const Community = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center relative">
        <div className="flex flex-col w-[70%] mb-10 min-h-[80vh]">
          <Button />
          <PostList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
