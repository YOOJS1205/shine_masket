import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import UploadPic from '../../assets/icon/icon-upload.png';

export default function ImageButton({ getImageSrc }) {
  const photoInput = useRef();
  const [imgSrc, setImgSrc] = useState('');
  const [fileName, setFileName] = useState('');

  // 부모 컴포넌트인 ProfileForm으로 이미지 src 데이터 전달
  useEffect(() => {
    getImageSrc(fileName);
  }, [fileName]);

  // 이미지 미리 보기 함수
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = async (e) => {
        let formData = new FormData();
        formData.append('image', fileBlob);

        const res = await axios.post('https://api.mandarin.weniv.co.kr/image/uploadfile', formData);
        console.log(res.data.filename);
        setFileName(`https://api.mandarin.weniv.co.kr/${res.data.filename}`);

        setImgSrc(e.target.result);

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
        accept="image/jpg, image/png, image/jpeg"
        ref={photoInput}
        onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
        }}
      />
      <ProductImgContainer>
        <ProductButton src={imgSrc ? imgSrc : ''} alt="" />
        <UploadImgButton onClick={onHandleImageButton}>
          <UploadImg src={UploadPic} alt="상품 이미지 업로드" />
        </UploadImgButton>
      </ProductImgContainer>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.section`
  display: block;
  margin: 30px auto;
  background-color: #ffffff;
`;

const ImageLabel = styled.label``;
const HiddenInput = styled.input`
  display: none;
`;

const ProductImgContainer = styled.div`
  margin: 0 auto;
  position: relative;
  height: 204px;
  max-width: 500px;
  border-radius: 10px;
  border: 0.5px solid #dbdbdb;
  background-color: #f2f2f2;
`;

const ProductButton = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  &[src=''] {
    display: none;
  }
`;

const UploadImgButton = styled.button`
  position: absolute;
  bottom: 7%;
  right: 4%;
  width: 36px;
  height: 36px;
  background-color: #c4c4c4;
  border-radius: 50%;
`;

const UploadImg = styled.img`
  vertical-align: middle;
`;
