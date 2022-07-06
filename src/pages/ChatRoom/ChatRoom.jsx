import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ChatModal from './ChatModal';

import BasicProfileImg from '../../assets/images/basic-profile-img.png';
import PhotoIcon from '../../assets/images/img-button.png';
import SendImg from '../../assets/images/chat-exapmle.png';
import LeftArrow from '../../assets/icon/icon-arrow-left.png';
import MoreIcon from '../../assets/icon/icon-more-vertical.png';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 12px 13px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

const Img = styled.img`
  width: 22px;
`;

const ChatRoomName = styled.h1`
  flex-grow: 1;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  vertical-align: middle;
`;

const ChatSection = styled.section`
  padding: 224px 16px 20px 16px;
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

const CommentSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 13px 16px 12px;
  border-top: 1px solid #dbdbdb;
`;

const Label = styled.label`
  position: absolute;
  top: -9999px;
  overflow: hidden;
`;

const Input = styled.input`
  flex-grow: 1;
  margin: 0 18px;
  padding: 10px 0 8px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  &:focus {
    outline: none;
    color: black;
  }
  &::placeholder {
    color: #c4c4c4;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const PhotoBtn = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background: url(${PhotoIcon});
  background-size: 36px 36px;
`;

const SendBtn = styled.button`
  margin-left: auto;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  background-color: transparent;
  color: ${(props) => (props.isEmpty ? 'var(--color-enabled)' : '#c4c4c4')};
`;

const MoreBtn = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  background: url(${MoreIcon});
  background-size: 22px 22px;
`;

export default function ChatRoom() {
  const [modalBox, setModalBox] = useState(false);
  const [chatText, setChatText] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const onChange = (e) => {
    setChatText(e.target.value);
  };

  useEffect(() => {
    if (chatText) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [chatText]);

  return (
    <>
      <Header>
        <Link to="/chat-list">
          <Img src={LeftArrow} alt="뒤로 가기" />
        </Link>
        <ChatRoomName>애월읍 위니브 감귤농장</ChatRoomName>
        <MoreBtn
          onClick={() => {
            setModalBox(!modalBox);
          }}
        ></MoreBtn>
      </Header>
      <ChatSection>
        <FriendChatBox>
          <ProfileImg src={BasicProfileImg}></ProfileImg>
          <ChatTxt>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </ChatTxt>
          <TimeTxt>12:39</TimeTxt>
        </FriendChatBox>
        <FriendChatBox>
          <ProfileImg src={BasicProfileImg}></ProfileImg>
          <ChatTxt>안녕하세요. 감귤 사고싶어요요요요요</ChatTxt>
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
      <CommentSection>
        <PhotoBtn type="button"></PhotoBtn>
        <Label htmlFor="comment-text">메시지 입력창</Label>
        <Input
          type="text"
          id="comment-text"
          placeholder="메시지 입력하기"
          onChange={onChange}
        />
        <SendBtn type="button" isEmpty={isEmpty}>
          전송
        </SendBtn>
      </CommentSection>
      {modalBox && <ChatModal />}
    </>
  );
}
