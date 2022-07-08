import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

export default function Form({
  buttonText,
  getUserInfo,
  getJoinInfo,
  isEmail,
  isWrong,
  emailAvailable,
  passwordAvailable,
  isUser,
  onClick,
  onBlur,
}) {
  const location = useLocation();

  // 고객이 폼에 입력하는 ID, PW 데이터 변수화
  // 고객이 폼에 모두 값을 입력했는지에 대한 불리언 값 변수화
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  // URL 경로에 따라서 부모의 PROPS 함수를 다르게 받음
  location.pathname === '/login'
    ? getUserInfo(id, password)
    : getJoinInfo(id, password);

  // 고객이 폼에 입력할때마다 모두 값을 입력했는지에 대한 불리언 값 업데이트
  useEffect(() => {
    if (id && password) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [id, password]);

  // ID, PW 동적으로 업데이트
  const onHandleUserId = (e) => {
    setId(e.target.value);
  };

  const onHandleUserPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <Label htmlFor="email">이메일</Label>
      <Input
        type="email"
        id="email"
        onChange={onHandleUserId}
        onBlur={onBlur}
      />
      {location.pathname === '/login' ? (
        <CheckEmail isEmail={isEmail}>
          * 이메일 형식이 올바르지 않습니다.
        </CheckEmail>
      ) : (
        <CheckEmailAvailable emailAvailable={emailAvailable} isUser={isUser}>
          {emailAvailable ? null : '* 이메일 형식이 올바르지 않습니다.'}
          {isUser ? '* 이미 가입된 이메일 주소 입니다.' : null}
        </CheckEmailAvailable>
      )}
      <Label htmlFor="password">비밀번호</Label>
      <InputBottom
        type="password"
        id="password"
        onChange={onHandleUserPassword}
        onBlur={onBlur}
      />
      {location.pathname === '/login' ? (
        <WarningText isWrong={isWrong}>
          {isWrong ? '* 이메일 또는 비밀번호가 일치하지 않습니다.' : null}
        </WarningText>
      ) : (
        <CheckPasswordAvailable passwordAvailable={passwordAvailable}>
          {passwordAvailable ? null : '* 비밀번호는 6자리 이상이여야 합니다.'}
        </CheckPasswordAvailable>
      )}
      <Button
        buttonText={buttonText}
        isEmpty={isEmpty}
        onClick={onClick}
        size="large"
      ></Button>
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

const InputBottom = styled(Input)`
  margin-bottom: 30px;
`;

const CheckEmail = styled.p`
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
  margin-top: -8px;
  margin-bottom: 6px;
  display: ${(props) => (props.isEmail ? 'block' : 'none')};
`;

const CheckEmailAvailable = styled.p`
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
  margin-top: -8px;
  margin-bottom: 6px;
  display: ${(props) => {
    if (props.emailAvailable) {
      ('none');
    } else {
      ('block');
    }
    if (props.isUser) {
      ('block');
    } else {
      ('none');
    }
  }};
`;

const WarningText = styled.p`
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
  margin-top: -24px;
  margin-bottom: 30px;
  display: ${(props) => (props.isWrong ? 'block' : 'none')};
`;

const CheckPasswordAvailable = styled.p`
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
  margin-top: -24px;
  margin-bottom: 30px;
  display: ${(props) => (props.passwordAvailable ? 'none' : 'block')};
`;
