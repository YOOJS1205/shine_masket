import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../Button/Button';

export default function Form() {
  const url = 'https://mandarin.api.weniv.co.kr';

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    if (id && password) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [id, password]);

  const onHandleUserId = (e) => {
    setId(e.target.value);
    const email = id;
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (!regExp.test(email)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };

  const onHandleUserPassword = (e) => {
    setPassword(e.target.value);
  };

  async function onClickLogin(e) {
    if (!isEmpty) {
      e.preventDefault();
      try {
        const res = await axios.post(url + '/user/login/', {
          user: {
            email: id,
            password: password,
          },
        });
        console.log(res.data);
        if (res.data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
          setIsWrong(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      e.preventDefault();
    }
  }

  return (
    <Container>
      <Label htmlFor="email">이메일</Label>
      <Input type="email" id="email" onChange={onHandleUserId} />
      <CheckEmail isEmail={isEmail}>
        * 이메일 형식이 올바르지 않습니다.
      </CheckEmail>
      <Label htmlFor="password">비밀번호</Label>
      <Input type="password" id="password" onChange={onHandleUserPassword} />
      <WarningText isWrong={isWrong}>
        * 이메일 또는 비밀번호가 일치하지 않습니다.
      </WarningText>
      <Button buttonText='로그인' isEmpty={isEmpty} onClick={onClickLogin}></Button>
    </Container>
  );
}

const Container = styled.form`
  margin-top: 60px;
  padding: 0 34px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

const Input = styled.input`
  display: block;
  width: calc(100% - 20px);
  margin-bottom: 16px;
  padding: 10px;
  background-color: #ffffff;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid #dbdbdb;
`;

const CheckEmail = styled.p`
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
  margin-top: -8px;
  display: ${(props) => (props.isEmail ? 'block' : 'none')};
`;

const WarningText = styled.p`
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
  margin-top: -8px;
  display: ${(props) => (props.isWrong ? 'block' : 'none')};
`;