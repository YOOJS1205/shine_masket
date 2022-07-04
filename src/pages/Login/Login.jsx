import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';

export default function Login() {
  return (
    <div>
      <Title title="로그인" />
      <Form buttonText="로그인" />
      <Link to="/join">
        <Join>이메일로 회원가입</Join>
      </Link>
    </div>
  );
}

const Join = styled.p`
  margin-top: 20px;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
  text-align: center;
`;
