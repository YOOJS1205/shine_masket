import React from 'react';
import styled from 'styled-components';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import PostTextBar from '../../components/PostTextBar/PostTextBar';
import BasicProfileImg from '../../assets/images/basic-profile-img.png';
import SendImg from '../../assets/images/chat-exapmle.png';

export default function ChatRoom() {
  return (
    <>
      <TopMenuBar menuText="애월읍 샤인머스캣 농장" moreButton="true" />
      <ChatSection>
        <h2 className="ir">채팅창</h2>
        <FriendChatBox>
          <ProfileImg src={BasicProfileImg} alt="상대 프로필 이미지"></ProfileImg>
          <ChatTxt>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈
            따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
          </ChatTxt>
          <TimeTxt>12:39</TimeTxt>
        </FriendChatBox>
        <FriendChatBox>
          <ProfileImg src={BasicProfileImg} alt="상대 프로필 이미지"></ProfileImg>
          <ChatTxt>샤인머스캣 사고싶어요요요요요요</ChatTxt>
          <TimeTxt>12:41</TimeTxt>
        </FriendChatBox>
        <MyChatBox>
          <ChatTxt>네 말씀하세요.</ChatTxt>
          <TimeTxt>12:50</TimeTxt>
        </MyChatBox>
        <MyChatBox>
          <ChatImg src={SendImg} alt="전송된 이미지" />
          <TimeTxt>12:51</TimeTxt>
        </MyChatBox>
      </ChatSection>
      <PostTextBar name="chat" placeholder="메시지 입력하기" buttonText="전송" />
    </>
  );
}

const ChatSection = styled.section`
  padding: 30px 16px 230px 16px;
  background-color: #f2f2f2;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
`;

const FriendChatBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 9px;
  margin-right: 43px;
`;

const ProfileImg = styled.img`
  align-items: flex-start;
  width: 42px;
  margin-right: 12px;
  text-align: center;
`;

const ChatTxt = styled.p`
  max-width: 240px;
  padding: 12px;
  border: 1px solid #c4c4c4;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  &:nth-child(1) {
    margin-right: 0;
    border: none;
    border-top-right-radius: 0;
    border-top-left-radius: 10px;
    color: white;
    background-color: #c1deae;
  }
  &:nth-child(2) {
    border-top-left-radius: 0;
  }
`;

const TimeTxt = styled.span`
  margin: auto 0 0 auto;
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #767676;
  &:nth-child(2) {
    margin-right: 6px;
  }
`;

const MyChatBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 9px;
  margin-left: 43px;
`;

const ChatImg = styled.img`
  border-radius: 10px;
`;
