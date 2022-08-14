import React, { memo } from 'react';
import styled from 'styled-components';

export default memo(function Title({ title }) {
  return <Subject>{title}</Subject>;
});

const Subject = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  margin-top: 54px;
`;
