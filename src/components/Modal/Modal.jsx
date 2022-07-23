import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Modal(display) {
  return (
    <>
      <ChatModal display={display}>
        <ChatModal_Ul>
          <li>
            <Link to="/my-profile">설정 및 개인정보</Link>
          </li>
          <li>
            <Link to="/">로그아웃</Link>
          </li>
        </ChatModal_Ul>
      </ChatModal>
    </>
  );
}

const ChatModal = styled.aside`
  display: none;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.3);
`;

const ChatModal_Ul = styled.ul`
  position: fixed;
  z-index: 10;
  padding: 30px;
  box-sizing: border-box;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  &::before {
    display: block;
    content: '';
    position: absolute;
    width: 50px;
    height: 4px;
    background: #dbdbdb;
    left: 50%;
    transform: translateX(-50%);
  }
  > li {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 28px;
  }
`;