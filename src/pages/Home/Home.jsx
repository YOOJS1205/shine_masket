import React, { useState } from 'react';
import styled from 'styled-components';
import TabMenu from '../../components/TabMenu/TabMenu';
import MoreButton from '../../components/Button/MoreButton';
import { Link } from 'react-router-dom';
import IconHeart from '../../assets/icon/icon-heart.png';
import IconMessage from '../../assets/icon/icon-message-circle.png';
// import { useState } from 'react';

export default function Home({ postList }) {

// const [ imgArr, setImgArr ] = useState([]);
// const imagesArr = (props) => {
//   postList.posts.images
// }

  return (
    <>
      <FeedWrap>
        <h1 className="ir">메인화면 피드페이지입니다</h1>
        {postList.map((post) => (
          // setImgArr(post.image.split(','));
          <MainWrap key={post.author._id}>
            <Aside>
              <Img src={post.author.image} />
            </Aside>
            <Article>
              <h2>{post.author.username}</h2>
              <h3>@ {post.author.accountname}</h3>
              <article>{post.content}</article>
              <Link to="/post/${post.id}">
                <img src={post.image} />
              </Link>
              <ul>
                <li>
                  <img src={IconHeart} />
                </li>
                <li>{post.heartCount}</li>
                <li>
                  <img src={IconMessage} />
                </li>
                <li>{post.commentCount}</li>
              </ul>
              <time>{post.updatedAt}</time>
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
  width: 80%;
  margin: 20px auto;
  margin-bottom: 80px;
  padding-bottom: 20px;
`;

const MainWrap = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  &::before {
    display: block;
    content:'';
    height:1px;
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
    display:none;
  }
`;
const Aside = styled.aside`
  float: left;
  max-width: 10%;
`;
const Img = styled.img`
  width: 100%;
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
  > ul {
    display: flex;
    gap: 6px;
    > li {
      width: 15px;
      &:nth-child(2) {
        margin-right: 10px;
      }
      > img {
        width: 100%;
      }
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
