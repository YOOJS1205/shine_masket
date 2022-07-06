import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from '../ChatRoom/ChatModal';

import BasicProfileImg from '../../assets/images/basic-profile-img.png';
import LeftArrow from '../../assets/icon/icon-arrow-left.png';
import MoreIcon from '../../assets/icon/icon-more-vertical.png';
import MoreIconSmall from '../../assets/icon/s-icon-more-vertical.png';
import PostImg from '../../assets/images/post-img-example.png';
import HeartIcon from '../../assets/icon/icon-heart.png';
import CommentIcon from '../../assets/icon/icon-message-circle.png';

const Header = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 13px 12px 13px 16px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  background-color: white;
`;

const BackLink = styled(Link)`
  width: 22px;
  height: 22px;
  border: none;
  background: url(${LeftArrow});
  background-size: 22px 22px;
`;

const MoreBtn = styled.button`
  width: 22px;
  height: 22px;
  margin-left: auto;
  border: none;
  background: url(${MoreIcon});
  background-size: 22px 22px;
  background-repeat: no-repeat;
`;

const Container = styled.section`
  padding: 69px 16px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdbdb;
  overflow: scroll;
`;

const Profile = styled.div`
  display: flex;
  font-weight: 400;
  background-color: white;
  border: none;
  &::before {
    content: '';
    display: inline-block;
    background-image: url(${BasicProfileImg});
    background-size: 42px 42px;
    background-position: center;
    background-repeat: no-repeat;
    width: 42px;
    height: 42px;
    box-sizing: border-box;
  }
`;

const ProfileMoreBtn = styled.button`
  width: 18px;
  height: 18px;
  margin-left: auto;
  background: url(${MoreIconSmall});
  background-size: 18px 18px;
  background-repeat: no-repeat;
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
  margin-bottom: 14.73px;
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

const CommentList = styled.ul`
  padding: 20px 16px;
`;

const CommentItem = styled.li`
  margin-bottom: 16px;
`;

const CommentProfile = styled.div`
  display: flex;
`;

const CommentName = styled.strong`
  margin: 6px 0 0 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

const CommentDate = styled.span`
  margin: 8.5px 0 0 6px;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  color: #767676;
`;

const CommentText = styled.p`
  margin-left: 48px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #333;
`;

const UploadComment = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  padding: 13px 16px 12px;
  border-top: 1px solid #dbdbdb;
  box-sizing: border-box;
  background-color: white;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
`;

const Input = styled.input`
  flex-grow: 1;
  margin: 0 18px;
  padding: 10px 0 8px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  &:focus {
    outline: none;
    color: black;
  }
  &::placeholder {
    color: #c4c4c4;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const SendBtn = styled.button`
  margin-left: auto;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  background-color: transparent;
  color: ${(props) => (props.isEmpty ? 'var(--color-enabled)' : '#c4c4c4')};
`;

export default function Post() {
  const [modalBox, setModalBox] = useState(false);
  const [chatText, setChatText] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const onChange = (e) => {
    setChatText(e.target.value);
  };

  useEffect(() => {
    if (chatText) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [chatText]);

  return (
    <>
      <Header>
        <BackLink to="/my-profile"></BackLink>
        <MoreBtn
          onClick={() => {
            setModalBox(!modalBox);
          }}
        ></MoreBtn>
      </Header>

      <Container>
        <h1 className="ir">게시글</h1>
        <Profile>
          <TextContainer>
            <UserName>애월읍 위니브 감귤농장</UserName>
            <UserId>@ weniv_Mandarin</UserId>
          </TextContainer>
          <ProfileMoreBtn
            onClick={() => {
              setModalBox(!modalBox);
            }}
          ></ProfileMoreBtn>
        </Profile>
        <PostContainer>
          <PostText>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </PostText>
          <Img src={PostImg} />
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
      <CommentList>
        <CommentItem>
          <CommentProfile>
            <ProfileImg src={BasicProfileImg} />
            <CommentName>서귀포시 무슨 농장</CommentName>
            <CommentDate>· 5분 전</CommentDate>
            <MoreBtn
              onClick={() => {
                setModalBox(!modalBox);
              }}
            ></MoreBtn>
          </CommentProfile>
          <CommentText>게시글 답글 ~~ !! 최고최고</CommentText>
        </CommentItem>
      </CommentList>
      <UploadComment>
        <ProfileImg src={BasicProfileImg} />
        <label htmlFor="comment-text" className="ir">
          메시지 입력창
        </label>
        <Input
          type="text"
          id="comment-text"
          placeholder="댓글 입력하기..."
          onChange={onChange}
        />
        <SendBtn type="button" isEmpty={isEmpty}>
          게시
        </SendBtn>
      </UploadComment>
      {modalBox && <Modal />}
    </>
  );
}
