import React from 'react';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <section className="bg-white pb-[20px] pt-[30px]">
      <div className="mx-auto sm:container">
        <div className="border-primary border-l-[5px] pl-5">
          <h2 className="text-xl font-semibold text-black">{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default Title;
