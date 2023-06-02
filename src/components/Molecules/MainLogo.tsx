import Logo from '@assets/logo.png';
import LinkButton from '@components/Atoms/LinkButton';
import Image from '@components/Atoms/Image';
import React from 'react';

const MainLogo = () => {
  return (
    <LinkButton path={'/'} classNameProps={'text-white font-bold text-xl'}>
      <Image src={Logo} alt="mainLogo" width={50} height={50} />
    </LinkButton>
  );
};

export default MainLogo;
