import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';

import ImageUploadIcon from '../../assets/icon/icon-image.png';
import RemoveIcon from '../../assets/icon/icon-delete.png';

export default function Upload() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [uploadText, setUploadText] = useState('');
  const [fileImage, setFileImage] = useState([]);
  const textRef = useRef(null);

  const UserImage = localStorage.getItem('image');

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

  // textarea 크기 조절
  const handleResizeHeight = useCallback(() => {
    if (textRef === null || textRef.current === null) {
      return;
    }
    textRef.current.style.height = '5vh';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  // 파일 업로드
  const uploadFileImage = async (e) => {
    let files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      let formData = new FormData();
      formData.append('image', files[i]);
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/image/uploadfile',
        formData
      );
      fileImage.push(`https://mandarin.api.weniv.co.kr/${res.data.filename}`);
      console.log(res.data);
    }

    let imageURLlist = [...fileImage];

    if (imageURLlist.length > 3) {
      imageURLlist.push(files[0]);
      imageURLlist = imageURLlist.slice(0, 3);
      alert('첨부 가능 이미지 수는 최대 3장입니다.');
    }

    setFileImage(imageURLlist);
  };

  // 파일 삭제
  const deleteFileImage = (id) => {
    setFileImage(fileImage.filter((_, index) => index !== id));
    URL.revokeObjectURL(fileImage);
  };

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
      console.log(res.data);
    } catch (error) {
      console.log(error);
      if (error.response.data.message === '내용 또는 이미지를 입력해주세요.') {
        alert('내용 또는 이미지를 입력해 주세요.');
      }
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
        <ProfileImg src={UserImage} alt="사용자 프로필 이미지"></ProfileImg>
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
            style={
              fileImage.length === 1
                ? {
                    minWidth: '304px',
                    minHeight: '228px',
                    backgroundImage: `url(${image})`,
                  }
                : {
                    minWidth: '168px',
                    minHeight: '126px',
                    backgroundImage: `url(${image})`,
                  }
            }
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
  height: 42px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  flex-grow: 1;
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
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImgItem = styled.li`
  position: relative;
  margin-right: 8px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
  z-index: 100;
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
