import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import FullLogo from '../../assets/images/full-logo.png';

export default function Splash() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/welcome');
    }, 2000);
  }, []);

  return (
    <BackGround>
      <Logo src={FullLogo} />
    </BackGround>
  );
}

const BackGround = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-background);
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
