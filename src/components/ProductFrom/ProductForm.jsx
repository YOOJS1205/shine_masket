import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import UserInfoInput from './ItemInfoInput';
import Button from '../Button/Button';
import InputTitle from './InputTitle';
import UploadItemImg from './UploadItemImg';
import ItemInfoInput from './ItemInfoInput';
import { useLocation, useHistory } from 'react-router-dom';

export default function ProductForm() {
  const dispatch = useDispatch();

  const [productName, setProductName] = useState('');
  const [productCost, setProductCost] = useState(0);
  const [productLink, setProductLink] = useState('');

  const onHandleProductName = (e) => {
    setProductName(e.target.value);
    // console.log(e.target.value);
  };

  const onHandleProductCost = (e) => {
    setProductCost(e.target.value);
  };

  const onHandleProductLink = (e) => {
    setProductLink(e.target.value);
  };

  // dispatch({ type: 'PRODUCT_INFO_UPLOAD', productName, productCost, productLink });

  return (
    <FormContainer>
      <UploadItemImg />
      <InputTitle TitleText="상품명"></InputTitle>
      <ItemInfoInput
        onChange={onHandleProductName}
        placeholder="2~15자 이내여야 합니다."
      ></ItemInfoInput>
      <InputTitle TitleText="가격"></InputTitle>
      <ItemInfoInput
        onChange={onHandleProductCost}
        placeholder="숫자만 입력 가능합니다."
      ></ItemInfoInput>
      <InputTitle TitleText="판매 링크"></InputTitle>
      <ItemInfoInput
        onChange={onHandleProductLink}
        placeholder="URL을 입력해 주세요."
      ></ItemInfoInput>
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
