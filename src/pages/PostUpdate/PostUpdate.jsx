import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';
import ImageUploadIcon from '../../assets/icon/icon-image.png';
import RemoveIcon from '../../assets/icon/icon-delete.png';

export default function PostUpdate() {
  const { postImages } = useSelector((state) => state.PostInfoReducer);
  const { postId } = useParams();
  const { UserImage } = useSelector((state) => state.UserInfoReducer);

  const dispatch = useDispatch();
  const history = useHistory();
  const [isEmpty, setIsEmpty] = useState(true);
  const [updateText, setUpdateText] = useState('');
  const [updateImage, setUpdateImage] = useState([]);
  const textRef = useRef(null);

  const onChange = (e) => {
    setUpdateText(e.target.value);
  };

  useEffect(() => {
    if (updateText || updateImage.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [updateText, updateImage]);

  useEffect(() => {
    getPost(postId);
  }, [postId]);

  // textarea 높이 조절
  const handleResizeHeight = useCallback(() => {
    if (textRef === null || textRef.current === null) {
      return;
    }
    textRef.current.style.height = '5vh';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  // 수정 게시물 가지고 오기
  const getPost = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const res = await axios.get(`https://mandarin.api.weniv.co.kr/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      setUpdateText(res.data.post.content);
      setUpdateImage(res.data.post.image.split(','));
    } catch (error) {
      console.log(error);
      if (error.response.data.message === '존재하지 않는 게시글입니다.') {
        alert('존재하지 않는 게시글입니다.');
      }
      if (error.response.data.message === '잘못된 요청입니다. 로그인 정보를 확인하세요.') {
        alert('잘못된 요청입니다. 로그인 정보를 확인하세요.');
      }
    }
  };

  // 이미지 업로드
  const uploadFileImage = async (e) => {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      let formData = new FormData();
      formData.append('image', files[i]);
      const res = await axios.post('https://mandarin.api.weniv.co.kr/image/uploadfile', formData);
      updateImage.push(`https://mandarin.api.weniv.co.kr/${res.data.filename}`);
      console.log(res.data);
    }

    let imageURLlist = [...updateImage];

    if (imageURLlist.length > 3) {
      imageURLlist.push(files[0]);
      imageURLlist = imageURLlist.slice(0, 3);
      alert('첨부 가능 이미지 수는 최대 3장입니다.');
    }

    setUpdateImage(imageURLlist);
  };

  // 이미지 삭제
  const deleteFileImage = (id) => {
    setUpdateImage(updateImage.filter((_, index) => index !== id));
    URL.revokeObjectURL(updateImage);
  };

  // 업로드 버튼 동작
  const onClickUpload = async (e) => {
    e.preventDefault();
    try {
      const sendFileName = updateImage.join();
      const token = localStorage.getItem('accessToken');
      const res = await axios.put(
        `https://mandarin.api.weniv.co.kr/post/${postId}`,
        {
          post: {
            content: updateText,
            image: sendFileName,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        }
      );
      console.log(res.data);

      const userName = res.data.post.author.username;
      const userAccount = res.data.post.author.accountname;
      const userImage = res.data.post.author.image;
      const content = res.data.post.content;
      const date = res.data.post.createdAt;
      const postImages = res.data.post.image;

      dispatch({
        type: 'UPDATE',
        userName,
        userAccount,
        userImage,
        content,
        date,
        postId,
        postImages,
      });

      history.push(`/post/${postId}`);
    } catch (error) {
      console.log(error);
      if (error.response.data.message === '내용 또는 이미지를 입력해주세요.') {
        alert('내용 또는 이미지를 입력해 주세요.');
      }
      if (error.response.data.message === '잘못된 요청입니다. 로그인 정보를 확인하세요') {
        alert('본인이 작성한 게시글만 수정할 수 있습니다.');
      }
    }
  };

  return (
    <>
      <TopMenuBar uploadButton="true" isEmpty={isEmpty} onClick={onClickUpload} />
      <TextContainer>
        <h1 className="ir">게시글 입력 영역</h1>
        <label htmlFor="textArea" className="ir">
          게시글 입력하기
        </label>
        <ProfileImg src={UserImage} alt="사용자 프로필 이미지"></ProfileImg>
        <TextArea
          id="textArea"
          placeholder="게시글 입력하기..."
          ref={textRef}
          onInput={handleResizeHeight}
          onChange={onChange}
          value={updateText}
        ></TextArea>
        <FileLabel htmlFor="imgUpload">이미지 첨부하기</FileLabel>
        <FileInput
          type="file"
          id="imgUpload"
          multiple="multiple"
          accept="image/*"
          onChange={uploadFileImage}
        />
      </TextContainer>
      <ImgContainer
        style={
          updateImage < 1 || postImages < 1
            ? {
                display: 'none',
              }
            : {
                display: 'flex',
              }
        }
      >
        {updateImage.map((image, id) => (
          <ImgItem
            key={id}
            style={
              updateImage.length === 1
                ? {
                    minWidth: '304px',
                    minHeight: '228px',
                    backgroundImage: `url(${image})`,
                  }
                : {
                    minWidth: '168px',
                    minHeight: '126px',
                    backgroundImage: `url(${image})`,
                  }
            }
          >
            <RemoveBtn type="button" onClick={() => deleteFileImage(id)}>
              <span className="ir">이미지 삭제하기</span>
            </RemoveBtn>
          </ImgItem>
        ))}
      </ImgContainer>
    </>
  );
}

const TextContainer = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px 16px 0;
`;

const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  flex-grow: 1;
  margin-top: 10px;
  border: none;
  resize: none;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  font-weight: 400;
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

const ImgContainer = styled.ul`
  display: flex;
  min-height: 100px;
  margin: 16px 16px 16px 72px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImgItem = styled.li`
  position: relative;
  margin-right: 8px;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const RemoveBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 22px;
  width: 22px;
  background: url(${RemoveIcon}) no-repeat center / contain;
  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 1));
`;

const FileLabel = styled.label`
  position: fixed;
  right: 16px;
  bottom: 16px;
  border-radius: 50%;
  background-color: var(--color-enabled-dark);
  font-size: 0;
  z-index: 100;
  cursor: pointer;
  &::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
    background-image: url(${ImageUploadIcon});
    background-size: 28px 28px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const FileInput = styled.input`
  display: none;
`;
