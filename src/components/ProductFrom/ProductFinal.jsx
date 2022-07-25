import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ImageButton from './ImageButton';
import UserInfoInput from './UserInfoInput';
import InputTitle from './InputTitle';
import TopMenuBar from '../TopMenuBar/TopMenuBar';

// export default function ProfileForm({ isButton, getEmptyInfo, getUserInfo }) {
export default function ProductFinal({ isButton, getEmptyInfo, getUserInfo }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productLink, setProductLink] = useState('');
  const [nameLength, setNameLength] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  // 자식 컴포넌트(ImageButton)에서 이미지 src 받아오기
  const getImageSrc = (imgSrc) => {
    setImgSrc(imgSrc);
  };

  // Input 값이 모두 있어야 버튼 활성화
  useEffect(() => {
    if (productName && productPrice && productLink && nameLength && isNumber) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [productName, productPrice, productLink, nameLength, isNumber]);

  // 상품 이름 2~15자 이내 검사
  useEffect(() => {
    if ((productName.length > 15 || productName.length < 2) && productName.length !== 0) {
      setNameLength(false);
    } else {
      setNameLength(true);
    }
  }, [productName]);

  // 가격 유효성 검사
  useEffect(() => {
    const regExp = /^[0-9]+$/;
    if (regExp.test(productPrice) || !productPrice) {
      setIsNumber(true);
    } else {
      setIsNumber(false);
    }
  }, [productPrice]);

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
    // console.log(formData.getAll('uploadImage'));

    try {
      const accessToken = localStorage.getItem('accessToken');

      console.log(accessToken);
      console.log(productName);
      console.log(typeof parseInt(productPrice));
      console.log(productLink);
      console.log(imgSrc);

      console.log('res.data 시작');

      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/product',
        {
          product: {
            itemName: productName,
            price: parseInt(productPrice),
            link: productLink,
            itemImage: imgSrc,
          },
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
          },
        }
        // { withCredentials: true }
      );

      console.log('res.data 끝');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TopMenuBar saveButton isEmpty={isEmpty} onClick={onClickStartButton} />
      <FormContainer>
        <ImageButton getImageSrc={getImageSrc} />
        <HiddenInput type="file" accept="image/jpg, image/jpeg, image/png" />
        <InputTitle TitleText="상품명" />
        <UserInfoInput
          onChange={onHandleProductName}
          TitleText="상품명"
          placeholder="2~15자 이내여야 합니다."
          isLast={false}
        />
        {nameLength ? null : <WarningText>* 2~15자 이내여야 합니다.</WarningText>}
        <InputTitle TitleText="가격" />
        <UserInfoInput
          onChange={onHandleProductPrice}
          TitleText="가격"
          placeholder="숫자만 입력 가능합니다."
          isLast={false}
        />

        {isNumber ? null : <WarningText>* 숫자만 입력 가능합니다.</WarningText>}
        <InputTitle TitleText="판매 링크" />
        <UserInfoInput
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