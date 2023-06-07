import React, { ChangeEvent } from 'react';

export interface TextInputProps {
  classNameProps?: string;
  placeholder: string;
  val: string;
  changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}
const TextInput = ({ classNameProps, placeholder, val, changeEvent }: TextInputProps) => (
  <input
    value={val}
    placeholder={placeholder}
    onChange={changeEvent}
    type="text"
    className={classNameProps ?? 'border-2 w-8/12 h-9 px-3'}
  />
);

export default TextInput;
