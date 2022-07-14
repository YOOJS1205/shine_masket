import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ProfilePic from '../../assets/images/basic-profile-img.png';
import UploadPic from '../../assets/images/upload-file.png';

export default function ImageButton({ getImageSrc }) {
  const photoInput = useRef();
  const [imgSrc, setImgSrc] = useState('');

  // 부모 컴포넌트인 ProfileForm으로 이미지 src 데이터 전달
  useEffect(() => {
    getImageSrc(imgSrc);
  }, [imgSrc]);

  // 이미지 미리 보기 함수
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result);
        resolve();
      };
    });
  };

  // 숨겨진 Input과 이미지 버튼 연결
  const onHandleImageButton = (e) => {
    e.preventDefault();
    photoInput.current.click();
  };

  return (
    <ButtonContainer>
      <h1 className="ir">이미지 업로드 버튼</h1>
      <ImageLabel htmlFor="image" />
      <HiddenInput
        type="file"
        id="image"
        accept="img/*"
        ref={photoInput}
        onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
        }}
      />
      <ProfileImg
        style={
          imgSrc
            ? { backgroundImage: `url(${imgSrc})` }
            : { backgroundImage: `url(${ProfilePic})` }
        }
      />
      <UploadImgButton onClick={onHandleImageButton}>
        <UploadImg src={UploadPic} alt="프로필 사진 업로드 이미지" />
      </UploadImgButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.section`
  display: block;
  border: none;
  margin: 30px auto;
  background-color: #ffffff;
`;

const ImageLabel = styled.label``;
const HiddenInput = styled.input`
  display: none;
`;

const ProfileImg = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const UploadImgButton = styled.button`
  position: absolute;
  top: 23%;
  right: 40%;
  border-radius: 50%;
  overflow: hidden;
`;
const UploadImg = styled.img``;
