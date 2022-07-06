import React from 'react';
import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  0% {
    transform: translate3d(0, 100%, 0);
  }
  to {
    transform: translateZ(0);
  }
`;

const ModalBox = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 16px;
  border-radius: 10px 10px 0 0;
  background-color: white;
  z-index: 100;
  animation: ${FadeIn} 0.5s;
  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 50px;
    height: 4px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #dbdbdb;
  }
`;

const Option = styled.li`
  padding: 30px 26px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export default function Modal() {
  return (
    <ModalBox>
      <Option>채팅방 나가기</Option>
    </ModalBox>
  );
}
