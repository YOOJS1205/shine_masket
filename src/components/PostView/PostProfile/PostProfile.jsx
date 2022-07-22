import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MoreButton from '../../Button/MoreButton';

export default function PostProfile() {
  const { UserImage, UserName, UserAccount } = useSelector((state) => ({
    UserImage: state.UserInfoReducer.UserImage,
    UserName: state.UserInfoReducer.UserName,
    UserAccount: state.UserInfoReducer.UserAccount,
  }));

  return (
    <Profile>
      <ProfileImg src={UserImage} alt="사용자 프로필 이미지"></ProfileImg>
      <TextContainer>
        <ProfileName>{UserName}</ProfileName>
        <ProfileId>@ {UserAccount}</ProfileId>
      </TextContainer>
      <MoreButton size="small" />
    </Profile>
  );
}

const Profile = styled.div`
  display: flex;
  font-weight: 400;
  background-color: white;
  border: none;
`;

const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  margin-top: 4px;
  margin-left: 12px;
`;

const ProfileName = styled.strong`
  display: block;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: black;
`;

const ProfileId = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: #767676;
`;
