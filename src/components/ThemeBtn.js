import React from 'react';
import { ThemeButton } from '../theme/globalStyle';

const ThemeBtn = ({ toggleTheme, themeMode }) => {
  return (
    <ThemeButton 
      className='themeBtn' 
      onClick={toggleTheme}>
      {themeMode.buttonTextThemeChange}
    </ThemeButton>
  );
};

export default ThemeBtn;
