import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import axios from 'axios';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';

export default function Join() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [joinId, setJoinId] = useState('');
  const [joinPassword, setJoinPassword] = useState('');
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [passwordAvailable, setPasswordAvailable] = useState(true);
  const [isUser, setIsUser] = useState(false);

  // 이메일 값이 변경되면 가입된 고객인가에 대한 불리언 값 false로 초기화
  useEffect(() => {
    setIsUser(false);
  }, [joinId]);

  // Form(자식 컴포넌트)에서 id, password 값 props로 받아오기
  const getJoinInfo = (id, password) => {
    useEffect(() => {
      setJoinId(id);
      setJoinPassword(password);
    }, [id, password]);
  };

  // focus 잃으면 이메일, 비밀번호 유효성 검사 진행
  const checkIsAvailable = () => {
    const email = joinId;
    const password = joinPassword;
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(email)) {
      setEmailAvailable(true);
    } else {
      setEmailAvailable(false);
    }

    if (password.length >= 6) {
      setPasswordAvailable(true);
    } else {
      setPasswordAvailable(false);
    }
  };

  // 다음 클릭 버튼
  // 기능 1. 이메일 검증 API 통신 (서버에 가입 이메일 정보 보내기)
  // 기능 2. 가입된 이메일 주소면? => 다시, 사용 가능하면 Redux에 ID, PW 데이터 담고 프로필 설정 페이지로 이동
  const onClickJoin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://mandarin.api.weniv.co.kr/user/emailvalid',
        {
          user: {
            email: joinId,
          },
        }
      );
      console.log(res.data.message);

      if (res.data.message === '이미 가입된 이메일 주소 입니다.') {
        setIsUser(true);
      } else if (
        res.data.message === '사용 가능한 이메일 입니다.' &&
        emailAvailable
      ) {
        const registerId = joinId;
        const registerPassword = joinPassword;

        dispatch({ type: 'JOIN', registerId, registerPassword });
        history.push('/join/profile');
      }
      console.log(joinId, joinPassword, isUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Title title="이메일로 회원가입" />
      <Form
        buttonText="다음"
        getJoinInfo={getJoinInfo}
        emailAvailable={emailAvailable}
        passwordAvailable={passwordAvailable}
        isUser={isUser}
        onClick={onClickJoin}
        onBlur={checkIsAvailable}
      />
    </div>
  );
}
