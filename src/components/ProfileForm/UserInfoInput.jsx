import React from 'react';
import styled from 'styled-components';

export default function UserInfoInput({ placeholder, onChange, isLast }) {
  return (
    <>
      <Input placeholder={placeholder} onChange={onChange} isLast={isLast} />
    </>
  );
}

const Input = styled.input`
  display: block;
  width: calc(100% - 20px);
  margin-bottom: ${(props) => (props.isLast ? '30px' : '14px')};
  padding: 10px;
  background-color: #ffffff;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 1px solid #dbdbdb;
  font-size: 14px;
  line-height: 14px;
  /* color: #dbdbdb; */
`;
