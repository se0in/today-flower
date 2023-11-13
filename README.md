# 임시 readme 
- 컴포넌트 순서
```javascript
<BrowserRouter> //react-router-dom을 감싸는 최상단
      <ThemeProvider theme={themeMode}> //styled-components 스타일을 전역적으로 공유. ThemeProvider로 감싼 하위들은 모두 theme props를 사용할 수 있다.
        <GlobalStyle /> //reset할 스타일과 styled-components 정의해서 글로벌로 사용 (지우면 동작 안함)
        <div className="App"> //.App
          <Header /> 
          <div className="content"> //Header가 fixed라 content 위로 여백 넣음
            <Routes> //Router 동작 될 부분
              <Route
                path="/"
                element={
                  <Main toggleTheme={toggleTheme} themeMode={themeMode} />
                }
              />
              //Main안에 ThemeBtn 컴포넌트가 있는데 테마를 바꿔줄 버튼이라 Props 전달
              <Route path="/search" element={<Search />} />
              // 주소/search에 보여질 부분
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
```

- 뒤로가기 이벤트 만드는 법(짱쉬움)
```javascript
//라우터 라이브러리 제공
import { useNavigate } from "react-router-dom";
// 훅
const navigate = useNavigate()
// 클릭할 곳에 넣기만 하면 됨 (-1 = 뒤로 한 번 가기)
<HeaderButton className="back" onClick={()=>{navigate(-1)}}>
```

- 위치하는 페이지에 따라 헤더 아이콘 다르게 띄우기
- 로고는 메인에서만, 그 외의 페이지에선 뒤로가기 아이콘을 띄워야 하는 상황
```javascript
import { Link, useLocation } from "react-router-dom";
const location = useLocation();

//함수 
const renderHeaderIcons = () => {
    if(location.pathname === '/') { ///루트일 때 표시할 아이콘
      return(
        <Link to="/">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "./images/logo.svg"}
            alt="logo"
          />
        </Link>
      )
    }else{ //그 외 페이지일 경우
      return(
        <HeaderButton className="back" onClick={()=>{navigate(-1)}}>
          <IoIosArrowBack className="icon" />
        </HeaderButton>
      )
    }
  }
  //...생략
  //함수만 넣어주면 된다.
  <div className="headerIcons">
    {renderHeaderIcons()}
  </div>
```

- 리액트 스와이퍼 모듈 필수 연결
```javascript
//필수 불러오시
import 'swiper/scss/pagination';
//모듈 연결
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';
// 코드 내 모듈에도 작성
  modules={[EffectCards, Pagination, Autoplay]}
```

- 버튼에 따라 다른 input 나오는 법
```javascript
//useState 사용
  const handleButtonClick = (type) => {
    setSearchType(type);
  };
  // 버튼 만들고 각각 인자 입력
  <button onClick={() => handleButtonClick("name")}>꽃 이름</button>
  <button onClick={() => handleButtonClick("date")}>날짜</button>
  //클릭 시 노출할 영역에 작성
  {searchType === "name" && (
    <SearchInputBox>
      <input type="text" placeholder="꽃 이름을 검색해주세요" />
      <button className='SearchBtn'>
        <BiSearch className='icon'/>
      </button>
    </SearchInputBox>
  )}
  //...생략 위와 같이 하단에 date부분도 만들면 됨
```

-env에 환경변수 넣는 법
1. server/server.js는 src 안에 있어야 한다
  - 최상단루트에 놓았더니 "프로젝트 디렉토리 외부에 있는 모듈을 상대 경로로 import하려고 시도했을 때 발생"하는 오류가 뜸
2. env파일은 최상단 루트(package.json와 동일한 위치)에 있어야 한다 
- REACT_APP_API_KEY = 키코드
  변수 선언 않고 바로 입력
  "",''로 묶을 필요 없다.
  ;(세미콜론)이나 ,(쉼표) 넣기 않기
  변수명 앞에는 REACT_APP_이 꼭 붙어야 한다.