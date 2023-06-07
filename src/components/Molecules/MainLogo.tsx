import React from 'react';
import Logo from '@assets/logo.png';
import LinkButton from '@components/Atoms/LinkButton';
import Image from '@components/Atoms/Image';

const MainLogo = () => {
  return (
    <LinkButton path={'/'} classNameProps={'text-white font-bold text-xl'}>
      <Image src={Logo} alt="mainLogo" />
    </LinkButton>
  );
};

export default MainLogo;
