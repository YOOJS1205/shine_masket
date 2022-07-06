import React from 'react';
import styled from 'styled-components';

export default function Button({ buttonText, isEmpty, onClick }) {
  return (
    <ButtonComponent
      isEmpty={isEmpty}
      onClick={onClick}
      disabled={isEmpty ? 'disabled' : null}
    >
      {buttonText}
    </ButtonComponent>
  );
}

const ButtonComponent = styled.button`
  background-color: ${(props) =>
    props.isEmpty ? 'var(--color-enabled)' : 'var(--color-enabled-dark)'};
  color: #ffffff;
  border-radius: 44px;
  width: 100%;
  border: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-top: 14px;
  padding: 13px 0;
`;
