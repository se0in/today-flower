import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/Header.scss";
import { IoIosArrowBack } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { HeaderButton } from "../theme/globalStyle";

function Header() {
  //뒤로 가기 이벤트
  const navigate = useNavigate()
  // 메인 : 로고 그 외 페이지는 뒤로 가기
  const location = useLocation();

  

  const renderHeaderLeft = () => {
    if(location.pathname === '/') {
      return(
        <Link to="/">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "./images/logo.svg"}
            alt="logo"
          />
        </Link>
      )
    }else{
      return(
        <HeaderButton className="back" onClick={()=>{navigate(-1)}}>
          <IoIosArrowBack className="icon" />
        </HeaderButton>
      )
    }
  }
  //검색 아이콘 : 메인에서만 보임
  const renderHeaderSearch = () => {
    if (location.pathname === '/') {
      return (
        <Link to="/search">
        <HeaderButton className="search">
          <BiSearch className="icon" />
        </HeaderButton>
      </Link>
        )
    }
  }

  return (
    <header id="header">
      <div className="headerLeft">
        {renderHeaderLeft()}
      </div>
      <div className="headerRight">
        {renderHeaderSearch()}
      </div>
    </header>
  );
}
export default Header;
