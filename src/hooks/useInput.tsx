import { ChangeEvent, useState } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState<string>(initialValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const resetValue = () => setValue('');
  return [value, handleChange, resetValue] as const;
};

export default useInput;
