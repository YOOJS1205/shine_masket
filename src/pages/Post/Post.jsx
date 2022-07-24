import React from 'react';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import PostView from '../../components/PostView/PostView';
import PostComment from '../../components/PostView/PostComment/PostComment';
import PostTextBar from '../../components/PostTextBar/PostTextBar';

export default function Post() {
  return (
    <>
      <TopMenuBar moreButton="true" />
      <PostView />
      <PostComment />
      <PostTextBar name="post" placeholder="댓글 입력하기..." buttonText="게시" />
    </>
  );
}
