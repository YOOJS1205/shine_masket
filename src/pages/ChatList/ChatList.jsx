import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TabMenu from '../../components/TabMenu/TabMenu';

import BasicProfileImg from '../../assets/images/basic-profile-img.png';
import LeftArrow from '../../assets/icon/icon-arrow-left.png';
import MoreIcon from '../../assets/icon/icon-more-vertical.png';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 13px 12px 13px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

const Img = styled.img`
  width: 22px;
  height: 22px;
`;

const Section = styled.section`
  padding: 24px 16px 0;
`;

const ChatLink = styled(Link)`
  position: relative;
  display: flex;
  margin-bottom: 20px;
  font-weight: 400;
  background-color: white;
  border: none;
  cursor: pointer;
  &::before {
    content: '';
    display: inline-block;
    background-image: url(${BasicProfileImg});
    background-size: 42px 42px;
    background-position: center;
    background-repeat: no-repeat;
    width: 47px;
    height: 42px;
    border-radius: 50px;
    box-sizing: border-box;
  }
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color-enabled-dark);
    width: 12px;
    height: 12px;
    border-radius: 50px;
  }
`;

const TextContainer = styled.div`
  display: inline-block;
  margin-left: 12px;
  width: 100%;
`;

const ChatName = styled.strong`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  color: black;
`;

const ChatTxt = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: #767676;
`;

const ChatDate = styled.span`
  float: right;
  margin-left: auto;
  font-size: 10px;
  line-height: 13px;
  text-align: right;
  color: #dbdbdb;
`;

export default function ChatList() {
  return (
    <>
      <Header>
        <Link to="#/">
          <Img src={LeftArrow} alt="뒤로 가기" />
        </Link>
        <Img src={MoreIcon} alt="더 보기 아이콘" />
      </Header>
      <Section>
        <h1 className="ir">채팅 목록</h1>
        <ChatLink to="/chat-room">
          <TextContainer>
            <ChatName>애월읍 위니브 감귤농장</ChatName>
            <ChatTxt>이번에 정정 언제하맨마씸?</ChatTxt>
            <ChatDate>2020.10.25</ChatDate>
          </TextContainer>
        </ChatLink>

        <ChatLink to="#/">
          <TextContainer>
            <ChatName>제주감귤마을</ChatName>
            <ChatTxt>깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...</ChatTxt>
            <ChatDate>2020.10.25</ChatDate>
          </TextContainer>
        </ChatLink>

        <ChatLink to="#/">
          <TextContainer>
            <ChatName>누구네 농장 친환경 한라봉</ChatName>
            <ChatTxt>내 차는 내가 평가한다. 오픈 이벤트에 참여 하...</ChatTxt>
            <ChatDate>2020.10.25</ChatDate>
          </TextContainer>
        </ChatLink>
      </Section>
      <TabMenu />
    </>
  );
}
