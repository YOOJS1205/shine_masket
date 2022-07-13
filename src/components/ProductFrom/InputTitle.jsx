import React from 'react';
import styled from 'styled-components';

export default function InputTitle({ TitleText }) {
  return <Title>{TitleText}</Title>;
}

const Title = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
`;
