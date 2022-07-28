import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const photoInput = useRef();
  // 전역 데이터로 담긴 가입 ID, PW 가져오기
  const { UserAccount, UserName, UserIntro } = useSelector((state) => ({
    UserAccount: state.UserInfoReducer.UserAccount,
    UserName: state.UserInfoReducer.UserName,
    UserIntro: state.UserInfoReducer.UserIntro,
  }));

  console.log(history.location.data);

  // 사용자가 설정한 이름, 계정 ID, 소개 변수에 담기
  const [userName, setUserName] = useState(UserName ? UserName : '');
  const [userAccount, setUserAccount] = useState(UserAccount ? UserAccount : '');
  const [userIntro, setUserIntro] = useState(UserIntro ? UserIntro : '');
  const [nameLength, setNameLength] = useState(true);
  const [isId, setIsId] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  // Input 값이 모두 있어야 버튼 활성화
  useEffect(() => {
    if (userName && userAccount && userIntro && nameLength && isId) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [userName, userAccount, userIntro, nameLength, isId]);

  // 부모 컴포넌트인 ModifyProfile에 isEmpty 정보 전달
  // 부모 컴포넌트인 ModifyProfile에 userName, userAccount, userIntro 정보 전달
  useEffect(() => {
    if (location.pathname === `/profile/${UserAccount}/modify`) {
      getEmptyInfo(isEmpty);
      getUserInfo(userName, userAccount, userIntro);
    }
  }, [isEmpty, userIntro]);

  // 사용자 이름 2~10자 이내 검사
  useEffect(() => {
    if ((userName.length > 10 || userName.length < 2) && userName.length !== 0) {
      setNameLength(false);
    } else {
      setNameLength(true);
    }
  }, [userName]);

  // 계정 ID 유효성 검사
  useEffect(() => {
    const regExp = /^[a-z0-9A-Z_.]{1,}$/;
    if (regExp.test(userAccount) || !userAccount) {
      setIsId(true);
    } else {
      setIsId(false);
    }
  }, [userAccount]);

  // 자식 컴포넌트에서 이미지 src 받아오기
  const getImageSrc = (imgSrc) => {
    setImgSrc(imgSrc);
  };

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
    const formData = new FormData();
    formData.append('uploadImage', imgSrc);
    try {
      const res = await axios.post('https://mandarin.api.weniv.co.kr/user', {
        user: {
          username: userName,
          email: history.location.data.UserId,
          password: history.location.data.registerPassword,
          accountname: userAccount,
          intro: userIntro,
          image: imgSrc,
        },
      });

      console.log(res);

      if (res.data.message === '회원가입 성공') {
        const UserName = res.data.user.username;
        const UserAccount = res.data.user.accountname;
        const UserIntro = res.data.user.intro;
        const UserImage = res.data.user.image;
        dispatch({
          type: 'CLICK',
          UserName,
          UserAccount,
          UserIntro,
          UserImage,
        });
        history.push('/login');
      }
    } catch (error) {
      if (error.response.data.message === '이미 사용중인 계정 ID입니다.') {
        setIsExist(true);
      } else {
        setIsExist(false);
      }
    }
  };

  return (
    <FormContainer>
      <ImageButton getImageSrc={getImageSrc} />
      <HiddenInput
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        multiple
        ref={photoInput}
      />
      <InputTitle TitleText="사용자 이름" />
      <UserInfoInput
        onChange={onHandleUserName}
        TitleText="사용자 이름"
        placeholder="2~10자 이내여야 합니다."
        isLast={false}
        defaultValue={location.pathname === `/profile/${UserAccount}/modify` ? UserName : null}
      />
      {nameLength ? null : <WarningText>* 2~10자 이내여야 합니다.</WarningText>}
      <InputTitle TitleText="계정 ID" />
      <UserInfoInput
        onChange={onHandleUserAccount}
        TitleText="계정 ID"
        placeholder="영문, 숫자, 특수문자(.) , (_)만 사용 가능합니다."
        isLast={false}
        defaultValue={location.pathname === `/profile/${UserAccount}/modify` ? UserAccount : null}
      />
      {isId ? null : <WarningText>* 영문, 숫자, 특수문자(.) , (_)만 사용 가능합니다.</WarningText>}
      {isExist ? <WarningText>* 이미 사용중인 계정입니다.</WarningText> : null}
      <InputTitle TitleText="소개" />
      <UserInfoInput
        onChange={onHandleUserIntro}
        TitleText="소개"
        placeholder="자신이 판매할 상품에 대해 소개해 주세요!"
        isLast={true}
        defaultValue={location.pathname === `/profile/${UserAccount}/modify` ? UserIntro : null}
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

const HiddenInput = styled.input`
  display: none;
`;
