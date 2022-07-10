import React from 'react';
import styled from 'styled-components';

export default function Button({
  buttonText,
  isEmpty,
  onClick,
  size,
  buttonImg,
}) {
  return (
    <ButtonComponent
      isEmpty={isEmpty}
      onClick={onClick}
      disabled={isEmpty ? 'disabled' : null}
      size={size}
    >
      {buttonText}
      <ButtonImg src={buttonImg} />
    </ButtonComponent>
  );
}

const ButtonComponent = styled.button`
  background-color: ${(props) =>
    props.isEmpty ? 'var(--color-enabled)' : 'var(--color-enabled-dark)'};
  color: #ffffff;
  border-radius: 44px;
  width: 100%;
  width: ${(props) =>
    props.size === 'large'
      ? '100%'
      : props.size === 'medium'
      ? '120px'
      : props.size === 'medium-small'
      ? '90px'
      : props.size === 'small'
      ? '56px'
      : props.size === '100'
      ? '100px'
      : props.size === '34'
      ? '34px'
      : null};
  border: none;
  font-weight: 500;
  font-size: ${(props) => (props.size === 'small' ? '12px' : '14px')};
  line-height: 18px;
  padding: ${(props) =>
    props.size === 'large'
      ? '13px 0'
      : props.size === 'medium'
      ? '8px 0'
      : props.size === 'medium-small'
      ? '7px 0'
      : props.size === 'small'
      ? '7px 0'
      : props.size === '100'
      ? '8px 0'
      : null};
`;

const ButtonImg = styled.img``;
