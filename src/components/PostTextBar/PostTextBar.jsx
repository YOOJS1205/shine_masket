import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotoIcon from '../../assets/images/img-button.png';

export default function PostComment({ name, placeholder, buttonText }) {
  const [chatText, setChatText] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const UserImage = localStorage.getItem('image');

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
    <UploadComment>
      {name === 'post' ? (
        <ProfileImg src={UserImage} alt="사용자 프로필 이미지" />
      ) : name === 'chat' ? (
        <PhotoBtn type="button">이미지 첨부</PhotoBtn>
      ) : null}
      <label htmlFor="comment-text" className="ir">
        메시지 입력창
      </label>
      <Input type="text" id="comment-text" placeholder={placeholder} onChange={onChange} />
      <SendBtn type="button" isEmpty={isEmpty}>
        {buttonText}
      </SendBtn>
    </UploadComment>
  );
}

const UploadComment = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  padding: 13px 16px 12px;
  border-top: 1px solid #dbdbdb;
  box-sizing: border-box;
  background-color: white;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
`;

const PhotoBtn = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background: url(${PhotoIcon});
  background-size: 36px 36px;
  font-size: 0;
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

const SendBtn = styled.button`
  margin-left: auto;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  background-color: transparent;
  color: ${(props) => (props.isEmpty ? 'var(--color-enabled)' : '#c4c4c4')};
`;
