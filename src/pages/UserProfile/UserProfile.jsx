import React from 'react';
import styled from 'styled-components';
import Profile from '../../components/Profile/Profile';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PostView from '../../components/PostView/PostView';

export default function UserProfile() {
  const { UserName, UserAccount, UserIntro, UserImage, UserFollowerCount, UserFollowingCount } =
    useSelector((state) => ({
      UserName: state.UserInfoReducer.UserName,
      UserId: state.UserInfoReducer.UserId,
      UserAccount: state.UserInfoReducer.UserAccount,
      UserIntro: state.UserInfoReducer.UserIntro,
      UserImage: state.UserInfoReducer.UserImage,
      UserFollowerCount: state.UserInfoReducer.UserFollowerCount,
      UserFollowingCount: state.UserInfoReducer.UserFollowingCount,
    }));

  return (
    <>
      <TopMenuBar />
      <ProfileContainer>
        <Profile
          followersCount={UserFollowerCount}
          followingsCount={UserFollowingCount}
          userImage={UserImage}
          userName={UserName}
          userId={UserAccount}
          userIntroduction={UserIntro}
        >
          <MyProfileButton />
        </Profile>
        <PostView></PostView>
      </ProfileContainer>

      <TabMenu />
    </>
  );
}

const MyProfileButton = () => {
  const history = useHistory();

  const { UserAccount } = useSelector((state) => ({
    UserAccount: state.UserInfoReducer.UserAccount,
  }));

  function goToAddProduct() {
    history.push(`/${UserAccount}/add-product`);
  }

  function goToProfileModify() {
    history.push(`/profile/${UserAccount}/modify`);
  }

  return (
    <>
      <Button onClick={goToProfileModify} isActive buttonText="프로필 수정" size="medium" />
      <Button onClick={goToAddProduct} isActive buttonText="상품 등록" size="100" />
    </>
  );
};

const ProfileContainer = styled.section`
  margin: 0 auto;
  width: 100%;
`;
