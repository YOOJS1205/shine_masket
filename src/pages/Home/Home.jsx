import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Loading from '../../components/Loading/Loading';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Button from '../../components/Button/Button';
import MainImg from '../../assets/images/symbol-logo-gray.png';
import HomeFeed from './HomeFeed';
import { Link } from 'react-router-dom';
export default function Test() {
  const [postList, setPostList] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    (async function getPost() {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const res = await axios.get(`https://api.mandarin.weniv.co.kr/post/feed`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
          },
        });
        setPostList(res.data.posts);
        setIsRendered(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {isRendered ? (
        <>
          <TopMenuBar
            homeText="샤인마스켓 피드"
            searchBtn="true"
            preDisplay="none"
            modalDisplay="none"
          />
          {postList.length > 0 ? (
            <HomeFeed postList={postList} />
          ) : (
            <Main>
              <MainWrap>
                <Img src={MainImg} />
                <p>유저를 검색해 팔로우 해보세요!</p>
                <Link to="/search">
                  <Button size="medium" buttonText="검색하기" isActive={false} />
                </Link>
              </MainWrap>
            </Main>
          )}
          <TabMenu />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

const Main = styled.main`
  position: absolute;
  top: 40%;
  bottom: 0;
  left: 0;
  right: 0;
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #767676;
  }
`;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const Img = styled.img``;
