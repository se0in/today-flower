import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    background-color : ${({ theme }) => theme.bgColor};
    color : ${({ theme }) => theme.textColor};
  }
`;

export const PointText = styled.p`
  color : ${({theme}) => theme.pointTextColor};
`
export const SubText = styled.p`
  color : ${({theme}) => theme.subTextColor};
  font-size : 16px;
`

export const ThemeButton = styled.button`
  background-color: ${({theme}) => theme.btnColor};
  color: ${({theme}) => theme.textColor};
  width: 38px;
  height: 22px;
`;

export const HeaderButton = styled.button`
  background-color: ${({theme}) => theme.btnColor};
  color: ${({theme}) => theme.subTextColor};
  width: 44px;
  height: 44px;
  border-radius: 50%;
`