import React, { memo } from 'react';
import styled from 'styled-components';

interface IProps {
  TitleText: string;
}

export default memo(function InputTitle({ TitleText }: IProps) {
  return <Title>{TitleText}</Title>;
});

const Title = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #767676;
`;
