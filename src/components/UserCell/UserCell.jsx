import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from '../Button/Button';

export default function UserCell(props) {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followState, setFollowState] = useState(false);

  useEffect(() => {
    setFollowState(props.isFollow);
  }, [props.isFollow]);

  function followBtnClick() {
    setIsFollowed(!isFollowed);
  }

  return (
    <>
      <UserCellComponent>
        <UserProfileImg src={props.image} />
        <UserArea>
          <UserName>{props.userName}</UserName>
          <UserIntroduction>{props.UserIntroduction}</UserIntroduction>
        </UserArea>

        <FollowButton
          onClick={followBtnClick}
          isActive={isFollowed}
          isFollow={followState}
          size="small"
          buttonText={props.isFollow ? '취소' : '팔로우'}
        ></FollowButton>
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
  border-radius: 50%;
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
  background-color: ${(props) =>
    props.isFollow ? 'var(--color-active)' : 'var(--color-enabled-dark)'};
  border: ${(props) => (props.isFollow ? '1px solid #DBDBDB' : null)};
  color: ${(props) => (props.isFollow ? '#767676' : '#fff')};
`;
