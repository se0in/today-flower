import React from 'react'
// import styled from 'styled-components';
import Main from './components/Main'
import Header from './components/Header'
import './scss/global/_Reset.scss';
import './scss/global/_Common.scss';
// import './scss/global/_Mixin.scss';
import './scss/global/_Variables.scss';
import './scss/App.scss'




function App() {
  return(
    <div className="App">
      <Header ></Header>
      <Main/>
    </div>
  )
}
export default App;