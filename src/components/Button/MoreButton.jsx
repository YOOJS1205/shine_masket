import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MoreIcon from '../../assets/icon/icon-more-vertical.png';
import MoreIconSmall from '../../assets/icon/s-icon-more-vertical.png';
import Modal from '../../components/Modal/Modal';

export default function MoreButton({ size, postId, commentAccount }) {
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [ref, setRef] = useState('');
  const onClickMoreBtn = () => {
    setModal(true);
  };

  const { UserAccount } = useSelector((state) => state.UserInfoReducer);

  const handlecloseModal = (e) => {
    if (e.target !== ref.current && e.target !== ref.current.childNodes[1]) {
      console.log(e.target, ref.current.childNodes[1]);
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
        ) : null}
      </ButtonComponent>
      {modal && size === 'large' ? (
        <Modal
          postId={postId}
          getRef={getRef}
          modal={modal}
          onClick={handlecloseModal}
          text={
            location.pathname === '/chat-list' || location.pathname === `/profile/${UserAccount}`
              ? ['설정 및 개인정보', '로그아웃']
              : ['채팅방 나가기']
          }
        />
      ) : null}
      {modal && size === 'large' ? (
        <Modal
          postId={postId}
          getRef={getRef}
          modal={modal}
          onClick={handlecloseModal}
          text={
            location.pathname === `/post/${postId}` || UserAccount === commentAccount
              ? ['삭제']
              : ['신고하기']
          }
        />
      ) : null}
      {modal && size === 'small' ? (
        <Modal
          postId={postId}
          getRef={getRef}
          modal={modal}
          onClick={handlecloseModal}
          text={
            location.pathname === `/profile/${UserAccount}` ||
            location.pathname === `/post/${postId}`
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
