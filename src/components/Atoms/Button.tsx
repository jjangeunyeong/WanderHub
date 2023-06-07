import React from 'react';

export interface ButtonProps {
  clickEvent: () => void;
  classNameProps?: string;
  children: string | React.ReactElement;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ clickEvent, classNameProps, children, type }: ButtonProps) => (
  <button
    onClick={clickEvent}
    type={type}
    className={
      classNameProps ??
      'text-gray-300 hover:text-white border border-gray-300 rounded-full px-4 py-2 bg-primary'
    }
  >
    {children}
  </button>
);

export default Button;
