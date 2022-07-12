import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ImageButton from './ImageButton';
import UserInfoInput from './UserInfoInput';
import Button from '../Button/Button';
import InputTitle from './InputTitle';

export default function ProfileForm({ isButton, getEmptyInfo, getUserInfo }) {
  const dispatch = useDispatch();
  const location = useLocation();
  // 전역 데이터로 담긴 가입 ID, PW 가져오기
  const { registerId, registerPassword } = useSelector((state) => ({
    registerId: state.UserInfoReducer.registerId,
    registerPassword: state.UserInfoReducer.registerPassword,
  }));

  // 사용자가 설정한 이름, 계정 ID, 소개 변수에 담기
  const [userName, setUserName] = useState('');
  const [userAccount, setUserAccount] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const [nameLength, setNameLength] = useState(true);
  const [isId, setIsId] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isExist, setIsExist] = useState(false);

  // Input 값이 모두 있어야 버튼 활성화
  useEffect(() => {
    if (userName && userAccount && userIntro) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [userName, userAccount, userIntro]);

  // 부모 컴포넌트인 ModifyProfile에 isEmpty 정보 전달
  // 부모 컴포넌트인 ModifyProfile에 userName, userAccount, userIntro 정보 전달
  if (location.pathname === '/profile/modify') {
    useEffect(() => {
      getEmptyInfo(isEmpty);
    }, [isEmpty]);

    useEffect(() => {
      getUserInfo(userName, userAccount, userIntro);
    }, [userName, userAccount, userIntro]);
  }

  // 사용자 이름 2~10자 이내 검사
  useEffect(() => {
    if (
      (userName.length > 10 || userName.length < 2) &&
      userName.length !== 0
    ) {
      setNameLength(false);
    } else {
      setNameLength(true);
    }
  }, [userName]);

  // 계정 ID 유효성 검사
  useEffect(() => {
    const regExp = /^[a-z0-9A-Z_.,()]{1,}$/;
    if (regExp.test(userAccount) || !userAccount) {
      setIsId(true);
    } else {
      setIsId(false);
    }
  }, [userAccount]);

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
  // 기능 3. 아이디 중복 시 경고 문구 발생
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
    } catch (error) {
      console.log(error);
      if (error.response.data.message === '이미 사용중인 계정 ID입니다.') {
        setIsExist(true);
      } else {
        setIsExist(false);
      }
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
      {nameLength ? null : <WarningText>* 2~10자 이내여야 합니다.</WarningText>}
      <InputTitle TitleText="계정 ID" />
      <UserInfoInput
        onChange={onHandleUserAccount}
        TitleText="계정 ID"
        placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        isLast={false}
      />
      {isId ? null : (
        <WarningText>
          * 영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.
        </WarningText>
      )}
      {isExist ? <WarningText>* 이미 사용중인 계정입니다.</WarningText> : null}
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
          isEmpty={isEmpty}
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

const WarningText = styled.p`
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
  margin-top: -10px;
  margin-bottom: 20px;
`;
