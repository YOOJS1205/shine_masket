import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../../components/Modal/Modal';
import MoreIcon from '../../assets/icon/icon-more-vertical.png';
import MoreIconSmall from '../../assets/icon/s-icon-more-vertical.png';
import MoreIcon_w from '../../assets/icon/icon-more-vertical-w.png';
import MoreIconSmall_w from '../../assets/icon/s-icon-more-vertical-w.png';

export default function MoreButton({ size, postId, commentAccount, postAccount }) {
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [ref, setRef] = useState('');
  const onClickMoreBtn = () => {
    setModal(true);
  };

  const { UserAccount } = useSelector((state) => state.UserInfoReducer);

  const handlecloseModal = (e) => {
    if (e.target !== ref.current && e.target !== ref.current.childNodes[1]) {
      setModal(false);
    }
  };

  const getRef = (data) => {
    useEffect(() => {
      setRef(data);
    }, [data]);
  };

  return (
    <>
      <ButtonComponent onClick={onClickMoreBtn} size={size}>
        {size === 'large' ? (
          <Img src={MoreIcon} />
        ) : size === 'small' ? (
          <Img src={MoreIconSmall} />
        ) : size === 'large_w' ? (
          <Img src={MoreIcon_w} />
        ) : size === 'small_w' ? (
          <Img src={MoreIconSmall_w} />
        ) : null}
      </ButtonComponent>
      {modal && size === 'large' ? (
        <Modal
          postId={postId}
          getRef={getRef}
          modal={modal}
          onClick={handlecloseModal}
          text={
            location.pathname.includes('/post') && UserAccount === commentAccount
              ? ['삭제']
              : location.pathname.includes('/post') && UserAccount !== commentAccount
              ? ['신고하기']
              : null
          }
        />
      ) : null}

      {modal && size === 'large_w' ? (
        <Modal
          postId={postId}
          getRef={getRef}
          modal={modal}
          onClick={handlecloseModal}
          text={
            location.pathname === '/chat-list' || location.pathname.includes('/profile')
              ? ['설정 및 개인정보', '로그아웃']
              : location.pathname.includes('/post') && commentAccount === undefined
              ? ['설정 및 개인정보', '로그아웃']
              : ['채팅방 나가기']
          }
        />
      ) : null}

      {modal && size === 'small' ? (
        <Modal
          UserAccount={UserAccount}
          postAccount={postAccount}
          postId={postId}
          getRef={getRef}
          modal={modal}
          onClick={handlecloseModal}
          text={
            location.pathname === `/profile/${UserAccount}` || UserAccount === postAccount
              ? ['수정', '삭제']
              : ['신고하기']
          }
        />
      ) : null}
    </>
  );
}

const ButtonComponent = styled.button`
  width: ${(props) => (props.size === 'large' ? '22px' : props.size === 'small' ? '18px' : null)};
  margin-top: 5px;
  border: none;
  margin-left: auto;
`;

const Img = styled.img`
  width: ${(props) => (props.size === 'large' ? '22px' : props.size === 'small' ? '18px' : null)};
`;
