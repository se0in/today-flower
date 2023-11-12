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
  color: ${({ theme }) => theme.pointTextColor};
`;
export const SubText = styled.p`
  color: ${({ theme }) => theme.subTextColor};
  font-size: 16px;
`;

export const ThemeButton = styled.button`
  background-color: ${({ theme }) => theme.btnThemeBg};
  color: ${({ theme }) => theme.textColor};
  width: 38px;
  height: 22px;
  border-radius: 14px;
  position: relative;
  span {
    width: 14px;
    height: 14px;
    background-color: ${({ theme }) => theme.btnCircleColor};
    position: absolute;
    top: 4px;
    left: ${({ theme }) => theme.btnCirclePositionLeft};
    right: ${({ theme }) => theme.btnCirclePositionRight};
    border-radius: 50%;
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
  margin-top: 40px;
  .icon {
    font-size: 30px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 8px;
    .title {
      color: #999999;
      font-size: 15px;
    }
    p {
      line-height: 1.3;
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
    flex: 1;
    border-radius: 18px;
    height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${({ theme }) => theme.inputColor};
  }
  select {
    flex: 1;
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
    background-color: ${({ theme }) => theme.pointTextColor};

    .icon {
      font-size: 24px;
      vertical-align: -8px;
      color: #fff;
    }
  }
`;

export const SearchItem = styled.li`
  display: flex;
  gap: 18px;
  align-items: center;
  flex-direction: row;
  padding: 24px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  border: ${({ theme }) => theme.searchItemBorder};
  background-color: ${({ theme }) => theme.searchItemBg};
  .img {
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background-color: #999;
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
