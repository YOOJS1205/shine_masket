import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ImageButton from './ImageButton';
import UserInfoInput from './ItemInfoInput';
import Button from '../Button/Button';
import InputTitle from './InputTitle';
import UploadItemImg from './UploadItemImg';
import ItemInfoInput from './ItemInfoInput';

export default function ProductForm({ isButton }) {
  return (
    <FormContainer>
      <UploadItemImg />
      <InputTitle TitleText="상품명"></InputTitle>
      <ItemInfoInput placeholder="2~15자 이내여야 합니다."></ItemInfoInput>
      <InputTitle TitleText="가격"></InputTitle>
      <ItemInfoInput placeholder="숫자만 입력 가능합니다."></ItemInfoInput>
      <InputTitle TitleText="판매 링크"></InputTitle>
      <ItemInfoInput placeholder="URL을 입력해 주세요."></ItemInfoInput>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  padding: 0 34px;
`;

const WarningText = styled.p`
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
  margin-top: -10px;
  margin-bottom: 30px;
`;
