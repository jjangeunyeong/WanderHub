import React from 'react';

interface ButtonProps {
  clickEvent: () => void;
  classNameProps: string;
  children: string | React.ReactElement;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ clickEvent, classNameProps, children, type }: ButtonProps) => (
  <button onClick={clickEvent} type={type} className={classNameProps}>
    {children}
  </button>
);

export default Button;
