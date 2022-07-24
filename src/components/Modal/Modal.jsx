import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoutModal from './LogoutModal';


export default function Modal(props) {
  const onClickMoreBtn = () => {
    props.closeModal(false)
  }
  const [logout, setLogout] = useState(false);
  const onClickLogoutBtn = () => {
    setLogout(true)
  }
  return (
    <>
      <ChatModal onClick={onClickMoreBtn}>
        <ChatModal_Ul>
          <li>
            <Link to="/my-profile">설정 및 개인정보</Link>
          </li>
          <li onClick={(e) => {
            e.preventDefault();
            <LogoutModal onClick={onClickLogoutBtn} />
          }
            
            }>
            로그아웃
          </li>
        </ChatModal_Ul>
      </ChatModal>
    </>
  );
}

const ChatModal = styled.aside`

  position:absolute;
  top:0px;
  left:0px;
  right:0px;
  bottom:0px;
  background:rgba(0,0,0,0.3);
  z-index:10;
`

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
    margin-top:28px;
    color: #767676;
    cursor: pointer;
    >a {
      display:block
    }
  }
`
const LogoutBtn = styled.li``
