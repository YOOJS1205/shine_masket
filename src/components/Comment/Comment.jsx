import React from 'react';
import styled from 'styled-components';
import MoreButton from '../Button/MoreButton';
import BasicProfileImg from '../../assets/images/basic-profile-img.png';

export default function PostComment() {
  return (
    <CommentList>
      <CommentItem>
        <CommentProfile>
          <ProfileImg src={BasicProfileImg} alt="댓글 프로필 이미지" />
          <CommentName>서귀포시 무슨 농장</CommentName>
          <CommentDate>· 5분 전</CommentDate>
          <MoreButton size="large" />
        </CommentProfile>
        <CommentText>게시글 답글 ~~ !! 최고최고</CommentText>
      </CommentItem>
    </CommentList>
  );
}

const CommentList = styled.ul`
  padding: 20px 16px;
`;

const CommentItem = styled.li`
  margin-bottom: 16px;
`;

const CommentProfile = styled.div`
  display: flex;
`;

const CommentName = styled.strong`
  margin: 6px 0 0 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const CommentDate = styled.span`
  margin: 8.5px 0 0 6px;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  color: #767676;
`;

const CommentText = styled.p`
  margin-left: 48px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #333;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
`;
