import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import styled from 'styled-components';
// import Header from './components/Header'

import './scss/global/_Reset.scss';
import './scss/global/_Common.scss';
import './scss/global/_Variables.scss';
import './scss/App.scss'

import Header from './components/Header';
import Main from './components/Main'
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  )
}
export default App;