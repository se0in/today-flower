import React from "react";
import { ThemeButton, ThemeText } from "../theme/globalStyle";

const ThemeBtn = ({ toggleTheme, themeMode }) => {
  return (
    <>
      <ThemeText>{themeMode.buttonTextThemeChange}</ThemeText>
      <ThemeButton className="themeBtn" onClick={toggleTheme}>
        <span></span>
      </ThemeButton>
    </>
  );
};

export default ThemeBtn;
