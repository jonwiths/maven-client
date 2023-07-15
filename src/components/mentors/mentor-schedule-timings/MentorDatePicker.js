import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const MentorDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default MentorDatePicker;
