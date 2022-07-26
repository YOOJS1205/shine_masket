import React from 'react';
import styled from 'styled-components';

import IconHome from '../../assets/icon/icon-home.svg';
import IconHomeHover from '../../assets/icon/icon-home-fill.png';
import IconChat from '../../assets/icon/icon-message-circle.svg';
import IconChatHover from '../../assets/icon/icon-message-circle-fill.png';
import IconUpload from '../../assets/icon/icon-edit.svg';
import IconMyprofile from '../../assets/icon/icon-user.svg';
import IconMyprofileHover from '../../assets/icon/icon-user-fill.png';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

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
      color: var(--color-enabled);
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
`;
const GoChat = styled.li`
  &:hover > a {
    background-image: url(${IconChatHover});
  }
`;
const GoUpload = styled.li``;
const GoMyprofile = styled.li`
  &:hover > a {
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
  const dispatch = useDispatch();

  const goToProfile = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/profile/${UserAccount}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/json',
        },
      });

      const UserFollowing = res.data.profile.following;
      const UserFollower = res.data.profile.follower;
      const UserFollowerCount = res.data.profile.followerCount;
      const UserFollowingCount = res.data.profile.followingCount;

      dispatch({
        type: 'FOLLOW',
        UserFollowing,
        UserFollower,
        UserFollowerCount,
        UserFollowingCount,
      });

      history.push(`/profile/${UserAccount}`);
    } catch (error) {
      console.log(error);
    }

    // 포스트 저장
    try {
      const accessToken = localStorage.getItem('accessToken');
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/post/${UserAccount}/userpost`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/json',
        },
      });
      console.log(res);
      const postList = res.data;
      dispatch({ type: 'GET_POST', postList });

      history.push(`/profile/${UserAccount}`);
    } catch (error) {
      console.log(error);
    }

    // 상품 저장
    try {
      const accessToken = localStorage.getItem('accessToken');
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/product/${UserAccount}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/json',
        },
      });
      const productList = res.data.product;
      console.log(productList);
      dispatch({ type: 'PRODUCT', productList });

      // history.push(`/product/${UserAccount}`);
    } catch (error) {
      console.log(error);
    }
  };

  const upload = () => {
    history.push('/upload');
  };

  const chatList = () => {
    history.push('/chat-list');
  };

  const home = () => {
    history.push('/home-empty');
  }

  return (
    <Footer>
      <GoHome onClick={home}>
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
