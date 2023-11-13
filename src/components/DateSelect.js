import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const DateSelect = () => {
  /* 현재 선택된 월, 일 추적 */
  const [selectMonth, setSelectMonth] = useState("월 선택");
  const [selectDay, setSelectDay] = useState("일 선택");

  /* 1월부터 12월 생성 */
  const months = Array.from({ length: 12 }, (_, index) => index + 1); //[1,2,3 ..., 12]

  const daysInMonth = (month, year) => {
    //2월 윤달 29일 항상 표시
    if (month === 2) return 29;
    return new Date(year, month, 0).getDate();
  };

  const handleChangeMonth = (e) => {
    const selectedMonth = e.target.value;
    setSelectMonth(selectedMonth);
    /* 월 선택했다면 일 전체로 보이도록 */
    selectedMonth === "월 선택" ? setSelectDay("일 선택") : setSelectDay("전체");
  };

  /* 문자열 parseInt 이용하여 정수로 반환 */
  const handleChangeDay = (e) => setSelectDay(parseInt(e.target.value, 10));

  return (
    <>
      <select value={selectMonth} onChange={handleChangeMonth} required>
        <option disabled>월 선택</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}월
          </option>
        ))}
      </select>
      {/* 월 선택 시 해당 일수 보임 기본 : 전체 */}
      {selectMonth !== "월 선택" && (
        <select value={selectDay} onChange={handleChangeDay}>
          <option disabled>일 선택</option>
          <option value="">전체</option>
          {/* 선택된 월에 따라 해당 월의 일수만큼 옵션 생성 : daysInMont*/}
          {Array.from(
            { length: daysInMonth(selectMonth, new Date().getFullYear()) },
            (_, index) => index + 1
          ).map((day) => (
            <option key={day} value={day}>
              {day}일
            </option>
          ))}
        </select>
      )}
      <button className="SearchBtn">
        <BiSearch className="icon" />
      </button>
    </>
  );
};

export default DateSelect;
