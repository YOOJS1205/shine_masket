import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../Button/Button';

export default function Form({
  buttonText,
  getUserInfo,
  getJoinInfo,
  isEmail,
  isWrong,
  onClick,
}) {
  const location = useLocation();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  location.pathname === '/login'
    ? getUserInfo(id, password)
    : getJoinInfo(id, password);

  useEffect(() => {
    if (id && password) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [id, password]);

  const onHandleUserId = (e) => {
    setId(e.target.value);
  };

  const onHandleUserPassword = (e) => {
    setPassword(e.target.value);
  };

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
      <Link to={buttonText === '다음' ? '/join/profile' : '/'}>
        <Button
          buttonText={buttonText}
          isEmpty={isEmpty}
          onClick={onClick}
        ></Button>
      </Link>
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
