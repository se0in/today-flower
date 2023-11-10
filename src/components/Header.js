import React from 'react'
import '../scss/Header.scss'
import { IoChevronBackOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-left">
        <button className='back'>
          <IoChevronBackOutline className='icon' />
        </button>
        r
      </div>
      <button className='search'>
        <AiOutlineSearch className='icon' />
      </button>
      <Link to="/search">이동</Link>
    </header>
  )
}
export default Header;