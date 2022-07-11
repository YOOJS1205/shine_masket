import React from 'react';
import styled from 'styled-components';

import basicProfileImg from '../../assets/images/basic-profile-img.png';
import Button from '../Button/Button';


export default function UserCell(props) {
  return (
    <>
      <UserCellComponent>
        <UserProfileImg src={basicProfileImg}></UserProfileImg>
        <UserArea>

          <UserName>{props.userName}</UserName>
          <UserIntroduction>{props.UserIntroduction}</UserIntroduction>
        </UserArea>

        <FollowButton size="small" buttonText="팔로우"></FollowButton>
      </UserCellComponent>
    </>
  );
}

const UserCellComponent = styled.article`

  margin: 8px 16px;
  align-items: center;
  display: flex;
`;

const UserProfileImg = styled.img`
  margin-right: 12px;
  width: 50px;
`;

const UserArea = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.strong`
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

const UserIntroduction = styled.span`
  margin-bottom: 6px;

  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
`;

const FollowButton = styled(Button)`
  margin-left: auto;
`;
