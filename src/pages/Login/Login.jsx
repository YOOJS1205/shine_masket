import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';

export default function Login() {
  // 고객이 폼에 입력하는 ID, PW 데이터 변수화
  // 고객이 입력한 이메일 유효성, 비밀번호 일치 여부에 대한 불리언 값 변수화
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isWrong, setIsWrong] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  // Form(자식 컴포넌트)로부터 id, password 받아오는 함수
  const getUserInfo = (id, password) => {
    useEffect(() => {
      setLoginId(id);
      setLoginPassword(password);
    }, [id, password]);
  };

  // 로그인 버튼 클릭
  // 기능 1. 클릭 시 이메일 유효성 검사
  // 기능 2. 로그인 API 통신 (ID, PW 서버에 보내기)
  // 기능 3. 비밀번호 일치하지 않으면 경고 문구 출력
  const onClickLogin = async (e) => {
    e.preventDefault();
    const email = loginId;
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regExp.test(email)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/user/login/',
        {
          user: {
            email: loginId,
            password: loginPassword,
          },
        }
      );
      console.log(res.data);
      if (res.data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
        setIsWrong(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Title title="로그인" />
      <Form
        buttonText="로그인"
        getUserInfo={getUserInfo}
        isEmail={isEmail}
        isWrong={isWrong}
        onClick={onClickLogin}
      />
      <Link to="/join">
        <Join>이메일로 회원가입</Join>
      </Link>
    </Container>
  );
}

const Container = styled.section``;

const Join = styled.p`
  margin-top: 20px;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
  text-align: center;
`;
