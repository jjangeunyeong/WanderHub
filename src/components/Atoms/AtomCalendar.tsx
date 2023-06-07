import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Value } from 'react-calendar/dist/cjs/shared/types';

const AtomCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const handleDateChange = (targetDate: Value) => {
    if (targetDate instanceof Date) {
      // console.log(targetDate);
      // console.log(targetDate.getFullYear());
      // console.log(targetDate.getMonth() + 1);
      // console.log(targetDate.getDate());
      setDate(targetDate);
    }
  };

  return <Calendar value={date} onClickDay={handleDateChange} />;
};

export default AtomCalendar;
