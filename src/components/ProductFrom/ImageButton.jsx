import React from 'react';
import styled from 'styled-components';
import ProfilePic from '../../assets/images/basic-profile-img.png';
import UploadPic from '../../assets/images/upload-file.png';

export default function ImageButton() {
  return (
    <Button>
      <ProfileImg src={ProfilePic} />
      <UploadImg src={UploadPic} />
    </Button>
  );
}

const Button = styled.button`
  display: block;
  border: none;
  margin: 30px auto;
  position: relative;
  background-color: #ffffff;
`;

const ProfileImg = styled.img``;

const UploadImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;
