import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import MoreButton from '../../Button/MoreButton';

export default function PostComment() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { commentList } = useSelector((state) => state.PostInfoReducer);

  useEffect(() => {
    getComment();
  }, []);

  const getComment = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/post/${postId}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      console.log(res);
      const commentList = res.data.comments;
      dispatch({
        type: 'GET_COMMENT',
        commentList,
      });
    } catch (error) {
      console.log(error);
      if (error.response.data.message === '존재하지 않는 게시글입니다.') {
        alert('존재하지 않는 게시글입니다.');
      }
    }
  };

  function timeCalc(date) {
    const start = new Date(date);
    const end = new Date();
    const diff = end - start;
    const times = [
      { time: '분', milliSeconds: 1000 * 60 },
      { time: '시간', milliSeconds: 1000 * 60 * 60 },
      { time: '일', milliSeconds: 1000 * 60 * 60 * 24 },
      { time: '개월', milliSeconds: 1000 * 60 * 60 * 24 * 30 },
      { time: '년', milliSeconds: 1000 * 60 * 60 * 24 * 365 },
    ].reverse();

    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);

      if (betweenTime > 0) {
        return `${betweenTime}${value.time} 전`;
      }
    }

    return '방금 전';
  }

  return (
    <CommentList>
      {commentList &&
        commentList.map((comment) => (
          <CommentItem key={comment.id}>
            <CommentProfile>
              <ProfileImg src={comment.author.image} alt="댓글 프로필 이미지" />
              <CommentName>{comment.author.username}</CommentName>
              <CommentDate>· {timeCalc(comment.createdAt)}</CommentDate>
              <MoreButton size="large" commentAccount={comment.author.accountname} />
            </CommentProfile>
            <CommentText>{comment.content}</CommentText>
          </CommentItem>
        ))}
    </CommentList>
  );
}

const CommentList = styled.ul`
  padding: 20px 16px;
`;

const CommentItem = styled.li`
  margin-bottom: 16px;
  &:last-child {
    padding-bottom: 43px;
  }
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
  overflow: hidden;
  object-fit: cover;
  box-sizing: border-box;
`;
