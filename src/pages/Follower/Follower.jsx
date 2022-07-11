import React from 'react';
import FollowList from '../../components/FollowList/FollowList';
import styled from 'styled-components';
import FollowList from '../../components/FollowList/FollowList';
import TabMenu from '../../components/TabMenu/TabMenu';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';

export default function Follower() {
  return (
    <>

      <TopMenuBar menuText="Followers"></TopMenuBar>
      <FollowList></FollowList>
      <TabMenu></TabMenu>
    </>
  );
}
