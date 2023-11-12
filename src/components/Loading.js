import React from 'react';
import { LoadingBox } from '../theme/globalStyle';
import { FcDoughnutChart } from "react-icons/fc";

const Loading = () => {
  return(
    <LoadingBox>
      <FcDoughnutChart className='icon' />
      <p>잠시만 기다려주세요.</p>
    </LoadingBox>
  );
};

export default Loading;