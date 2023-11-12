import axios from 'axios';
const fetchData = async (month, day) => {
  
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01?serviceKey=${API_KEY}&fMonth=${month}&fDay=${day}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const xmlString = response.data;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");

      const flowerLang = xmlDoc.querySelector('flowLang');
      const flowerName = xmlDoc.querySelector('flowNm');
      const flowerImg1 = xmlDoc.querySelector('imgUrl1');
      const flowerImg2 = xmlDoc.querySelector('imgUrl2');
      const flowerImg3 = xmlDoc.querySelector('imgUrl3');
      
      if (flowerLang && flowerName ) {
        return { 
          flowerName: flowerName.textContent, 
          flowerLang: flowerLang.textContent,
          flowerImgSrc1 : flowerImg1.textContent,
          flowerImgSrc2 : flowerImg2.textContent,
          flowerImgSrc3 : flowerImg3.textContent,
        };
      } else {
        console.log('꽃 이름 또는 꽃말을 찾을 수 없습니다.');
        return null;
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

export { fetchData };
