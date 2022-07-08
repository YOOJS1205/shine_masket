import React from 'react';
import styled from 'styled-components';
import LeftArrow from '../../assets/icon/icon-arrow-left.png';
import Button from '../Button/Button';

export default function TopMenuBar({ saveButton }) {
  return (
    <Container>
      <PreviousBtn>
        <PrevioudBtnImg src={LeftArrow} />
      </PreviousBtn>
      {saveButton ? <Button buttonText="저장" size="medium-small" /> : null}
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
  padding: 8px 20px;
`;

const PreviousBtn = styled.button``;

const PrevioudBtnImg = styled.img`
  vertical-align: -4px;
  padding: 5px 0;
`;
