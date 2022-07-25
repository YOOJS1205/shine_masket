import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import iconUpload from '../../assets/icon/icon-upload.png';
import axios from 'axios';

export default function UploadItemImg() {
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState('');

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    console.log(fileBlob);

    // 리듀서에 파일 저장
    dispatch({ type: 'PRODUCT_IMG_UPLOAD', fileBlob });

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      {/* <img src={imgSrc} alt="" /> */}

      <UploadItemImgComponent>
        <UploadItemImgTitle>이미지 등록</UploadItemImgTitle>
        <ImageLabel htmlFor="image" />
        <UploadItemInput
          type="file"
          id="image"
          accept="image/jpg, image/png, image/jpeg"
          // ref={photoInput}
          onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
          }}
        />
        <UploadFileImg src={imageSrc} />
        <UploadFile />

        {/* <UploadItemButton></UploadItemButton> */}
      </UploadItemImgComponent>
    </>
  );
}

const UploadItemImgComponent = styled.article`
  margin-bottom: 30px;
`;

const UploadItemImgTitle = styled.h2`
  margin: 30px 0 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;
const ImageLabel = styled.label``;

const UploadItemInput = styled.input`
  /* overflow: hidden; */
  /* display: block; */
  position: relative;
  width: 100%;
  height: 205px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  background-color: #f2f2f2;
  z-index: 1;
`;

// const UploadItemButton = styled.button`
//   position: relative;
//   width: 100%;
//   height: 205px;
//   border: 0.5px solid #dbdbdb;
//   border-radius: 10px;
//   background-color: #f2f2f2;
//   background-color: red;
// `;

const UploadFile = styled.div`
  /* 동그란 버튼!! */
  /* overflow: hidden; */
  /* position: absolute; */
  right: 12px;
  bottom: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #c4c4c4;
  background-color: red;
`;

const UploadFileImg = styled.img`
  display: block;

  /* float: left; */
  /* width: 100%;
  height: 100%; */
  position: absolute;
  z-index: 10;
  /* top: -150%; */
  left: 50%;
  transform: translate(-50%, -100%);
`;
