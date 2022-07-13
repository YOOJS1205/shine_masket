import React from 'react';
import styled from 'styled-components';
import iconUpload from '../../assets/icon/icon-upload.png';

export default function UploadItemImg() {
  return (
    <>
      <UploadItemImgComponent>
        <UploadItemImgTitle>이미지 등록</UploadItemImgTitle>
        <UploadItemButton>
          <UploadFile>
            <UploadFileImg src={iconUpload} />
          </UploadFile>
        </UploadItemButton>
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

const UploadItemButton = styled.button`
  position: relative;
  width: 100%;
  height: 205px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  background-color: #f2f2f2;
`;

const UploadFile = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

const UploadFileImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
