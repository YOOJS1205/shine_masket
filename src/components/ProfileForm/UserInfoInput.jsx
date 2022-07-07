import React from 'react';
import styled from 'styled-components';

export default function UserInfoInput({ TitleText, placeholder }) {
  return (
    <>
      <Title>{TitleText}</Title>
      <Input placeholder={placeholder} />
    </>
  );
}

const Title = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
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
  font-size: 14px;
  line-height: 14px;
  color: #dbdbdb;
`;
