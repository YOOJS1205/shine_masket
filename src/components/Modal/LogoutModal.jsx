import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function LogoutModal({ text, buttonText }) {
  const history = useHistory();

  function onClickLogoutButton() {
    localStorage.clear();
    history.push('/welcome');
  }

  return (
    <>
      <LogoutWrap>
        <LogoutText>{text}</LogoutText>
        <FuncButton>취소</FuncButton>
        <LogoutButton onClick={onClickLogoutButton}>{buttonText}</LogoutButton>
      </LogoutWrap>
    </>
  );
}

const LogoutWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
`;

const LogoutText = styled.p`
  width: 252px;
  font-size: 16px;
  line-height: 20px;
  padding: 22px 54px;
  color: #000;
  box-sizing: border-box;
`;

const FuncButton = styled.button`
  font-size: 14px;
  line-height: 18px;
  width: 50%;
  padding: 14px 0;
  border-top: 0.5px solid #dbdbdb;
`;

const LogoutButton = styled(FuncButton)`
  color: var(--color-deep-bg);
  border-left: 0.5px solid #dbdbdb;
`;
