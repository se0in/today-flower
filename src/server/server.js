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


// 요청 주소 : 국립원예특작과학원 오늘의 꽃 정보 (오늘의 꽃, 날짜 검색, 상세 페이지 데이터)
const fetchData = async (month, day) => {
  const url = `http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01?serviceKey=${API_KEY}&fMonth=${month}&fDay=${day}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");

      const extractField = (tagName) => (xmlDoc.querySelector(tagName) || '').textContent;

      const data = {
        id: extractField('dataNo'), /* id */
        month: extractField('fMonth'), /* 월 */
        day: extractField('fDay'), /* 일 */
        flowerName: extractField('flowNm'), /* 이름(한글) */
        flowerEng: extractField('fEngNm'), /* 이름(영어) */
        flowerLang: extractField('flowLang'), /* 꽃말 */
        flowerContent: extractField('fContent'), /* 내용 */
        flowerUse: extractField('fUse'), /* 이용 */
        flowerGrow: extractField('fGrow'), /* 기르기 */
        flowerType: extractField('fType'), /* 자생지 */
        flowerImgSrc1: extractField('imgUrl1'), /* 이미지1 */
        flowerImgSrc2: extractField('imgUrl2'), /* 이미지2 */
        flowerImgSrc3: extractField('imgUrl3'), /* 이미지3 */
        publishOrg: extractField('publishOrg'), /* 출처 */
      }

      const hasRequiredFields = data.flowerName || data.month;
      if (!hasRequiredFields) {
        // console.log('필수 필드 누락 혹은 잘못된 데이터, api 상태 확인');
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