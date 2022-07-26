import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';
import LeftArrow from '../../assets/icon/icon-arrow-left.png';
import Search from '../../assets/icon/icon-search.png';
import MoreButton from '../Button/MoreButton';
import { useSelector } from 'react-redux';

export default function TopMenuBar({
  saveButton,
  uploadButton,
  moreButton,
  moreButtonSmall,
  menuText,
  isEmpty,
  onClick,
  homeText,
  searchBtn,
  preDisplay,
  searchDisplay,
}) {
  const history = useHistory();
  const { postId } = useParams();
  const { UserAccount } = useSelector((state) => state.UserInfoReducer);

  return (
    <Container>
      <PreviousBtn
        onClick={
          location.pathname === `/post/${postId}`
            ? () => history.push(`/profile/${UserAccount}`)
            : () => history.goBack()
        }
        display={preDisplay}
      >
        <PrevioudBtnImg src={LeftArrow} alt="이전 페이지로 돌아가는 버튼 이미지" />
      </PreviousBtn>
      <SearchModal display={searchDisplay}>
        <label htmlFor="search_tit" className="ir">
          검색창입니다
        </label>
        <input id="search_tit" type="text" required placeholder="계정 검색" />
      </SearchModal>
      <MenuText>{menuText}</MenuText>
      <HomeText>{homeText}</HomeText>
      {saveButton ? (
        <Button buttonText="저장" size="medium-small" isEmpty={isEmpty} onClick={onClick} />
      ) : null}
      {uploadButton ? (
        <Button buttonText="업로드" size="medium-small" isEmpty={isEmpty} onClick={onClick} />
      ) : null}
      {moreButton ? <MoreButton size="large" /> : null}
      {moreButtonSmall ? <MoreButton size="small" /> : null}
      {searchBtn ? 
      <SearchButton> 
        <Link to="/search" />
      </SearchButton> : null}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  padding: 8px 20px;
`;

const PreviousBtn = styled.button`
  width: 22px;
  border: none;
  display: ${(props) =>
    props.display === 'none' ? 'none' : props.display === 'block' ? 'block' : null};
`;

const PrevioudBtnImg = styled.img`
  vertical-align: -4px;
  padding: 5px 0;
`;

const MenuText = styled.h1`
  margin-right: auto;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const HomeText = styled.h1`
  padding-left: 5px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  order: -1;
`;

const SearchButton = styled.p`
  margin-left: auto;
  background-image: url(${Search});
  width: 24px; 
  height: 24px;
  cursor: pointer;
  > a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const SearchModal = styled.fieldset`
  margin-left: 25px;
  width: 100%;
  display: ${(props) => (props.display ? 'block' : 'none')};
  > input {
    background-color: #f2f2f2;
    border: none;
    border-radius: 32px;
    width: 100%;
    padding: 8px 16px;
    box-sizing: border-box;
    font: 14px/14px 'Spoqa Han Sans Neo';
    color: #c4c4c4;
    letter-spacing: 0em;
  }
`;
