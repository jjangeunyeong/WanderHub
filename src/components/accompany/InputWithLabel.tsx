import React, { ChangeEvent, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import KakaoSearchModal from './post/KakaoSearchModal';
import { KakaoSearchValType } from './post/PostForm';

interface LabelProps {
  htmlFor: string;
  classNameProps?: string;
  labelText: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value: string | number;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | KakaoSearchValType,
  ) => void;
  classNameProps?: string;
  id: string;
  compType?: string;
  isReadOnly: boolean;
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
  const getLocalName = (localName: string): string => {
    const beforeName = localName.split(' ')[0];
    let returnName = '';
    switch (beforeName) {
      case '강원특별자치도':
        return (returnName = '강원도');
      case '경기':
        return (returnName = '경기도');
      case '경남':
        return (returnName = '경상남도');
      case '경북':
        return (returnName = '경상북도');
      case '광주':
        return (returnName = '광주');
      case '대구':
        return (returnName = '대구');
      case '대전':
        return (returnName = '대전');
      case '부산':
        return (returnName = '부산');
      case '서울':
        return (returnName = '서울');
      case '세종특별자치시':
        return (returnName = '세종');
      case '울산':
        return (returnName = '울산');
      case '인천':
        return (returnName = '인천');
      case '전남':
        return (returnName = '전라남도');
      case '전북':
        return (returnName = '전라북도');
      case '제주특별자치도':
        return (returnName = '제주도');
      case '충남':
        return (returnName = '충청남도');
      case '충북':
        return (returnName = '충청북도');
    }
    return returnName;
  };
  const getLocation = (address_name: string, place_name: string, x: string, y: string) => {
    console.log(place_name, x, y);
    getLocalName(address_name);
    const test = {
      placeTitle: place_name,
      accompanyLocal: getLocalName(address_name),
      coordX: x,
      coordY: y,
    };
    handleChange(test);
    // handleChange(place_name, x);
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
