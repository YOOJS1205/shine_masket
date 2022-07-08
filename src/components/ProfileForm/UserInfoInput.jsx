import React from 'react';
import styled from 'styled-components';

export default function UserInfoInput({ placeholder, onChange }) {
  return (
    <>
      <Input placeholder={placeholder} onChange={onChange} />
    </>
  );
}

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
