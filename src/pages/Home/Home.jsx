import React from 'react';
import styled from 'styled-components';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import MoreButton from '../../components/Button/MoreButton'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [postList, setPostList] = useState([]);
  const { OtherUserInfo, userAccount } = useSelector((state) => ({
    OtherUserInfo: state.OtherUserInfoReducer.OtherUserInfo,
    userAccount: state.PostInfoReducer.userAccount,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    (async function getPost (){
      try {
        const accessToken = localStorage.getItem('accessToken');
        const res = await axios.get(
          `https://mandarin.api.weniv.co.kr/post/feed`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-type': 'application/json',
            },
          }
        );
        setPostList(res.data);
        dispatch({ type: 'FOLLWER', OtherUserInfo });
        
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  
  
  console.log(postList);
  // const imgArr =
  //   postList.posts[0].image.split(',');
  
  // console.log(imgArr[0]);

  
  

  
  return (
    <>
      <TopMenuBar
        homeText="샤인마스켓 피드"
        searchBtn="true"
        preDisplay="none"
        modalDisplay="none"
      />
      
      <FeedWrap>
        <h1 className='ir'>메인화면 피드페이지입니다</h1>
        {postList.posts.map((post)=>{
          <MainWrap key={post.author._id}>
            <Aside key={post.author._id}>
              <Img src={post.author.image} />
            </Aside>
            <Article>
              <h2 key={post.author._id}></h2>
              <h3 key={post.author._id}>@ {post.posts.author.accountname}</h3>
              <article key={post.author._id}>
              {post.content}
              </article>
              <Link to="/post/${post.id}">
                {/* <img src={imgArr[0]}/> */}
              </Link>
              <ul>
                {/* <li><img src={IconHeart}/></li>
                <li>{postList.posts[0].heartCount}</li>
                <li><img src={IconMessage}/></li>
                <li>{postList.posts[0].commentCount}</li> */}
              </ul>
              <time>2020년 10월 21일</time>
              <MoreButton size={'small'}/>
              </Article> 
          </MainWrap>
          })}
      </FeedWrap>


      <TabMenu />
    </>
  );
}


const FeedWrap = styled.main`
  width: 358px;
  margin: 20px auto;
  margin-bottom: 80px;
  padding-bottom: 20px;
`

const MainWrap = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  position: relative;
  &::after {
    clear:both; content:''; display:block;
  }
`
const Aside = styled.aside`
  float:left;
  width: 10%;
  `
const Img = styled.img`
  width: 100%;
  `
const Article = styled.article`
  float: right;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left:5%;
  width: 85%;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  word-break: keep-all;  
  >h3 {
    margin-top: -14px;
    font-size: 12px;
    color: #767676;
  }
  >article {
  }
  >img {
  }
  >ul {
    display:flex;
    gap: 6px;
    >li {
      width: 15px;
      &:nth-child(2) {margin-right: 10px;}
      >img {
        width: 100%;
      }
    }
  }
  >time {
    font-size: 10px;
    color: #767676;
  }
  >button {
    position: absolute;
    top:0px;
    right: 0px;
  }
`