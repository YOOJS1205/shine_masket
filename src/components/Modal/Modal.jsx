import React from 'react';
import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LogoutModal from './LogoutModal';

export default function Modal({ onClick, getRef, text, postId, UserAccount, postAccount }) {
  const location = useLocation();
  const NotModal = useRef();
  const Modal = useRef();
  const [logout, setLogout] = useState(false);

  const onClickLogoutBtn = () => {
    setLogout(true);
  };

  getRef(Modal);

  return (
    <>
      <ChatModal ref={NotModal} onClick={onClick}>
        <ChatModal_Ul ref={Modal}>
          <li>
            <Link
              to={
                location.pathname === '/chat-room'
                  ? '/chat-list'
                  : location.pathname === `/profile/${UserAccount}` ||
                    (location.pathname.includes('/post') &&
                      UserAccount !== undefined &&
                      UserAccount === postAccount)
                  ? `/post/${postId}/update`
                  : '#/'
              }
            >
              {text[0]}
            </Link>
          </li>
          <li onClick={onClickLogoutBtn}>{text[1]}</li>
        </ChatModal_Ul>
        {logout ? (
          location.pathname === '/chat-list' ||
          (location.pathname.includes('/post') && UserAccount === undefined) ||
          (location.pathname.includes('/profile') && UserAccount === undefined) ? (
            <LogoutModal buttonText="로그아웃" text="로그아웃 하시겠어요?" />
          ) : (
            <LogoutModal buttonText="삭제" text="게시글을 삭제할까요?" postId={postId} />
          )
        ) : null}
      </ChatModal>
    </>
  );
}

const ChatModal = styled.aside`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
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
    color: #767676;
    cursor: pointer;
    > a {
      display: block;
    }
  }
`;
