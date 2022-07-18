import React from 'react';
import styled, { css } from 'styled-components';

export default function Button({ buttonText, isEmpty, onClick, size, className, active }) {
  return (
    <ButtonComponent
      isEmpty={isEmpty}
      onClick={onClick}
      disabled={isEmpty ? 'disabled' : null}
      size={size}
      className={className}
      active={active}
    >
      {buttonText}
    </ButtonComponent>
  );
}

const ButtonComponent = styled.button`
  background-color: ${(props) =>
    props.isEmpty ? 'var(--color-enabled)' : 'var(--color-enabled-dark)'};
  color: #ffffff;
  border: none;

  ${(props) =>
    props.active &&
    css`
      color: #767676;
      background-color: var(--color-active);
      border: 1px solid #dbdbdb;
    `}

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
  font-weight: 500;
  font-size: ${(props) => (props.size === 'small' ? '12px' : '14px')};
  line-height: ${(props) => (props.size === 'small' ? '15px' : '18px')};
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
