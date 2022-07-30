import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import PostProfile from './PostProfile/PostProfile';
import HeartIcon from '../../assets/icon/icon-heart.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';

export default function PostView() {
  const { content, date, postImages, heartCount, commentCount, userName, userImage, userAccount } =
    useSelector((state) => state.PostInfoReducer);

  const history = useHistory();
  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    getPost();
  }, [postId]);

  const imgErrorHandler = (e) => {
    const target = e.target.parentNode.parentNode;
    target.style.display = 'none';
  };

  const getPost = async (
    userName,
    userAccount,
    userImage,
    content,
    date,
    postImages,
    heartCount,
    commentCount
  ) => {
    try {
      const token = localStorage.getItem('accessToken');
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      userName = res.data.post.author.username;
      userAccount = res.data.post.author.accountname;
      userImage = res.data.post.author.image;
      content = res.data.post.content;
      date = res.data.post.createdAt;
      postImages = res.data.post.image;
      heartCount = res.data.post.heartCount;
      commentCount = res.data.post.commentCount;

      dispatch({
        type: 'READ_POST',
        userName,
        userAccount,
        userImage,
        content,
        date,
        postImages,
        heartCount,
        commentCount,
      });
    } catch (error) {
      console.log(error);
      if (error.response.data.message === '존재하지 않는 게시글입니다.') {
        alert('존재하지 않는 게시글입니다.');
      }
    }
  };

  return (
    <Container>
      <h1 className="ir">게시글 댓글 페이지</h1>
      <PostProfile
        postId={postId}
        userName={userName}
        userAccount={userAccount}
        userImage={userImage}
      />
      <PostContainer>
        {content.split('\n').map((i, key) => {
          return <PostText key={key}>{i}</PostText>;
        })}
        <ImageContainer
          style={
            postImages < 1
              ? {
                  display: 'none',
                }
              : {
                  display: 'flex',
                }
          }
        >
          {postImages &&
            postImages.map((image) => {
              return (
                <ul key={image}>
                  <Img
                    style={
                      postImages.length > 1
                        ? {
                            minWidth: '168px',
                            minHeight: '126px',
                            backgroundImage: `url(${image})`,
                          }
                        : {
                            minWidth: '304px',
                            minHeight: '228px',
                            backgroundImage: `url(${image})`,
                          }
                    }
                    onError={imgErrorHandler}
                  />
                </ul>
              );
            })}
        </ImageContainer>
      </PostContainer>
      <ButtonContainer>
        <LikeBtn>
          <LikeCount>{heartCount}</LikeCount>
        </LikeBtn>
        <CommentBtn onClick={() => history.push(`/post/${postId}`)}>
          <CommentCount>{commentCount}</CommentCount>
        </CommentBtn>
      </ButtonContainer>
      <Date>{date}</Date>
    </Container>
  );
}

const Container = styled.section`
  padding: 20px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
`;

const PostContainer = styled.div`
  max-width: 358px;
  margin-bottom: 14.7px;
  padding: 12px 0px 0px 54px;
  box-sizing: border-box;
`;

const PostText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
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
  margin-top: 16px;
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
