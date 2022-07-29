import React from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export default function LogoutModal({ text, buttonText, postId }) {
  const { UserAccount } = useSelector((state) => state.UserInfoReducer);
  const history = useHistory();
  const location = useLocation();

  function onClickLogoutButton() {
    localStorage.clear();
    history.push('/welcome');
  }

  async function onClickDeleteButton(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');
      const res = await axios.delete(`https://mandarin.api.weniv.co.kr/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      if (res.data.message === '삭제되었습니다.') {
        alert('삭제되었습니다.');
      }

      if (location.pathname === `/profile/${UserAccount}`) {
        location.reload();
      } else {
        history.push(`/profile/${UserAccount}`);
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.message === '존재하지 않는 게시글입니다.') {
        alert('존재하지 않는 게시글입니다.');
      }
      if (error.response.data.message === '잘못된 요청입니다. 로그인 정보를 확인하세요') {
        alert('잘못된 요청입니다. 로그인 정보를 확인하세요.');
      }
    }
  }

  return (
    <>
      <LogoutWrap>
        <LogoutText>{text}</LogoutText>
        <FuncButton>취소</FuncButton>
        <LogoutButton
          onClick={location.pathname === '/chat-list' ? onClickLogoutButton : onClickDeleteButton}
        >
          {buttonText}
        </LogoutButton>
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
  font-size: 16px;
  line-height: 20px;
  padding: 22px 56px;
  color: #000;
`;

const FuncButton = styled.button`
  font-size: 14px;
  line-height: 18px;
  width: 50%;
  padding: 14px 0;
  border-top: 0.5px solid #dbdbdb;
`;

const LogoutButton = styled(FuncButton)`
  color: #f26e22;
  border-left: 0.5px solid #dbdbdb;
`;
