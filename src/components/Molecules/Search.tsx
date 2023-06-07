import React from 'react';
import Button from '@components/Atoms/Button';
import TextInput from '@components/Atoms/TextInput';
import useInput from '@/hooks/useInput';

interface SearchProps {
  BoxClassNameProps?: string;
  buttonProps: {
    children: string;
    classNameProps?: string;
  };
  inputProps: {
    classNameProps?: string;
    placeholder: string;
  };
}
const Search = ({ BoxClassNameProps, buttonProps, inputProps }: SearchProps) => {
  const [targetVal, onChangeTarget, resetValue] = useInput('');
  const handleSearch = () => {
    console.log('검색어:', targetVal);
    resetValue();
  };
  return (
    <div className={BoxClassNameProps ?? 'my-3 text-center'}>
      <TextInput {...inputProps} val={targetVal} changeEvent={onChangeTarget} />
      <Button clickEvent={handleSearch}>{buttonProps?.children}</Button>
    </div>
  );
};

export default Search;
