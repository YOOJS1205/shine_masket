import React from 'react';
import styled from 'styled-components';
import UserCell from '../UserCell/UserCell';

import { useSelector } from 'react-redux';

export default function FollowList() {
  const { OtherUserInfo } = useSelector((state) => ({
    OtherUserInfo: state.OtherUserInfoReducer.OtherUserInfo,
  }));

  return (
    <>
      <FollowListComponent>
        {OtherUserInfo.map((users) => (
          <UserCell
            key={users._id}
            userName={users.username}
            UserIntroduction={users.intro}
            image={users.image}
          ></UserCell>
        ))}
      </FollowListComponent>
    </>
  );
}

const FollowListComponent = styled.article`
  margin-top: 16px;
`;
