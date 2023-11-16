import React from 'react';
import { FlowerEtcList } from '../theme/globalStyle';

const DetailList = ({children, title, text}) => {
  return (
    <FlowerEtcList>
      {children}
      <div>
        <span className='title'>{title}</span>
        <p>{text}</p>
      </div>
    </FlowerEtcList>
  )
}
export default DetailList;
