import React from 'react';
import styled from 'styled-components';
import Profile from '../../components/Profile/Profile';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PostCard from '../../components/PostCard/PostCard';
import SaleProduct from '../../components/SaleProduct/SaleProduct';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function UserProfile() {
  const [productList, setProductList] = useState([]);

  const { UserName, UserAccount, UserIntro, UserImage, UserFollowerCount, UserFollowingCount } =
    useSelector((state) => state.UserInfoReducer);

  useEffect(() => {
    (async function getProduct() {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const res = await axios.get(`https://mandarin.api.weniv.co.kr/product/${UserAccount}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json',
          },
        });

        // console.log(res.data.product);
        setProductList(res.data.product);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <TopMenuBar />
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
  min-height: 1000px;
  overflow: hidden;

  background-color: #f2f2f2;
`;
