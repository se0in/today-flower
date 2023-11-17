import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    background-color : ${({ theme }) => theme.bgColor};
    color : ${({ theme }) => theme.textColor};
    transition: .3s;
  }
`;

export const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  margin-top: 35%;
  text-align: center;
  color: #999;
  .icon {
    font-size: 30px;
    animation: rotate 1s infinite linear;
  }
  @keyframes rotate {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }
`

export const PointText = styled.p`
  color: ${({ theme }) => theme.pointTextColor};
`;

export const SubText = styled.p`
  color: ${({ theme }) => theme.subTextColor};
  font-size: 16px;
`;

export const ThemeButton = styled.button`
  background-color: ${({ theme }) => theme.btnThemeBg};
  color: ${({ theme }) => theme.textColor};
  width: 35px;
  height: 35px;
  border-radius:50%;
  border: 1px solid ${({theme})=> theme.btnThemeBorder};
  transition: .2s;
  &:hover {
    transform: translateY(-2px);
  }
  span {
    vertical-align: -2px;
  }
`;

export const HeaderButton = styled.button`
  background-color: ${({ theme }) => theme.btnColor};
  color: ${({ theme }) => theme.subTextColor};
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const ThemeText = styled.span`
  font-size: 14px;
  color: #999;
  margin-right: 10px;
  color : ${({ theme }) => theme.ThemeTextColor}
`;
export const DetailFlowerLang = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 14px;
  margin-top: 30px;
  border-radius: 24px;
  border: ${({ theme }) => theme.flowerLangBorder};
  background-color: ${({ theme }) => theme.flowerLangBg};
  text-align: center;
  line-height: 1.3;
  span {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    color: #999;
    .icon {
      font-size: 30px;
    }
  }
`;
export const FlowerEtcList = styled.li`
  display: flex;
  gap: 10px;
  margin-top: 70px;
  .icon {
    font-size: 30px;
    min-width: 25px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 8px;
    .title {
      color: #999999;
      font-size: 17px;
    }
    p {
      line-height: 1.6;
    }
  }
`;
export const Source = styled.p`
  margin-top: 50px;
  color: ${({ theme }) => theme.sourceTextColor};
  font-size: 12px;
  text-align: center;
  letter-spacing: -0.5px;
`;

export const SearchMenu = styled.button`
  width: 80px;
  height: 44px;
  border-radius: 25px;
  color: #999;
  background-color: ${({ theme }) => theme.btnColor};
  transition: .3s;
  &:hover {
    background-color: ${({ theme }) => theme.subColorHover};
  }
  &.clicked {
    background-color: #5b9f68;
    color: #fff;
  }
`;

export const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    width: 100%;
    border-radius: 18px;
    height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${({ theme }) => theme.inputColor};
  }
  select {
    flex: 1;
    cursor: pointer;
    height: 50px;
    box-sizing: border-box;
    padding: 10px 20px;
    border-radius: 18px;
    background-color: ${({ theme }) => theme.inputColor};
  }
  .SearchBtn {
    height: 50px;
    padding: 10px 20px;
    border-radius: 18px;
    box-sizing: border-box;
    background-color: #559B63;
    transition: .3s;
    &:hover {
      background-color: #397946;
    }
    &:active {
      background-color: #25572f;
    }

    .icon {
      font-size: 24px;
      vertical-align: -8px;
      color: #fff;
    }
  }
`;

export const SearchItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  padding: 24px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border-radius: 20px;
  border: ${({ theme }) => theme.searchItemBorder};
  background-color: ${({ theme }) => theme.searchItemBg};
  transition: .3s;
  &:hover {
    border: 1px solid #559B63;
  }
  .img {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background-color: #ccc
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .date {
      color: #999;
      font-size: 15px;
    }
  }
`;
