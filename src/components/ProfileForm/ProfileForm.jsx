import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ImageButton from './ImageButton';
import UserInfoInput from './UserInfoInput';
import Button from '../Button/Button';
import InputTitle from './InputTitle';

export default function ProfileForm({ isButton }) {
  const dispatch = useDispatch();
  // 전역 데이터로 담긴 가입 ID, PW 가져오기
  const { registerId, registerPassword } = useSelector((state) => ({
    registerId: state.UserInfoReducer.registerId,
    registerPassword: state.UserInfoReducer.registerPassword,
  }));

  // 사용자가 설정한 이름, 계정 ID, 소개 변수에 담기
  const [userName, setUserName] = useState('');
  const [userAccount, setUserAccount] = useState('');
  const [userIntro, setUserIntro] = useState('');

  // 사용자가 입력하는 데이터 동적으로 변수에 저장
  const onHandleUserName = (e) => {
    setUserName(e.target.value);
  };

  const onHandleUserAccount = (e) => {
    setUserAccount(e.target.value);
  };

  const onHandleUserIntro = (e) => {
    setUserIntro(e.target.value);
  };

  // 시작 버튼
  // 기능 1. 회원가입 API 통신 (서버에 유저 정보 보내기)
  // 기능 2. Redux로 유저 정보 담기
  const onClickStartButton = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://mandarin.api.weniv.co.kr/user', {
        user: {
          username: userName,
          email: registerId,
          password: registerPassword,
          accountname: userAccount,
          intro: userIntro,
          image: '',
        },
      });
      console.log(res.data.user);
      const registerUserName = userName;
      const registerAccountName = userAccount;
      const registerIntro = userIntro;
      dispatch({
        type: 'CLICK',
        registerUserName,
        registerAccountName,
        registerIntro,
      });
      console.log(registerIntro);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <ImageButton />
      <InputTitle TitleText="사용자 이름" />
      <UserInfoInput
        onChange={onHandleUserName}
        TitleText="사용자 이름"
        placeholder="2~10자 이내여야 합니다."
        isLast={false}
      />
      <InputTitle TitleText="계정 ID" />
      <UserInfoInput
        onChange={onHandleUserAccount}
        TitleText="계정 ID"
        placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        isLast={false}
      />
      <InputTitle TitleText="소개" />
      <UserInfoInput
        onChange={onHandleUserIntro}
        TitleText="소개"
        placeholder="자신이 판매할 상품에 대해 소개해 주세요!"
        isLast={true}
      />
      {isButton ? (
        <Button
          size="large"
          buttonText="샤인마스켓 시작하기"
          onClick={onClickStartButton}
        />
      ) : null}
    </FormContainer>
  );
}

const FormContainer = styled.form`
  padding: 0 34px;
`;
