import React, { useState } from 'react';
import styled from 'styled-components';
import TabMenu from '../../components/TabMenu/TabMenu';
import MoreButton from '../../components/Button/MoreButton';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import IconHeart from '../../assets/icon/icon-heart.png';
import IconMessage from '../../assets/icon/icon-message-circle.png';

export default function Home({ postList }) {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <FeedWrap>
        <h1 className="ir">메인화면 피드페이지입니다</h1>
        {postList.map((post) => (
          <MainWrap key={post.createdAt}>
            <h1 className="ir">개별 포스트 입니다</h1>
            <ProfileWrap>
              <h1 className="ir">프로필 이미지</h1>
              <Aside
                src={post.author.image}
                onClick={() => {
                  const OtherUserProfileInfo = post.author;
                  dispatch({ type: 'PROFILE', OtherUserProfileInfo });
                  history.push({
                    pathname: `/your-profile/${post.author.accountname}`,
                    state: { state: post.author },
                  });
                }}
              />
              <UserName
                onClick={() => {
                  const OtherUserProfileInfo = post.author;
                  dispatch({ type: 'PROFILE', OtherUserProfileInfo });
                  history.push({
                    pathname: `/your-profile/${post.author.accountname}`,
                    state: { state: post.author },
                  });
                }}
              >
                <h1 className="ir">유저 아이디 및 닉네임입니다.</h1>
                <h2>{post.author.username}</h2>
                <h3>@ {post.author.accountname}</h3>
              </UserName>
            </ProfileWrap>
            <Article>
              <article>{post.content}</article>
              <Content
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
                {post.image &&
                  post.image.split(',').map((image) => {
                    const postImage = post.image.split(',');
                    return (
                      <li key={image}>
                        <ContImg
                          style={
                            postImage.length > 1
                              ? {
                                  width: '100%',
                                  paddingTop: '100%',
                                  backgroundImage: `url(${image})`,
                                }
                              : {
                                  width: '100%',
                                  paddingTop: '100%',
                                  backgroundImage: `url(${image})`,
                                }
                          }
                        />
                      </li>
                    );
                  })}
              </Content>
              <ReactionBtn>
                <li>
                  <img src={IconHeart} />
                </li>
                <li>{post.heartCount}</li>
                <li onClick={() => history.push(`/post/${post.id}`)}>
                  <img src={IconMessage} />
                </li>
                <li>{post.commentCount}</li>
              </ReactionBtn>
              <time>
                {post.createdAt.split('-')[0] +
                  '년 ' +
                  post.createdAt.split('-')[1] +
                  '월 ' +
                  post.createdAt.split('-')[2].split('T')[0] +
                  '일'}
              </time>
              <MoreButton size={'small'} />
            </Article>
          </MainWrap>
        ))}
      </FeedWrap>

      <TabMenu />
    </>
  );
}
const FeedWrap = styled.main`
  max-width: 720px;
  margin: 0px auto;
  margin-bottom: 20px;
  padding: 20px;
`;
const MainWrap = styled.section`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  word-break: keep-all;
  &::before {
    display: block;
    content: '';
    height: 1px;
    position: absolute;
    top: -20px;
    left: 0px;
    right: 0px;
    background: #ddd;
  }
  &:nth-of-type(1)::before {
    display: none;
  }
`;
const ProfileWrap = styled.section`
  display: flex;
`;
const UserName = styled.article`
  padding-top: 5px;
  margin-left: 1rem;
  cursor: pointer;
  > h2 {
    font-size: 16px;
    font-weight: bold;
  }
  > h3 {
    font-size: 12px;
    color: #767676;
  }
`;
const Aside = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
  box-sizing: border-box;
  cursor: pointer;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 3.5rem;
  width: 85%;

  > a {
    > img {
      width: 100%;
      border-radius: 20px;
    }
  }
  > time {
    font-size: 10px;
    color: #767676;
  }
  > button {
    position: absolute;
    top: 0px;
    right: 0px;
  }
`;

const Content = styled.ul`
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  gap: 5%;
  > li {
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
  }
`;
const ContImg = styled.div`
  width: 100%;
  padding-top: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const ReactionBtn = styled.ul`
  display: flex;
  gap: 6px;
  color: #767676;
  > li {
    width: 15px;
    &:nth-child(2) {
      margin-right: 10px;
    }
    &:nth-child(3) {
      cursor: pointer;
    }
    img {
      width: 100%;
    }
  }
`;
