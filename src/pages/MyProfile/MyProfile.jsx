import React, { useState } from 'react';
import styled from 'styled-components';

// 이미지
import basicProfileImg from '../../assets/images/basic-profile-img.png';

export default function MyProfile() {
  const [profileImg, setProfileImg] = useState(basicProfileImg);
  // setProfileImg();

  return (
    <>
      <UserInfo>
        <h1 className="ir">사용자 정보</h1>
        <FollowArea>
          <FollowersCount>
            2950
            <FollowersTxt>followers</FollowersTxt>
          </FollowersCount>
          <MyProfileImg src={profileImg}></MyProfileImg>
          <FollowersCount color="#767676">
            128
            <FollowersTxt>followers</FollowersTxt>
          </FollowersCount>
        </FollowArea>

        <UserArea>
          <UserName>애월읍 위니브 감귤농장</UserName>
          <UserId>@ weniv_Mandarin</UserId>
          <UserIntroduction>
            애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장
          </UserIntroduction>
        </UserArea>

        <ButtonArea>
          <Button marginRight="12px">프로필 수정</Button>
          <Button maxWidth="100px">상품 등록</Button>
        </ButtonArea>
      </UserInfo>
      <BasicArea></BasicArea>
    </>
  );
}

const UserInfo = styled.article`
  margin: 0 auto;
  padding-top: 30px;
  width: 100%;
  max-width: 390px;
  outline: 0.5px solid #dbdbdb;
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
  padding: 0 41px;
  width: 100%;
  max-width: 110px;
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
  padding-bottom: 26px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-right: ${(props) => props.marginRight || '0px'};
  padding: 8px 0;
  width: 100%;
  max-width: ${(props) => props.maxWidth || '120px'};

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #767676;

  border: 1px solid #dbdbdb;
  border-radius: 30px;
`;

// 4
const BasicArea = styled.div`
  margin: 6px auto 0;
  width: 100%;
  max-width: 390px;
  height: 524px;
  background-color: #f2f2f2;
  outline: 0.5px solid #dbdbdb;
`;
