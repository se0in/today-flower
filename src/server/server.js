import axios from 'axios';
const fetchData = async (month, day) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `http://apis.data.go.kr/1390804/NihhsTodayFlowerInfo01/selectTodayFlower01?serviceKey=${API_KEY}&fMonth=${month}&fDay=${day}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const xmlString = response.data;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");
      console.log('xmlDoc: ', xmlDoc);

      const id = xmlDoc.querySelector('dataNo'); /* id */
      console.log('idss: ', id);
      const month = xmlDoc.querySelector('fMonth'); /* 월 */
      console.log('month: ', month);
      const day = xmlDoc.querySelector('fDay'); /* 일 */
      console.log('day: ', day);
      const flowerName = xmlDoc.querySelector('flowNm'); /* 이름(한글) */
      console.log('flowerName: ', flowerName);
      const flowerEng = xmlDoc.querySelector('fEngNm'); /* 이름(영어) */
      console.log('flowerEng: ', flowerEng);
      const flowerLang = xmlDoc.querySelector('flowLang'); /* 꽃말 */
      console.log('flowerLang: ', flowerLang);
      const flowerContent = xmlDoc.querySelector('fContent'); /* 내용 */
      console.log('flowerContent: ', flowerContent);
      const flowerUse = xmlDoc.querySelector('fUse'); /* 이용 */
      console.log('flowerUse: ', flowerUse);
      const flowerGrow = xmlDoc.querySelector('fGrow'); /* 기르기 */
      console.log('flowerGrow: ', flowerGrow);
      const flowerType = xmlDoc.querySelector('fType'); /* 자생지 */
      console.log('flowerType: ', flowerType);
      const flowerImg1 = xmlDoc.querySelector('imgUrl1'); /* 이미지1 */
      console.log('flowerImg1: ', flowerImg1);
      const flowerImg2 = xmlDoc.querySelector('imgUrl2'); /* 이미지2 */
      console.log('flowerImg2: ', flowerImg2);
      const flowerImg3 = xmlDoc.querySelector('imgUrl3'); /* 이미지3 */
      console.log('flowerImg3: ', flowerImg3);

      if (flowerLang ) {
        return { 
          id: id.textContent, 
          month: month.textContent, 
          day: day.textContent, 
          flowerName: flowerName.textContent, 
          flowerEng: flowerEng.textContent, 
          flowerLang: flowerLang.textContent,
          flowerContent : flowerContent.textContent,
          flowerUse : flowerUse.textContent,
          flowerGrow : flowerGrow.textContent,
          flowerType : flowerType.textContent,
          flowerImgSrc1 : flowerImg1.textContent,
          flowerImgSrc2 : flowerImg2.textContent,
          flowerImgSrc3 : flowerImg3.textContent,
        };
      } else {
        console.log('잘못썼거나 api 중단 확인하세욧');
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