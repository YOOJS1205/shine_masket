import React from 'react';
import styled from 'styled-components';
import SymbolLogo from '../../assets/images/symbol-logo-W.png';

export default function Top() {
  return (
    <Container>
      <Logo src={SymbolLogo} />
    </Container>
  );
}

const Container = styled.article`
  background-color: var(--color-enabled);
  padding: 200px 123px;
  text-align: center;
`;

const Logo = styled.img``;
