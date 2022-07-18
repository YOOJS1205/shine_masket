import React from 'react';
import styled from 'styled-components';
import PostTextBar from '../../components/PostTextBar/PostTextBar';
import Comment from '../../components/Comment/Comment';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import MoreButton from '../../components/Button/MoreButton';

import BasicProfileImg from '../../assets/images/basic-profile-img.png';
import PostImg from '../../assets/images/post-img-example.png';
import HeartIcon from '../../assets/icon/icon-heart.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';

export default function Post() {
  return (
    <>
      <TopMenuBar moreButton="true" />
      <Container>
        <h1 className="ir">게시글 댓글 페이지</h1>
        <Profile>
          <ProfileImg src={BasicProfileImg} alt="사용자 프로필 이미지"></ProfileImg>
          <TextContainer>
            <UserName>애월읍 위니브 감귤농장</UserName>
            <UserId>@ weniv_Mandarin</UserId>
          </TextContainer>
          <MoreButton size="small" />
        </Profile>
        <PostContainer>
          <PostText>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈
            따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
          </PostText>
          <Img src={PostImg} alt="본문 이미지" />
        </PostContainer>
        <ButtonContainer>
          <LikeBtn>
            <LikeCount>58</LikeCount>
          </LikeBtn>
          <CommentBtn>
            <CommentCount>12</CommentCount>
          </CommentBtn>
        </ButtonContainer>
        <Date>2020년 10월 21일</Date>
      </Container>
      <Comment />
      <PostTextBar name="post" placeholder="댓글 입력하기..." buttonText="게시" />
    </>
  );
}

const Container = styled.section`
  padding: 20px 16px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
`;

const Profile = styled.div`
  display: flex;
  font-weight: 400;
  background-color: white;
  border: none;
`;

const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border: 0.5px solid #dbdbdb;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  margin-top: 4px;
  margin-left: 12px;
`;

const UserName = styled.strong`
  display: block;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: black;
`;

const UserId = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: #767676;
`;

const PostContainer = styled.div`
  max-width: 358px;
  padding: 12px 0px 0px 54px;
  box-sizing: border-box;
`;

const PostText = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

const Img = styled.img`
  display: block;
  width: 304px;
  margin-bottom: 14.7px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  padding-left: 54px;
  vertical-align: baseline;
`;

const LikeBtn = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 40px;
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
