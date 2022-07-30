import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ImageButton from './ImageButton';
import ProductInfoInput from './ProductInfoInput';
import InputTitle from './InputTitle';
import TopMenuBar from '../TopMenuBar/TopMenuBar';

export default function ProductForm() {
  const { UserAccount } = useSelector((state) => ({
    UserAccount: state.UserInfoReducer.UserAccount,
  }));

  const history = useHistory();

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productLink, setProductLink] = useState('');
  const [nameLength, setNameLength] = useState(true);
  const [numberLength, setNumberLength] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  // 자식 컴포넌트(ImageButton)에서 이미지 src 받아오기
  const getImageSrc = (imgSrc) => {
    setImgSrc(imgSrc);
  };

  // Input 값이 모두 있어야 버튼 활성화
  useEffect(() => {
    if (productName && productPrice && productLink && nameLength && isNumber && numberLength) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [productName, productPrice, productLink, nameLength, isNumber, numberLength]);

  // 상품 이름 2~15자 이내 검사
  useEffect(() => {
    if ((productName.length > 15 || productName.length < 2) && productName.length !== 0) {
      setNameLength(false);
    } else {
      setNameLength(true);
    }
  }, [productName, nameLength]);

  // 가격 유효성 검사
  useEffect(() => {
    const regExp = /^[0-9]+$/;
    if (regExp.test(productPrice) || !productPrice) {
      setIsNumber(true);
      if (productPrice.length < 10) {
        setNumberLength(true);
      } else {
        setNumberLength(false);
      }
    } else {
      setIsNumber(false);
    }
  }, [productPrice]);

  useEffect(() => {
    if (!productPrice.length || productPrice.length < 10) {
      setNumberLength(true);
    } else {
      setNumberLength(false);
    }
  }, [numberLength]);

  // 사용자가 입력하는 데이터 동적으로 변수에 저장
  const onHandleProductName = (e) => {
    setProductName(e.target.value);
  };

  const onHandleProductPrice = (e) => {
    setProductPrice(e.target.value);
  };

  const onHandleProductLink = (e) => {
    setProductLink(e.target.value);
  };

  const onClickStartButton = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('uploadImage', imgSrc);

    try {
      const accessToken = localStorage.getItem('accessToken');

      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/product',
        {
          product: {
            itemName: productName,
            price: parseInt(productPrice),
            link: productLink,
            itemImage: imgSrc,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
          },
        }
      );

      history.push(`/profile/${UserAccount}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopMenuBar saveButton isEmpty={isEmpty} onClick={onClickStartButton} />
      <FormContainer method="POST">
        <ImageButton getImageSrc={getImageSrc} />
        <HiddenInput type="file" accept="image/jpg, image/jpeg, image/png" />
        <InputTitle TitleText="상품명" />
        <ProductInfoInput
          onChange={onHandleProductName}
          TitleText="상품명"
          placeholder="2~15자 이내여야 합니다."
          isLast={false}
        />
        {nameLength ? null : <WarningText>* 2~15자 이내여야 합니다.</WarningText>}
        <InputTitle TitleText="가격" />
        <ProductInfoInput
          onChange={onHandleProductPrice}
          TitleText="가격"
          placeholder="숫자만 입력 가능합니다."
          isLast={false}
        />

        {isNumber ? null : <WarningText>* 숫자만 입력 가능합니다.</WarningText>}
        {numberLength ? null : <WarningText>* 입력할 수 있는 금액을 초과했습니다.</WarningText>}
        <InputTitle TitleText="판매 링크" />
        <ProductInfoInput
          onChange={onHandleProductLink}
          TitleText="판매 링크"
          placeholder="URL을 입력해 주세요."
          isLast={true}
        />
      </FormContainer>
    </>
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
  margin-bottom: 20px;
`;

const HiddenInput = styled.input`
  display: none;
`;
