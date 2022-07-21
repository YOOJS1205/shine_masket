import React from 'react';
import styled from 'styled-components';
import Profile from '../../components/Profile/Profile';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Button from '../../components/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MyProfile() {
  const history = useHistory();
  const { UserId, UserName, UserAccount, UserIntro, UserImage } = useSelector((state) => ({
    UserName: state.UserInfoReducer.UserName,
    UserId: state.UserInfoReducer.UserId,
    UserAccount: state.UserInfoReducer.UserAccount,
    UserIntro: state.UserInfoReducer.UserIntro,
    UserImage: state.UserInfoReducer.UserImage,
  }));
  return (
    <>
      <TopMenuBar />
      <ProfileContainer>
        <Profile
          followersCount="2950"
          followingsCount="128"
          userImage={UserImage}
          userName={UserName}
          userId={UserAccount}
          userIntroduction={UserIntro}
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
      <Link to="/profile/modify">
        <Button isActive buttonText="프로필 수정" size="medium" />
      </Link>
      <Link to="/my-profile/add-product">
        <Button isActive buttonText="상품 등록" size="100" />
      </Link>
    </>
  );
};

const ProfileContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  background-color: #f2f2f2;
`;
