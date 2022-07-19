import React from 'react';
import styled from 'styled-components';
import Profile from '../../components/Profile/Profile';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export default function MyProfile() {
  return (
    <>
      <TopMenuBar />
      <ProfileContainer>
        <Profile
          followersCount="2950"
          followingsCount="128"
          userName="애월읍 위니브 감귤농장"
          userId="weniv_Mandarin"
          userIntroduction="애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장"
        >
          <MyProfileButton />
        </Profile>
      </ProfileContainer>
      <TabMenu />
    </>
  );
}

const MyProfileButton = () => {
  return (
    <>
      <Button isActive buttonText="프로필 수정" size="medium" />
      <Button isActive buttonText="상품 등록" size="100"></Button>
    </>
  );
};

const ProfileContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  background-color: #f2f2f2;
`;
