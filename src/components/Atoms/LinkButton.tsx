import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  path: string;
  classNameProps: string;
  children: string | React.ReactElement;
}

const LinkButton = ({ path, classNameProps, children }: LinkButtonProps) => (
  <Link to={path} className={classNameProps}>
    {children}
  </Link>
);

export default LinkButton;
