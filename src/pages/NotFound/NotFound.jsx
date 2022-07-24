import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Icon404 from '../../assets/images/icon-404.png';
import Button from '../../components/Button/Button';

export default function NotFound() {
  const history = useHistory();
  return (
    <BackGround>
      <h1 className="ir">404 Not Found 화면</h1>
      <Container>
        <Logo src={Icon404} alt="404 로고" />
        <Text>페이지를 찾을 수 없습니다. :(</Text>
        <Button size="medium" buttonText="이전 페이지" onClick={() => history.goBack()} />
      </Container>
    </BackGround>
  );
}

const BackGround = styled.article`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  position: relative;
`;

const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Logo = styled.img``;

const Text = styled.p`
  font-size: 14px;
  line-height: 14px;
  color: #767676;
  margin: 32px 0 20px;
`;
