import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

const DateSelect = ({ handleSearch }) => {
  const [selectMonth, setSelectMonth] = useState("월 선택");
  const [selectDay, setSelectDay] = useState("일 선택");
  const [isAllDaysSelected, setIsAllDaysSelected] = useState(false);
  const [daysArray, setDaysArray] = useState([]);
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const daysInMonth = (month, year) => {
    return month === "2" ? 29 : new Date(year, month, 0).getDate();
  };

  const handleChangeMonth = (e) => {
    const selectedMonth = e.target.value;
    setSelectMonth(selectedMonth);
  };

  useEffect(() => {
    if (selectMonth !== "월 선택") {
      const lastDay = daysInMonth(selectMonth, new Date().getFullYear());
      const tempDaysArray = [];
      for (let i = 1; i <= lastDay; i++) {
        tempDaysArray.push(i);
      }
      setDaysArray(tempDaysArray);
    }
  }, [selectMonth]);

  const handleDateSelect = () => {
    if (!isAllDaysSelected && selectMonth !== "월 선택" && selectDay !== "일 선택") {
      const selectedDateString = `${selectMonth}-${selectDay}`;
      handleSearch(selectedDateString);
    } else if (isAllDaysSelected) {
      const lastDayOfMonth = daysInMonth(selectMonth, new Date().getFullYear());
      const allDays = Array.from({ length: lastDayOfMonth }, (_, index) => `${selectMonth}-${index + 1}`);
      setIsAllDaysSelected(true);
      handleSearch(allDays);
    }
  };

  const handleChangeDay = (e) => {
    const selectedDay = e.target.value;

    if (selectedDay === "all") {
      setIsAllDaysSelected(true);
    } else {
      setIsAllDaysSelected(false);
      setSelectDay(selectedDay);
    }
  };

  return (
    <>
      <select value={selectMonth} onChange={handleChangeMonth}>
        <option disabled>월 선택</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}월
          </option>
        ))}
      </select>
      {selectMonth !== "월 선택" && (
        <select value={isAllDaysSelected ? "all" : selectDay} onChange={handleChangeDay}>
          <option disabled>일 선택</option>
          <option value="all">전체</option>
          {daysArray.map((day) => (
            <option key={day} value={day}>
              {day}일
            </option>
          ))}
        </select>
      )}
      <button className="SearchBtn" onClick={handleDateSelect}>
        <BiSearch className="icon" />
      </button>
    </>
  );
};

export default DateSelect;
