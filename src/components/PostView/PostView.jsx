import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PostProfile from './PostProfile/PostProfile';
import HeartIcon from '../../assets/icon/icon-heart.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';

export default function PostView() {
  const history = useHistory();
  const { postList, userAccount } = useSelector((state) => ({
    postList: state.PostInfoReducer.postList,
    userAccount: state.PostInfoReducer.userAccount,
  }));

  useEffect(() => {
    getPost();
  });

  const imgErrorHandler = (e) => {
    const target = e.target.parentNode.parentNode;
    target.style.display = 'none';
  };

  const getPost = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/post/${userAccount}/userpost`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
      if (error.response.data.message === '존재하지 않는 게시글입니다.') {
        alert('존재하지 않는 게시글입니다.');
      }
    }
  };

  return (
    <>
      {postList.post.map((post) => (
        <Container key={post.id}>
          <h1 className="ir">게시글 댓글 페이지</h1>
          <PostProfile
            postId={post.id}
            userName={post.author.username}
            userAccount={post.author.accountname}
            userImage={post.author.image}
          />
          <PostContainer>
            <PostText>{post.content}</PostText>
            <ImageContainer
              style={
                post.image < 1
                  ? {
                      display: 'none',
                    }
                  : {
                      display: 'flex',
                    }
              }
            >
              <ul key={post.id}>
                <Img
                  style={
                    post.image.length > 1
                      ? {
                          minWidth: '168px',
                          minHeight: '126px',
                          backgroundImage: `url(${post.image})`,
                        }
                      : {
                          minWidth: '304px',
                          minHeight: '228px',
                          backgroundImage: `url(${post.image})`,
                        }
                  }
                  onError={imgErrorHandler}
                />
              </ul>
            </ImageContainer>
          </PostContainer>
          <ButtonContainer>
            <LikeBtn>
              <LikeCount>{post.heartCount}</LikeCount>
            </LikeBtn>
            <CommentBtn onClick={() => history.push(`/post/${post.id}`)}>
              <CommentCount>{post.commentCount}</CommentCount>
            </CommentBtn>
          </ButtonContainer>
          <Date>
            {post.createdAt.split('-')[0] +
              '년 ' +
              post.createdAt.split('-')[1] +
              '월 ' +
              post.createdAt.split('-')[2].split('T')[0] +
              '일'}
          </Date>
        </Container>
      ))}
    </>
  );
}

const Container = styled.section`
  padding: 20px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;

  background-color: #fff;
`;

const PostContainer = styled.div`
  max-width: 358px;
  margin-bottom: 14.7px;
  padding: 12px 0px 0px 54px;
  box-sizing: border-box;
`;

const PostText = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    overflow: scroll;
  }
`;

const Img = styled.li`
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  padding-left: 54px;
  vertical-align: baseline;
`;

const LikeBtn = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 30px;
  background-image: url(${HeartIcon});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
`;

const CommentBtn = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${CommentIcon});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
`;

const LikeCount = styled.span`
  padding-left: 27px;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  color: #767676;
`;

const CommentCount = styled.span`
  padding-left: 27px;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  color: #767676;
`;

const Date = styled.p`
  margin-top: 18.7px;
  padding-left: 54px;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  color: #767676;
`;
