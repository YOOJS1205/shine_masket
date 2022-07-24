import React from 'react';
import FollowList from '../../components/FollowList/FollowList';
import styled from 'styled-components';
import TabMenu from '../../components/TabMenu/TabMenu';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';

export default function Following() {
  return (
    <>
      <TopMenuBar menuText="Followings"></TopMenuBar>
      <FollowList></FollowList>
      <TabMenu></TabMenu>
    </>
  );
}
