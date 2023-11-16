import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

// 요청 주소 : 국립원예특작과학원 오늘의 꽃 목록 (이름 검색)
const fetchDataName = async (searchTerm) => {
  const url = `http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlowerList01?serviceKey=${API_KEY}&searchType=1&searchWord=${searchTerm}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");

      const extractData = (tagName) => Array.from(xmlDoc.querySelectorAll(tagName)).map((item) => item.textContent);

      /* 이름 검색 리스트 출력 시 필요한 정보 : 이름, 아이디, 월, 일, 사진1 */
      const flowerNames = extractData('flowNm');
      const ids = extractData('dataNo');
      const month = extractData('fMonth');
      const day = extractData('fDay');
      const flowerImg1 = extractData('imgUrl1');

      if (flowerNames && ids) {
        const data = flowerNames.map((flowerName, index) => ({
          flowerName,
          id: ids[index],
          month: month[index],
          day: day[index],
          flowerImg1: flowerImg1[index],
        }));

        return data;

      } else {
        // console.log('일치하는 꽃이름이 없습니다.');
        return [];
      }

    } else {
      console.log('데이터 불러오기 실패:', response.status);
      return null;
    }
  } catch (error) {
    console.error('에러:', error);
    return null;
  }
};


// 요청 주소 : 국립원예특작과학원 오늘의 꽃 정보 , 목록, 상세정보 (오늘의 꽃, 날짜 검색, 상세 페이지 데이터)
const fetchData = async (month, day) => {
  // const url = `http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01?serviceKey=${API_KEY}&fMonth=${month}&fDay=${day}`;
  
  /* 트래픽 초과 시 대체할 url */
  //주의 : 하단 url변수는 내용,이용,기르는 법 등을 제공하지 않는 api이니 테스트 용도로만 사용할 것
  const url = `http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlowerList01?serviceKey=${API_KEY}&fMonth=${month}&fDay=${day}`;

  // 주의 하단의 url변수는 요청변수에 인덱스를 요하므로 테스트 용도로만 사용할 것
  // const url = `http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlowerView01?serviceKey=${API_KEY}&dataNo=1`;

  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const parser = new DOMParser();
      /**
       * @xmlDoc api 접속 불가 시 찍어볼 것 : xmlDoc
       */
      const xmlDoc = parser.parseFromString(response.data, "text/xml"); 
    
      const extractField = (tagName) => (xmlDoc.querySelector(tagName) || '').textContent;
    
      const data = {
        id: extractField('dataNo'),
        month: extractField('fMonth'),
        day: extractField('fDay'),
        flowerName: extractField('flowNm'),
        flowerEng: extractField('fEngNm'),
        flowerLang: extractField('flowLang'),
        flowerContent: extractField('fContent'),
        flowerUse: extractField('fUse'),
        flowerGrow: extractField('fGrow'),
        flowerType: extractField('fType'),
        flowerImgSrc1: extractField('imgUrl1'),
        flowerImgSrc2: extractField('imgUrl2'),
        flowerImgSrc3: extractField('imgUrl3'),
        publishOrg: extractField('publishOrg'),
      };
      const hasRequiredFields = data.flowerName || data.month;
    
      if (!hasRequiredFields) {
        console.log('필수 필드가 누락되었거나 잘못된 데이터입니다. API 상태를 확인해주세요.');
        return null;
      }
    
      return data;
    

    } else {
      console.log('데이터 불러오기 실패:', response.status);
      return null;
    }
  } catch (error) {
    console.error('에러:', error);
    return null;
  }
};

export { fetchData, fetchDataName };