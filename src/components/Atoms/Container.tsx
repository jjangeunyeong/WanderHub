import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <div className="w-90 mx-auto my-8">{children}</div>;
};

export default Container;
