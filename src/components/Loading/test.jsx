import React from 'react';
import styled from 'styled-components';
import loadingImg from '../../assets/images/loading.gif'

export default function Loading() {
  return (
      <LoadingWrap>
        <Img src={loadingImg}/>
      </LoadingWrap>
  );
}

const LoadingWrap = styled.aside`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #eeeeeea6;
`
const Img = styled.img`
  position: absolute;
  /* width값은 기본 400px입니다 적절히 맞추어서 width 값 조절하시면 됩니다욧 */
  /* width: 400px; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
