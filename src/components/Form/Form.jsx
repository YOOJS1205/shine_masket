import React from 'react';
import styled from 'styled-components';

export default function Form({ buttonText }) {
  return (
    <Container>
      <Label htmlFor="email">이메일</Label>
      <Input type="email" id="email" />
      <Label htmlFor="password">비밀번호</Label>
      <Input type="password" id="password" />
      <Button>{buttonText}</Button>
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

const Button = styled.button`
  background-color: var(--color-enabled);
  color: #ffffff;
  border-radius: 44px;
  width: 100%;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-top: 14px;
  padding: 13px 0;
`;
