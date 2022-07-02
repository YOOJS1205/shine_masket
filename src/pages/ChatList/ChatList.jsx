import React from 'react';
import styled from 'styled-components';

import BasicProfileImg from '../../assets/images/basic-profile-img.png';
import LeftArrow from '../../assets/icon/icon-arrow-left.png';
import MoreIcon from '../../assets/icon/icon-more-vertical.png';

const Header = styled.header`
  padding: 13px 12px 13px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

const Img = styled.img`
  width: 22px;
  &:last-child {
    float: right;
  }
`;

const Section = styled.section`
  padding: 0px 16px;
`;

const ChatName = styled.strong`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: black;
`;

const ChatTxt = styled.p`
  float: left;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #767676;
`;

const ChatDate = styled.span`
  float: right;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  text-align: right;
  color: #dbdbdb;
`;

const Link = styled.a`
  position: relative;
  display: flex;
  margin-top: 20px;
  background-color: white;
  border: none;
  cursor: pointer;
  &:first-child {
    margin-top: 26px;
  }
`;

const ProfileImg = styled.img`
  width: 42px;
  margin-right: 12px;
`;

const TextContainer = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 0;
`;

const NewIcon = styled.div`
  position: absolute;
  background-color: #f26e22;
  width: 12px;
  height: 12px;
  border-radius: 50px;
`;

export default function ChatList() {
  return (
    <>
      <Header>
        <Img src={LeftArrow} alt="뒤로 가기" />
        <Img src={MoreIcon} alt="더 보기 아이콘" />
      </Header>
      <Section>
        <Link to="/chat-room">
          <NewIcon></NewIcon>
          <ProfileImg src={BasicProfileImg}></ProfileImg>
          <TextContainer>
            <ChatName>애월읍 위니브 감귤농장</ChatName>
            <ChatTxt>이번에 정정 언제하맨마씸?</ChatTxt>
            <ChatDate>2020.10.25</ChatDate>
          </TextContainer>
        </Link>

        <Link to="chat-room">
          <NewIcon></NewIcon>
          <ProfileImg src={BasicProfileImg}></ProfileImg>
          <TextContainer>
            <ChatName>제주감귤마을</ChatName>
            <ChatTxt>깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...</ChatTxt>
            <ChatDate>2020.10.25</ChatDate>
          </TextContainer>
        </Link>

        <Link to="chat-room">
          <ProfileImg src={BasicProfileImg}></ProfileImg>
          <TextContainer>
            <ChatName>누구네 농장 친환경 한라봉</ChatName>
            <ChatTxt>내 차는 내가 평가한다. 오픈 이벤트에 참여 하...</ChatTxt>
            <ChatDate>2020.10.25</ChatDate>
          </TextContainer>
        </Link>
      </Section>
    </>
  );
}
