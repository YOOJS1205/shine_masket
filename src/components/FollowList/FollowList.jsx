import React from 'react';
import styled from 'styled-components';
import UserCell from '../UserCell/UserCell';

import { useSelector, useDispatch } from 'react-redux';

export default function FollowList() {
  const { OtherUserInfo } = useSelector((state) => ({
    OtherUserInfo: state.OtherUserInfoReducer.OtherUserInfo,
  }));

  // console.log('성공??');
  // console.log(OtherUserInfo);
  // console.log('성공??');
  // console.log(OtherUserImage);
  // console.log(OtherUserIntro);

  return (
    <>
      <FollowListComponent>
        {OtherUserInfo.map((users) => (
          <UserCell
            key={users._id}
            userName={users.username}
            UserIntroduction={users.intro}
          ></UserCell>
        ))}
        {/* <UserCell userName={OtherUserName} UserIntroduction={OtherUserIntro}></UserCell> */}
      </FollowListComponent>
    </>
  );
}

const FollowListComponent = styled.article`
  margin-top: 16px;
`;
