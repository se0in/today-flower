import React from "react";
import { ThemeButton, ThemeText } from "../theme/globalStyle";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const ThemeBtn = ({ toggleTheme, themeMode }) => {

  return (
    <>
      <ThemeText>{themeMode.buttonTextThemeChange}</ThemeText>
      <ThemeButton onClick={toggleTheme}>
        <span className="themeBtn">
          {
            themeMode.buttonTextThemeChange === "light mode" ? 
            <IoMdSunny 
            style={{
              fontSize: "20px",
              verticalAlign: "-3px",
              color : "#FF941A"
            }}/> : 
            <FaMoon />
          }
        </span>
      </ThemeButton>
    </>
  );
};

export default ThemeBtn;
