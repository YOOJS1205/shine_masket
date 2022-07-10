import React from 'react';
import styled from 'styled-components';
import UserCell from '../UserCell/UserCell';

export default function FollowList() {
  return (
    <>
      {/* 팔로우리스트 컴포넌트 */}
      <FollowListComponent>
        <UserCell userName="애월" UserIntroduction="맛집!!!!!!!!"></UserCell>
        <UserCell userName="배고파" UserIntroduction="밥줘!!!!!!!!"></UserCell>
        <UserCell
          userName="싱싱한 제 주 한 라 보오오오옹"
          UserIntroduction="맛있겠다!!!!!!!!"
        ></UserCell>
      </FollowListComponent>
    </>
  );
}

const FollowListComponent = styled.article`
  margin-top: 16px;
`;
