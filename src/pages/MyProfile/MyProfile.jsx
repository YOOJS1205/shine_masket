import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../../components/Profile/Profile';

// 이미지
// import basicProfileImg from '../../assets/images/basic-profile-img.png';

export default function MyProfile() {
  return (
    <>
      <ProfileContainer>
        <Profile
          followersCount="2950"
          followingsCount="128"
          userName="애월읍 위니브 감귤농장"
          userId="weniv_Mandarin"
          userIntroduction="애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장"
        ></Profile>
      </ProfileContainer>
    </>
  );
}

const ProfileContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 390px;
  min-height: 844px; //임시 높이
  background-color: #f2f2f2;
`;
