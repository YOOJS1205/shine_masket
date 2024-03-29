import axios from 'axios';
import React, { useState, useRef, useEffect, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import UploadPic from '../../assets/icon/icon-image.png';

export default memo(function ImageButton({ getImageSrc }) {
  const { UserImage } = useSelector((state) => ({
    UserImage: state.UserInfoReducer.UserImage,
  }));

  const photoInput = useRef();
  const [imgSrc, setImgSrc] = useState('');
  const [fileName, setFileName] = useState(UserImage);

  // 부모 컴포넌트인 ProfileForm으로 이미지 src 데이터 전달
  useEffect(() => {
    getImageSrc(fileName);
  }, [fileName]);

  // 이미지 미리 보기 함수
  const encodeFileToBase64 = useCallback((fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = async (e) => {
        let formData = new FormData();
        formData.append('image', fileBlob);
        const res = await axios.post('https://api.mandarin.weniv.co.kr/image/uploadfile', formData);
        console.log(res);
        setFileName(`https://api.mandarin.weniv.co.kr/${res.data.filename}`);
        localStorage.setItem('image', `https://api.mandarin.weniv.co.kr/${res.data.filename}`);
        setImgSrc(e.target.result);
        resolve();
      };
    });
  }, []);

  // 숨겨진 Input과 이미지 버튼 연결
  const onHandleImageButton = useCallback((e) => {
    e.preventDefault();
    photoInput.current.click();
  }, []);

  return (
    <ButtonContainer>
      <h1 className="ir">이미지 업로드 버튼</h1>
      <ImageLabel htmlFor="image" />
      <HiddenInput
        type="file"
        id="image"
        accept="image/jpg, image/png, image/jpeg"
        ref={photoInput}
        onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
        }}
      />
      <ProfileImgContainer>
        <ProfileImg src={fileName ? fileName : 'https://api.mandarin.weniv.co.kr/Ellipse.png'} />
        <UploadImgButton onClick={onHandleImageButton}>
          <UploadImg src={UploadPic} alt="프로필 사진 업로드 이미지" />
        </UploadImgButton>
      </ProfileImgContainer>
    </ButtonContainer>
  );
});

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

const ProfileImgContainer = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;

  border: 0.5px solid #dbdbdb;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const UploadImgButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: -8%;
  right: -15%;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--color-enabled-dark);
`;

const UploadImg = styled.img`
  width: 28px;
  height: 28px;
  margin-top: 3px;
`;
