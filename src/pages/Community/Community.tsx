import React, { useState } from 'react';
import Header from '@components/Common/Header';
import Modal from '@pages/Login/Modal';
import Board from '@pages/Community/Board';

const Community = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Header setOpenModal={setOpenModal} />
      <Board />
      {openModal ? <Modal setOpenModal={setOpenModal} /> : ''}
    </div>
  );
};

export default Community;
