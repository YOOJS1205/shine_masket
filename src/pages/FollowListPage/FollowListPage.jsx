import React from 'react';
import FollowList from '../../components/FollowList/FollowList';
import TabMenu from '../../components/TabMenu/TabMenu';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';

export default function FollowListPage({ match }) {
  return (
    <>
      {match.path === '/profile/:accountname/follower' ? (
        <TopMenuBar menuText="Followers" />
      ) : (
        <TopMenuBar menuText="Followings" />
      )}

      <FollowList />
      <TabMenu />
    </>
  );
}
