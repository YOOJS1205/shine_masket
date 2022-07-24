import React, { useState } from 'react';
import styled from 'styled-components';
import UserCell from '../UserCell/UserCell';

import { useSelector } from 'react-redux';

export default function FollowList() {
  const { OtherUserInfo, UserFollowing } = useSelector((state) => ({
    OtherUserInfo: state.OtherUserInfoReducer.OtherUserInfo,
    UserFollowing: state.UserInfoReducer.UserFollowing,
  }));

  OtherUserInfo.map((item) => {
    if (UserFollowing.includes(item._id)) {
      item.isFollow = true;
    } else {
      item.isFollow = false;
    }
  });

  return (
    <>
      <FollowListComponent>
        {OtherUserInfo.map((users) => (
          <UserCell
            key={users._id}
            userName={users.username}
            UserIntroduction={users.intro}
            image={users.image}
            isFollow={users.isFollow}
          ></UserCell>
        ))}
      </FollowListComponent>
    </>
  );
}

const FollowListComponent = styled.article`
  margin-top: 16px;
`;
