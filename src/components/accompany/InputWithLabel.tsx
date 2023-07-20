import React, { ChangeEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import KakaoSearchModal from './post/KakaoSearchModal';
interface LabelProps {
  htmlFor: string;
  classNameProps?: string;
  labelText: string;
}
export interface InputProps {
  placeholder: string;
  value: string | number;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => void;
  classNameProps?: string;
  id: string;
  compType?: string;
  isReadOnly: boolean;
  type?:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'tel'
    | 'url'
    | 'date'
    | 'time'
    | 'checkbox'
    | 'radio'
    | 'file';
}

interface InputWithLabelProps {
  labelProps: LabelProps;
  inputProps: InputProps;
}

const InputWithLabel = ({ labelProps, inputProps }: InputWithLabelProps) => {
  const TextFieldOption = (compType: string | undefined) => {
    switch (compType) {
      case 'input':
        return <TextInput {...inputProps} />;
      case 'iconInput':
        return <InputWithIcon {...inputProps} />;
      case 'textarea':
        return <Textarea {...inputProps} />;
      default:
        return <div>Default Option</div>;
    }
  };
  return (
    <>
      <label htmlFor={labelProps.htmlFor} className={labelProps.classNameProps}>
        {labelProps.labelText}
      </label>
      {TextFieldOption(inputProps.compType)}
    </>
  );
};

export default InputWithLabel;

const TextInput = ({ placeholder, value, handleChange, id, isReadOnly, type }: InputProps) => (
  <input
    required
    value={value}
    placeholder={placeholder}
    onChange={handleChange}
    type={type}
    id={id}
    readOnly={isReadOnly}
    className={
      'w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
    }
  />
);

const Textarea = ({ placeholder, value, handleChange, id, isReadOnly }: InputProps) => (
  <textarea
    required
    value={value}
    placeholder={placeholder}
    onChange={handleChange}
    id={id}
    readOnly={isReadOnly}
    className={
      'w-full h-[15vh] resize-none px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
    }
  />
);
const InputWithIcon = ({ id, handleChange }: InputProps) => {
  const [locationVal, setLocationVal] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [placeholder, setPlaceHolder] = useState('장소를 검색해주세요.');
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const getLocation = (place_name: string, x: string, y: string) => {
    console.log('@@@@@', place_name, x, y);
    handleChange(place_name);
    setLocationVal(place_name);
    handleModal();
  };
  return (
    <>
      <div className="relative w-full">
        <input
          required
          value={locationVal}
          type="text"
          id={id}
          placeholder={placeholder}
          readOnly={!locationVal ? false : true}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          onFocus={() => setPlaceHolder('돋보기를 클릭해주세요.')}
          onBlur={() => setPlaceHolder('장소를 검색해주세요.')}
          onChange={() => setLocationVal('')}
        />
        <div onClick={handleModal} className="absolute right-2 top-2 bottom-2 flex items-center">
          <AiOutlineSearch className="text-gray-500 cursor-pointer text-2xl hover:text-green-500" />
        </div>
      </div>
      {isOpen && <KakaoSearchModal handleModal={handleModal} getLocation={getLocation} />}
    </>
  );
};
