import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

// 이미지
import basicProfileImg from '../../assets/images/basic-profile-img.png';
import messageIcon from '../../assets/icon/icon-message-circle.svg';
import shareIcon from '../../assets/icon/icon-share.png';

import { type } from '@testing-library/user-event/dist/type';

export default function Profile({
  followersCount,
  followingsCount,
  userName,
  userId,
  userIntroduction,
}) {
  const [profileImg, setProfileImg] = useState(basicProfileImg);
  const location = useLocation();

  return (
    <>
      <UserInfo>
        <h1 className="ir">사용자 정보</h1>
        <FollowArea>
          <FollowersCount>
            {followersCount}
            <FollowersTxt>followers</FollowersTxt>
          </FollowersCount>
          <MyProfileImg src={profileImg}></MyProfileImg>
          <FollowersCount color="#767676">
            {followingsCount}
            <FollowersTxt>followings</FollowersTxt>
          </FollowersCount>
        </FollowArea>

        <UserArea>
          <UserName>{userName}</UserName>
          <UserId>@ {userId}</UserId>
          <UserIntroduction>{userIntroduction}</UserIntroduction>
        </UserArea>
        {location.pathname === '/my-profile' ? (
          <ButtonArea>
            <Button buttonText="프로필 수정" size="medium"></Button>
            <Button buttonText="상품 등록" size="medium"></Button>
          </ButtonArea>
        ) : (
          <ButtonArea>
            <Button src={messageIcon} size="smallest"></Button>
            <Button buttonText="프로필 수정" size="medium"></Button>
            <Button src={shareIcon} size="smallest"></Button>
          </ButtonArea>
        )}
      </UserInfo>
    </>
  );
}

const UserInfo = styled.article`
  margin-bottom: 6px;
  padding-top: 30px;
  outline: 0.5px solid #dbdbdb;
  background-color: #fff;
`;

// 1
const FollowArea = styled.div`
  margin: 0 auto 16px;
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  align-items: center;
`;

const FollowersCount = styled.strong`
  display: flex;
  flex-direction: column;

  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: ${(props) => props.color || '#000'};
`;

const FollowersTxt = styled.strong`
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  color: #767676;
`;

const MyProfileImg = styled.img`
  padding: 0 41px;
  width: 100%;
  max-width: 110px;
`;

// 2
const UserArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.strong`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const UserId = styled.strong`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`;

const UserIntroduction = styled.span`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
`;

// 3
const ButtonArea = styled.div`
  margin: 0 auto;
  padding-bottom: 26px;
  max-width: 250px;
  display: flex;
  justify-content: space-between;
  > button:nth-child(2) {
    width: 100px;
  }
`;
