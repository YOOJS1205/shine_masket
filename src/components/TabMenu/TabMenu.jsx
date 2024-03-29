import React from 'react';
import styled from 'styled-components';

import IconHome from '../../assets/icon/icon-home.svg';
import IconHomeHover from '../../assets/icon/icon-home-fill.png';
import IconChat from '../../assets/icon/icon-message-circle.png';
import IconChatHover from '../../assets/icon/icon-message-circle-fill.png';
import IconUpload from '../../assets/icon/icon-edit.png';
import IconUploadHover from '../../assets/icon/icon-edit-fill.png';
import IconMyprofile from '../../assets/icon/icon-user.png';
import IconMyprofileHover from '../../assets/icon/icon-user-fill.png';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = styled.ul`
  background-color: #fff;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-top: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  gap: 2%;
  > li {
    width: 25%;
    padding: 15px 0 10px;
    cursor: pointer;
    &:hover > p {
      color: var(--color-deep-bg);
    }
  }

  > li > a {
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 18px;
    height: 20px;
    margin: 0px auto;
  }

  > li > p {
    margin-top: 5px;
    font: 10px/1 'Spoqa Han Sans Neo';
    text-align: center;
  }
`;

const GoHome = styled.li`
  &:hover > a {
    background-image: url(${IconHomeHover});
  }
  &.on > a {
    background-image: url(${IconHomeHover});
  }
`;
const GoChat = styled.li`
  &:hover > a {
    background-image: url(${IconChatHover});
  }
  &.on > a {
    background-image: url(${IconChatHover});
  }
`;
const GoUpload = styled.li`
  &:hover > a {
    background-image: url(${IconUploadHover});
  }
  &.on > a {
    background-image: url(${IconUploadHover});
  }
`;
const GoMyprofile = styled.li`
  &:hover > a {
    background-image: url(${IconMyprofileHover});
  }
  &.on > a {
    background-image: url(${IconMyprofileHover});
  }
`;

const GoHomeIcon = styled.a`
  background-image: url(${IconHome});
`;
const GoChatIcon = styled.a`
  background-image: url(${IconChat});
  &:hover {
    background-image: url(${IconChatHover});
  }
`;
const GoUploadIcon = styled.a`
  background-image: url(${IconUpload});
`;
const GoMyprofileIcon = styled.a`
  background-image: url(${IconMyprofile});
  &:hover {
    background-image: url(${IconMyprofileHover});
  }
`;

export default function TabMenu() {
  const { UserAccount } = useSelector((state) => ({
    UserAccount: state.UserInfoReducer.UserAccount,
  }));

  const history = useHistory();

  const goToProfile = () => {
    history.push(`/profile/${UserAccount}`);
  };
  const upload = () => {
    history.push('/upload');
  };

  const chatList = () => {
    history.push('/chat-list');
  };

  const home = () => {
    history.push('/home');
  };

  const navs = document.querySelectorAll('.gnb>li');
  // console.log(navs);
  const clickHandler = (e) => {
    if (!e.target.classList.contains('on')) {
      navs[1].classList.remove('on')
    }

    for (let i=0; i<navs.length; i++) {
      navs[i].classList.remove('on')
    }
    e.target.classList.add('on');
  }

  const init = () => {
    for (let i=0; i<navs.length; i++) {
      navs[i].addEventListener("click",clickHandler);
    }
  }
  init();

  return (
    <Footer className="gnb">
      <GoHome onClick={home} /*className="on"*/ >
        <GoHomeIcon />
        <p>홈</p>
      </GoHome>
      <GoChat onClick={chatList}>
        <GoChatIcon />
        <p>채팅</p>
      </GoChat>
      <GoUpload onClick={upload}>
        <GoUploadIcon />
        <p>게시물 작성</p>
      </GoUpload>
      <GoMyprofile onClick={goToProfile}>
        <GoMyprofileIcon />
        <p>프로필</p>
      </GoMyprofile>
    </Footer>
  );
}
