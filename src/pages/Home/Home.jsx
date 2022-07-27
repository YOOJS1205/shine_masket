import React, { useState } from 'react';
import styled from 'styled-components';
import TabMenu from '../../components/TabMenu/TabMenu';
import MoreButton from '../../components/Button/MoreButton';
import { Link, useHistory } from 'react-router-dom';
import IconHeart from '../../assets/icon/icon-heart.png';
import IconMessage from '../../assets/icon/icon-message-circle.png';
// import { useState } from 'react';

export default function Home({ postList }) {
  const history = useHistory();
  return (
    <>
      <FeedWrap>
        <h1 className="ir">메인화면 피드페이지입니다</h1>
        {postList.map((post) => (
          // setImgArr(post.image.split(','));
          <MainWrap key={post.author._id}>
            <Aside>
              <Link to={'/profile/' + post.author.accountname}>
                <Img src={post.author.image} />
              </Link>
            </Aside>
            <Article>
              <h2>{post.author.username}</h2>
              <h3>@ {post.author.accountname}</h3>
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
                {post.image.split(',') &&
                  post.image.split(',').map((image) => {
                    const postImage = post.image.split(',');
                    return (
                      <li key={image}>
                        <ContImg
                          style={
                            postImage.length > 1
                              ? {
                                  minWidth: '168px',
                                  minHeight: '126px',
                                  backgroundImage: `url(${image})`,
                                }
                              : {
                                  minWidth: '300px',
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

const MainWrap = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
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
  &::after {
    clear: both;
    content: '';
    display: block;
  }
  &:nth-of-type(1)::before {
    display: none;
  }
`;
const Aside = styled.aside`
  float: left;
  width: 10%;
  padding-top: 10%;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;
const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  background-size: contain;
  transform: translate(-50%, -50%);
`;
const Article = styled.article`
  float: right;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 5%;
  width: 85%;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  word-break: keep-all;
  > h3 {
    margin-top: -14px;
    font-size: 12px;
    color: #767676;
  }
  > article {
  }
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
  > li {
    border-radius: 20px;
    overflow: hidden;
  }
`;
const ContImg = styled.div`
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
    img {
      width: 100%;
    }
  }
`;
