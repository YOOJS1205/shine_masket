import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function Profile(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { UserAccount } = useSelector((state) => ({
    UserAccount: state.UserInfoReducer.UserAccount,
  }));

  const goToFollowerList = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/profile/${UserAccount}/follower`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
          },
        }
      );

      const OtherUserInfo = res.data;
      dispatch({ type: 'FOLLWER', OtherUserInfo });

      history.push(`/profile/${UserAccount}/follower`);
    } catch (error) {
      console.log(error);
    }
  };

  const goToFollowingList = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const res = await axios.get(
        `https://mandarin.api.weniv.co.kr/profile/${UserAccount}/following`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
          },
        }
      );

      const OtherUserInfo = res.data;
      dispatch({ type: 'FOLLWING', OtherUserInfo });

      history.push(`/profile/${UserAccount}/following`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <UserInfo>
        <h1 className="ir">사용자 정보</h1>
        <FollowArea>
          <FollowersCount onClick={goToFollowerList}>
            {props.followersCount}
            <FollowersTxt>followers</FollowersTxt>
          </FollowersCount>

          <MyProfileImg src={props.userImage} />

          <FollowersCount onClick={goToFollowingList} color="#767676">
            {props.followingsCount}
            <FollowersTxt>followings</FollowersTxt>
          </FollowersCount>
        </FollowArea>

        <UserArea>
          <UserName>{props.userName}</UserName>
          <UserId>@ {props.userId}</UserId>
          <UserIntroduction>{props.userIntroduction}</UserIntroduction>
        </UserArea>

        <ButtonArea>{props.children}</ButtonArea>
      </UserInfo>
    </>
  );
}

const UserInfo = styled.article`
  margin-bottom: 6px;
  padding-top: 30px;
  outline: 0.5px solid #dbdbdb;
  background-color: #fff;
`;

// 1
const FollowArea = styled.div`
  margin-bottom: 16px;
  padding: 0 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FollowersCount = styled.strong`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  text-align: center;

  cursor: pointer;
  color: ${(props) => props.color || '#000'};
`;

const FollowersTxt = styled.strong`
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  color: #767676;
`;

const MyProfileImg = styled.img`
  margin: 0 41px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
  box-sizing: border-box;
`;

// 2
const UserArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.strong`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const UserId = styled.strong`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`;

const UserIntroduction = styled.span`
  margin-bottom: 24px;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #767676;
`;

// 3
const ButtonArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding-bottom: 26px;
  display: flex;
  width: 100%;
  max-width: 280px;
`;
