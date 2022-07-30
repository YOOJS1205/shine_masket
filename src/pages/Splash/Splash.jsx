import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import FullLogo from '../../assets/images/full-logo.png';

export default function Splash() {
  const history = useHistory();

  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    (async function checkTokenAvailable() {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const res = await axios.get('https://mandarin.api.weniv.co.kr/user/checktoken', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        res.data.isValid && setIsTokenValid(true);
      } catch (error) {
        console.log(error);
      }
    })();

    setTimeout(() => {
      if (localStorage.getItem('accessToken') && isTokenValid) {
        history.push('/home-empty');
      } else {
        history.push('/welcome');
      }
    }, 2000);
  }, []);

  return (
    <BackGround>
      <h1 className="ir">샤인마스켓 처음 화면</h1>
      <Logo src={FullLogo} alt="샤인마스켓 로고" />
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
