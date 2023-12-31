import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./index.css";
import "./scss/App.scss";

import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";
import Detail from "./components/Detail";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyle";

import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  const [themeMode, setThemeMode] = useState(lightTheme);

  // 버튼 클릭 시 테마 변경
  const toggleTheme = () => {
    setThemeMode((currentTheme) =>
      currentTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <div className="App">
        <Header 
        toggleTheme={toggleTheme} themeMode={themeMode}
        />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Main toggleTheme={toggleTheme} themeMode={themeMode} />
              }
            />
            <Route path="/search" element={<Search />} />
            <Route path="/detail/:month/:day" element={<Detail/>} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
