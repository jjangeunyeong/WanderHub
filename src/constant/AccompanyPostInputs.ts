export const accompanyPostInputs: Array<{
  htmlFor: string;
  labelText: string;
  placeholder: string;
  type:
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
  compType: string;
  isReadOnly: boolean;
}> = [
  {
    htmlFor: 'nickname',
    labelText: '닉네임',
    placeholder: '닉네임을 입력하세요',
    type: 'text',
    compType: 'input',
    isReadOnly: false,
  },
  {
    htmlFor: 'maxPeople',
    labelText: '최대인원',
    placeholder: '숫자를 입력해주세요.',
    type: 'number',
    compType: 'input',
    isReadOnly: false,
  },
  {
    htmlFor: 'location',
    labelText: '장소',
    placeholder: '장소를 검색해주세요.',
    type: 'text',
    compType: 'iconInput',
    isReadOnly: true,
  },
  {
    htmlFor: 'title',
    labelText: '제목',
    placeholder: '제목을 입력해주세요.',
    type: 'text',
    compType: 'input',
    isReadOnly: false,
  },
  {
    htmlFor: 'content',
    labelText: '내용',
    placeholder: '내용을 입력해주세요.',
    type: 'text',
    compType: 'textarea',
    isReadOnly: false,
  },
];
