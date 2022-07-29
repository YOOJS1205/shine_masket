import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import Profile from '../../components/Profile/Profile';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Button from '../../components/Button/Button';

import ChatButtonImg from '../../assets/icon/icon-message-circle.svg';
import ShareButtonImg from '../../assets/icon/icon-share.png';

export default function YourProfile() {
  const { OtherUserProfileInfo } = useSelector((state) => state.OtherUserInfoReducer);
  console.log(OtherUserProfileInfo);

  return (
    <>
      <TopMenuBar moreButton={true} />
      <ProfileContainer>
        <Profile
          followersCount={OtherUserProfileInfo.followerCount}
          followingsCount={OtherUserProfileInfo.followingCount}
          userImage={OtherUserProfileInfo.image}
          userName={OtherUserProfileInfo.username}
          userId={OtherUserProfileInfo.accountname}
          userIntroduction={OtherUserProfileInfo.intro}
        >
          <YourProfileButton />
        </Profile>
      </ProfileContainer>
      <TabMenu />
    </>
  );
}

const YourProfileButton = () => {
  const [isActive, setIsActive] = useState(false);

  function followBtnClick() {
    setIsActive(!isActive);
  }

  return (
    <>
      <ChatButton isActive size="34"></ChatButton>
      <Button
        onClick={followBtnClick}
        isActive={isActive}
        buttonText={!isActive ? '팔로우' : '언팔로우'}
        size="medium"
      ></Button>
      <ShareButton isActive size="34"></ShareButton>
    </>
  );
};

const ProfileContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  background-color: #f2f2f2;
`;

const ChatButton = styled(Button)`
  background-image: url(${ChatButtonImg});
  background-repeat: no-repeat;
  background-position: center;
`;

const ShareButton = styled(Button)`
  background-image: url(${ShareButtonImg});
  background-repeat: no-repeat;
  background-position: center;
`;
