import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../assets/images/google.png';
import KakaoLogo from '../../assets/images/message-circle.png';
import FacebookLogo from '../../assets/images/facebook.png';

export default function Form() {
  return (
    <Container>
      <LoginButton borderColor="#F2C94C">
        <SocialLogo src={KakaoLogo} />
        카카오톡 계정으로 로그인
      </LoginButton>
      <LoginButton borderColor="#767676">
        <SocialLogo src={GoogleLogo} />
        구글 계정으로 로그인
      </LoginButton>
      <LoginButton borderColor="#2D9CDB">
        <SocialLogo src={FacebookLogo} />
        페이스북 계정으로 로그인
      </LoginButton>
      <Options>
        <Link to="/login">
          <FirstOption>이메일로 로그인</FirstOption>
        </Link>
        <Link to="/join">
          <Option>회원가입</Option>
        </Link>
      </Options>
    </Container>
  );
}

const Container = styled.section`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  margin-top: -20px;
  z-index: 10;
  background-color: #ffffff;
  padding: 50px 30px 100px;
`;

const LoginButton = styled.button`
  display: block;
  border-radius: 20px;
  padding: 13px 17px;
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  background-color: #ffffff;
  color: #767676;
  border: 1px solid ${(props) => props.borderColor};
  margin-bottom: 10px;
`;

const SocialLogo = styled.img`
  width: 18px;
  vertical-align: -4px;
  float: left;
`;

const Options = styled.div`
  margin: 30px 0;
  text-align: center;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
`;

const Option = styled.strong`
  margin: 0 6px;
`;

const FirstOption = styled(Option)`
  &::after {
    content: '|';
    display: inline-block;
    vertical-align: 1px;
    padding-left: 12px;
    color: #767676;
  }
`;
