import React from 'react';

interface EditBtnProps {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditBtn = ({ isEdit, setIsEdit }: EditBtnProps) => {
  return (
    <button
      type="button"
      onClick={() => setIsEdit(!isEdit)}
      className="mt-16 h-10 w-32 flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    >
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="mr-2"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
      </svg>
      수정하기
    </button>
  );
};

export default EditBtn;
