import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { formatDate } from '@/utils/commonUtil';

interface ReactCalendarProps {
  curDate: string | null;
  getDate: (date: string | null) => void;
}

const ReactCalendar = ({ curDate, getDate }: ReactCalendarProps) => {
  const handleDateChange = (targetDate: Value) => {
    if (targetDate instanceof Date) {
      if (formatDate(targetDate) === curDate) {
        getDate(null);
        return;
      }
      getDate(formatDate(targetDate));
    }
  };
  return <Calendar value={curDate} onClickDay={handleDateChange} />;
};

export default ReactCalendar;
