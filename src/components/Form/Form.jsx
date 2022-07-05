import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Form({ buttonText }) {
  const url = 'https://mandarin.api.weniv.co.kr';

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

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

  async function getData(e) {
    if (!isEmpty) {
      e.preventDefault();
      try {
        const res = await axios.post(url + '/user/login/', {
          user: {
            email: id,
            password: password,
          },
        });
        console.log(id, password);
        console.log(res.data);
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
      <Label htmlFor="password">비밀번호</Label>
      <Input type="password" id="password" onChange={onHandleUserPassword} />
      <Button onClick={getData} isEmpty={isEmpty}>
        {buttonText}
      </Button>
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
  background-color: ${(props) =>
    props.isEmpty ? 'var(--color-enabled)' : 'var(--color-enabled-dark)'};
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
