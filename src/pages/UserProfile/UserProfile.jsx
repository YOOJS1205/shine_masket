import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../../components/Profile/Profile';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Button from '../../components/Button/Button';
import PostCard from '../../components/PostCard/PostCard';
import SaleProduct from '../../components/SaleProduct/SaleProduct';
import Loading from '../../components/Loading/Loading';

export default function UserProfile() {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

  const { UserName, UserAccount, UserIntro, UserImage, UserFollowerCount, UserFollowingCount } =
    useSelector((state) => state.UserInfoReducer);

  useEffect(() => {
    (async function getProductAndPost() {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const res = await axios.get(`https://api.mandarin.weniv.co.kr/product/${UserAccount}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
          },
        });

        setProductList(res.data.product);
      } catch (error) {
        console.error(error);
      }

      // 포스트 가져오기
      try {
        const accessToken = localStorage.getItem('accessToken');
        const res = await axios.get(
          `https://api.mandarin.weniv.co.kr/post/${UserAccount}/userpost`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-type': 'application/json',
            },
          }
        );

        const postList = res.data.post;
        dispatch({ type: 'GET_POST', postList });
      } catch (error) {
        console.log(error);
      }

      setIsRendered(true);
    })();
  }, []);

  return (
    <>
      {isRendered ? (
        <>
          <TopMenuBar moreButton={true} />
          <ProfileContainer>
            <Profile
              followersCount={UserFollowerCount}
              followingsCount={UserFollowingCount}
              userImage={UserImage}
              userName={UserName}
              userId={UserAccount}
              userIntroduction={UserIntro}
            >
              <MyProfileButton />
            </Profile>
            {productList.length !== 0 ? <SaleProduct productList={productList} /> : null}
            <PostCard />
          </ProfileContainer>
          <TabMenu />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

const MyProfileButton = () => {
  const history = useHistory();

  const { UserAccount } = useSelector((state) => ({
    UserAccount: state.UserInfoReducer.UserAccount,
  }));

  function goToAddProduct() {
    history.push(`/${UserAccount}/add-product`);
  }

  function goToProfileModify() {
    history.push(`/profile/${UserAccount}/modify`);
  }

  return (
    <>
      <Button onClick={goToProfileModify} isActive buttonText="프로필 수정" size="medium" />
      <Button onClick={goToAddProduct} isActive buttonText="상품 등록" size="100" />
    </>
  );
};

const ProfileContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  background-color: #f2f2f2;
  &::after {
    position: relative;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
  }
`;
