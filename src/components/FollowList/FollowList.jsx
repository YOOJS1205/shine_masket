import React from 'react';
import styled from 'styled-components';
import UserCell from '../UserCell/UserCell';

import { useSelector, useDispatch } from 'react-redux';

export default function FollowList() {
  const { OtherUserName, OtherUserImage, OtherUserIntro } = useSelector((state) => ({
    OtherUserName: state.OtherUserInfoReducer.OtherUserName,
    OtherUserImage: state.OtherUserInfoReducer.OtherUserImage,
    OtherUserIntro: state.OtherUserInfoReducer.OtherUserIntro,
  }));

  console.log(OtherUserName);
  console.log(OtherUserImage);
  console.log(OtherUserIntro);

  return (
    <>
      <FollowListComponent>
        {/* {state.map()} */}
        <UserCell userName={OtherUserName} UserIntroduction={OtherUserIntro}></UserCell>
      </FollowListComponent>
    </>
  );
}

const FollowListComponent = styled.article`
  margin-top: 16px;
`;
