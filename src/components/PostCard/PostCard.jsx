import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PostProfile from '../PostView/PostProfile/PostProfile';
import HeartIcon from '../../assets/icon/icon-heart.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';

export default function PostCard({ getPostList }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const { UserAccount } = useSelector((state) => state.UserInfoReducer);
  const { postList } = useSelector((state) => ({
    postList: state.PostInfoReducer.postList,
  }));

  useEffect(() => {
    getPost();
  }, []);

  getPostList(postList);

  const getPost = async () => {
    // 프로필 가져오기
    try {
      const accessToken = localStorage.getItem('accessToken');
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/profile/${UserAccount}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/json',
        },
      });

      const UserFollowing = res.data.profile.following;
      const UserFollower = res.data.profile.follower;
      const UserFollowerCount = res.data.profile.followerCount;
      const UserFollowingCount = res.data.profile.followingCount;

      dispatch({
        type: 'FOLLOW',
        UserFollowing,
        UserFollower,
        UserFollowerCount,
        UserFollowingCount,
      });
    } catch (error) {
      console.log(error);
    }

    // 포스트 가져오기
    try {
      const accessToken = localStorage.getItem('accessToken');
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/post/${UserAccount}/userpost`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/json',
        },
      });

      const postList = res.data;
      dispatch({ type: 'GET_POST', postList });
    } catch (error) {
      console.log(error);
    }

    // 상품 가져오기
    try {
      const accessToken = localStorage.getItem('accessToken');
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/product/${UserAccount}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/json',
        },
      });

      const productList = res.data.product;
      dispatch({ type: 'PRODUCT', productList });
    } catch (error) {
      console.log(error);
    }
  };

  const imgErrorHandler = (e) => {
    const target = e.target.parentNode.parentNode;
    target.style.display = 'none';
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
              {post.image.split(',') &&
                post.image.split(',').map((image) => {
                  const postImage = post.image.split(',');
                  return (
                    <ul key={image}>
                      <Img
                        style={
                          postImage.length > 1
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
  &:last-child {
    padding-bottom: 81px;
  }
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
