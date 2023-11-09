import React from 'react'
import '../scss/Header.scss'
import { IoChevronBackOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";


function Header() {
  return (
    <header>
      <button className='back'>
        <IoChevronBackOutline className='icon' />
      </button>
      <h2>위치</h2>
      <button className='search'>
        <AiOutlineSearch className='icon' />
      </button>
    </header>
  )
}
export default Header;