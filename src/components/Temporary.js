import React, { useState } from "react";
import axios from 'axios';
import "./scss/App.scss";

function App() {
  // hook
  const [monthValue, setMonthValue] = useState('');
  const [dayValue, setDayValue] = useState('');
  const [flowerName, setFlowerName] = useState('');
  const [flowerLang, setFlowerLang] = useState('');

  //나중에 숨기기

  const fetchData = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01?serviceKey=${API_KEY}&fMonth=${monthValue}&fDay=${dayValue}`;

    try {
      const response = await axios.get(url);


      if(response.status === 200) {
        //xml 문자열로 파싱
        const xmlString = response.data; 
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");

        //꽃말과 이름 가져와서 변수 선언
        const flowerLang = xmlDoc.querySelector('flowLang');
        const flowerName = xmlDoc.querySelector('flowNm');

        //존재하면? h1,h2에 담기
        if(flowerLang && flowerName) {
          const flowerLangText = flowerLang.textContent
          console.log('flowerLangText: ', flowerLangText);
          const flowerNameText = flowerName.textContent
          console.log('flowerNameText: ', flowerNameText);

          //set함수에 담기
          setFlowerName(flowerNameText)
          setFlowerLang(flowerLangText)
          
        }else {
          console.log('꽃 이름 못찾음..ㅠㅠ');
        }
      }else {
        console.log('data 불러오기 실패요');
      }
    }catch(error){
      console.log('에러!!!!!! :', error);
    }
  }


  const handleButtonClick = () => {
    fetchData();
  }


  return (
    {/* <div className="App">
      <h1>꽃 이름 : <span>{flowerName}</span></h1>
      <h2>꽃말 : <span>{flowerLang}</span></h2>

      <select 
      name="month" 
      id="month" 
      value={monthValue}
      onChange={(e)=>{setMonthValue(e.target.value)}}
      >
        <option>선택하세요</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      
      <select 
      name="day" 
      id="day" 
      value={dayValue}
      onChange={(e)=>{setDayValue(e.target.value)}}
      >
        <option>선택하세요</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>

    <button 
    className="done"
    onClick={handleButtonClick}
    >검색</button>

    </div> */}
  )
}

export default App;