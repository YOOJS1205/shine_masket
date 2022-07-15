import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';

import BasicProfileImg from '../../assets/images/basic-profile-img.png';
import ImageUploadIcon from '../../assets/icon/icon-image.png';
import RemoveIcon from '../../assets/icon/icon-delete.png';

export default function Upload() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [uploadText, setUploadText] = useState('');
  const [fileImage, setFileImage] = useState([]);
  const textRef = useRef(null);

  const onChange = (e) => {
    setUploadText(e.target.value);
  };

  useEffect(() => {
    if (uploadText || fileImage.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [uploadText, fileImage]);

  const handleResizeHeight = useCallback(() => {
    if (textRef === null || textRef.current === null) {
      return;
    }
    textRef.current.style.height = '5vh';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  // 파일 업로드
  const uploadFileImage = (e) => {
    const imageLists = e.target.files;
    let imageURLLists = [...fileImage];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageURL = URL.createObjectURL(imageLists[i]);
      imageURLLists.push(currentImageURL);
    }

    if (imageURLLists.length > 3) {
      imageURLLists = imageURLLists.slice(0, 3);
      alert('3개까지만 업로드 가능합니다.');
    }

    setFileImage(imageURLLists);
    console.log(...fileImage);
  };

  // 파일 삭제
  const deleteFileImage = (id) => {
    setFileImage(fileImage.filter((_, index) => index !== id));
    URL.revokeObjectURL(fileImage);
  };

  // 업로드 버튼 클릭 시 동작
  const onClickUpload = async (e) => {
    e.preventDefault();
    try {
      const sendFileName = fileImage.join();
      const token = localStorage.getItem('accessToken');
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/post',
        {
          post: {
            content: uploadText,
            image: sendFileName,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        }
      );

      console.log(uploadText);
      console.log(fileImage);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      console.log('내용 또는 이미지를 입력해 주세요.');
    }
  };

  return (
    <>
      <TopMenuBar
        uploadButton="true"
        isEmpty={isEmpty}
        onClick={onClickUpload}
      />
      <TextContainer>
        <h1 className="ir">게시글 입력 영역</h1>
        <label htmlFor="textArea" className="ir">
          게시글 입력하기
        </label>
        <ProfileImg
          src={BasicProfileImg}
          alt="사용자 프로필 이미지"
        ></ProfileImg>
        <TextArea
          id="textArea"
          placeholder="게시글 입력하기..."
          ref={textRef}
          onInput={handleResizeHeight}
          onChange={onChange}
        ></TextArea>
        <FileLabel htmlFor="imgUpload">이미지 첨부하기</FileLabel>
        <FileInput
          type="file"
          id="imgUpload"
          multiple="multiple"
          accept="image/*"
          onChange={uploadFileImage}
        />
      </TextContainer>
      <ImgContainer>
        {fileImage.map((image, id) => (
          <ImgItem
            key={id}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <RemoveBtn type="button" onClick={() => deleteFileImage(id)}>
              <span className="ir">이미지 삭제하기</span>
            </RemoveBtn>
          </ImgItem>
        ))}
      </ImgContainer>
    </>
  );
}

const TextContainer = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px 16px 0;
`;

const ProfileImg = styled.img`
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

const ImgContainer = styled.ul`
  display: flex;
  min-height: 100px;
  margin: 16px 16px 16px 72px;
  overflow: scroll;
`;

const ImgItem = styled.li`
  position: relative;
  min-width: 304px;
  min-height: 228px;
  margin-right: 5px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  box-sizing: border-box;
`;

const RemoveBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 22px;
  width: 22px;
  background: url(${RemoveIcon}) no-repeat center / contain;
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 1));
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
