import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';

import BasicProfileImg from '../../assets/images/basic-profile-img.png';
import LeftArrow from '../../assets/icon/icon-arrow-left.png';
import ImageUploadIcon from '../../assets/icon/icon-image.png';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 8px 20px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  background-color: white;
`;

const PrevBtn = styled.button`
  width: 22px;
  height: 22px;
  margin-top: 5px;
  border: none;
  background: url(${LeftArrow});
  background-size: 22px 22px;
`;

const TextContainer = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 68px 16px 0;
`;

const Img = styled.img`
  width: 42px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-top: 10px;
  border: none;
  resize: none;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  font-weight: 400;
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

const ImgContainer = styled.div`
  display: flex;
  height: 10px;
  margin: 16px 16px 16px 72px;
`;

const FileLabel = styled.label`
  position: fixed;
  right: 16px;
  bottom: 16px;
  border-radius: 50%;
  background-color: var(--color-enabled-dark);
  font-size: 0;
  cursor: pointer;
  &::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
    background-image: url(${ImageUploadIcon});
    background-size: 28px 28px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const FileInput = styled.input`
  display: none;
`;

export default function Upload() {
  const history = useHistory();
  const textRef = useRef(null);

  const handleResizeHeight = useCallback(() => {
    if (textRef === null || textRef.current === null) {
      return;
    }
    textRef.current.style.height = '5vh';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  return (
    <>
      <Header>
        <PrevBtn onClick={() => history.goBack()}></PrevBtn>
        <Button buttonText="업로드" size="medium-small" />
      </Header>
      <TextContainer>
        <h1 className="ir">게시글 입력 영역</h1>
        <label htmlFor="textArea" className="ir">
          게시글 입력하기
        </label>
        <Img src={BasicProfileImg} alt="사용자 프로필 이미지"></Img>
        <TextArea
          id="textArea"
          placeholder="게시글 입력하기..."
          ref={textRef}
          onInput={handleResizeHeight}
        ></TextArea>
        <FileLabel htmlFor="ImgUpload">이미지 첨부하기</FileLabel>
        <FileInput id="ImgUpload" type="file" accept=".png, .jpg, .jpeg" />
      </TextContainer>
      <ImgContainer>
        <ul></ul>
      </ImgContainer>
    </>
  );
}
