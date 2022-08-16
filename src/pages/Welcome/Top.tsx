import React from 'react';
import styled from 'styled-components';
import SymbolLogo from '../../assets/images/symbol-logo-W.png';

export default function Top() {
  return (
    <Container>
      <h1 className="ir">Welcome 페이지 상단</h1>
      <Logo src={SymbolLogo} alt="샤인마스켓 로고 이미지" />
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--color-enabled);
  padding: 200px 123px;
  text-align: center;
`;

const Logo = styled.img``;
