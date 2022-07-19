import React from 'react';
import styled from 'styled-components';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Button from '../../components/Button/Button';

export default function Search() {
  return (
    <>
      <TopMenuBar searchDisplay={true} />
      <TabMenu/>
    </>
  );
}