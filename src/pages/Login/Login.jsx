import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
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
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!regExp.test(loginId)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
    try {
      const res = await axios.post('https://mandarin.api.weniv.co.kr/user/login/', {
        user: {
          email: loginId,
          password: loginPassword,
        },
      });

      if (!res.data.message) {
        const UserId = res.data.user.email;
        const UserName = res.data.user.username;
        const UserAccount = res.data.user.accountname;
        const UserIntro = res.data.user.intro;
        const UserImage =
          res.data.user.image === 'http://146.56.183.55:5050/Ellipse.png'
            ? 'https://mandarin.api.weniv.co.kr/Ellipse.png'
            : res.data.user.image;
        const loginToken = res.data.user.token;
        const refreshToken = res.data.user.refreshToken;
        const User_Id = res.data.user._id;
        dispatch({
          type: 'LOGIN',
          UserName,
          UserId,
          UserImage,
          UserAccount,
          UserIntro,
          User_Id,
        });

        localStorage.setItem('accessToken', loginToken);
        localStorage.setItem('refreshToken', refreshToken);
        history.push('/home-empty');
      }
      if (res.data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
        setIsWrong(true);
      } else {
        setIsWrong(false);
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
