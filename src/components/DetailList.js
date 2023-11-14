import React from 'react';
import { FlowerEtcList } from '../theme/globalStyle';

const DetailList = (props) => {
  return (
    <FlowerEtcList>
      {props.children}
      <div>
        <span className='title'>{props.title}</span>
        <p>{props.text}</p>
      </div>
    </FlowerEtcList>
  )
}
export default DetailList;
