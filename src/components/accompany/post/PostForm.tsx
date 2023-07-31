import { accompanyPostInputs } from '@/constant/AccompanyPostInputs';
import React, { ChangeEvent, useState } from 'react';
import InputWithLabel from '@components/accompany/InputWithLabel';
import { FormDataType } from './PostDataHandleBox';

const initialState: FormDataType = {
  // nickname: '',
  maxNum: '',
  placeTitle: '',
  accompanyTitle: '',
  accompanyContent: '',
  accompanyLocal: '',
  coordX: '',
  coordY: '',
};
interface PostFormProps {
  handleSubmit: (formData: FormDataType) => void;
}
export interface KakaoSearchValType {
  placeTitle: string;
  accompanyLocal: string;
  coordX: string;
  coordY: string;
}

const PostForm = ({ handleSubmit }: PostFormProps) => {
  const [form, setForm] = useState<FormDataType>({ ...initialState });

  const handleChange = (
    val: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | KakaoSearchValType,
  ) => {
    if ('placeTitle' in val) {
      setForm({
        ...form,
        ['placeTitle']: val.placeTitle,
        ['accompanyLocal']: val.accompanyLocal,
        ['coordX']: val.coordX,
        ['coordY']: val.coordY,
      });
      return;
    }
    setForm({
      ...form,
      [val.target.id]: val.target.id !== 'maxNum' ? val.target.value : parseInt(val.target.value),
    });
  };
  const getFormData = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(form);
  };

  return (
    <form id="accompanyPostForm" onSubmit={getFormData}>
      {accompanyPostInputs.map((item, idx) => {
        return (
          <div key={idx} className="flex flex-col items-start align-baseline mb-2">
            <InputWithLabel
              labelProps={item}
              inputProps={{
                placeholder: item.placeholder,
                value: form[item.htmlFor as keyof typeof form],
                handleChange,
                id: item.htmlFor,
                compType: item.compType,
                isReadOnly: item.isReadOnly,
                type: item.type,
              }}
            />
          </div>
        );
      })}
    </form>
  );
};

export default PostForm;
