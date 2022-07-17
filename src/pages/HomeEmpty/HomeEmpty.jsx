import React from 'react';
import styled from 'styled-components';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Button from '../../components/Button/Button';

import MainImg from '../../assets/images/symbol-logo-gray.png';

export default function Test() {
  return (
    <>
      <TopMenuBar homeText="샤인마스켓 피드" searchBtn="true" display="none" />
      <Main>
        <MainWrap>
          <Img src={MainImg} />
          <p>유저를 검색해 팔로우 해보세요!</p>
          <Button size="medium" buttonText="검색하기" />
        </MainWrap>
      </Main>
      <TabMenu />
    </>
  );
}

const Main = styled.main`
  position: absolute;
  top: 40%;
  bottom: 0;
  left: 0;
  right: 0;
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #767676;
  }
`;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const Img = styled.img``;
