import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

import LeftArrow from '../../assets/icon/icon-arrow-left.png';
import MoreButton from '../Button/MoreButton';

export default function TopMenuBar({
  saveButton,
  moreButton,
  moreButtonSmall,
  menuText,
  className,
  isEmpty,
  onClick,
}) {
  const history = useHistory();

  return (
    <Container>
      <PreviousBtn onClick={() => history.goBack()}>
        <PrevioudBtnImg
          src={LeftArrow}
          alt="이전 페이지로 돌아가는 버튼 이미지"
        />
      </PreviousBtn>
      <MenuText>{menuText}</MenuText>
      {saveButton ? (
        <Button
          buttonText="저장"
          size="medium-small"
          isEmpty={isEmpty}
          onClick={onClick}
        />
      ) : null}
      {moreButton ? <MoreButton size="large" /> : null}
      {moreButtonSmall ? <MoreButton size="small" /> : null}
    </Container>
  );
}

const Container = styled.section`
  display: flex;

  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  padding: 8px 20px;
`;

const PreviousBtn = styled.button`
  width: 22px;
  border: none;
`;

const PrevioudBtnImg = styled.img`
  vertical-align: -4px;
  padding: 5px 0;
`;

const MenuText = styled.h1`
  margin-right: auto;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
