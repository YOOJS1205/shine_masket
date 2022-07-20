import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import MoreIcon from '../../assets/icon/icon-more-vertical.png';
import MoreIconSmall from '../../assets/icon/s-icon-more-vertical.png';
import Modal from '../../components/Modal/Modal';

export default function Button({ onClick, size }) {

  const [modal, setModal] = useState(false);
  return (
    <ButtonComponent onClick={onClick} size={size}>
      {onClick}
      {size === 'large' ? (
        <Img src={MoreIcon} />
      ) : size === 'small' ? (
        <Img src={MoreIconSmall} />
      ) : null}
    </ButtonComponent>
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
