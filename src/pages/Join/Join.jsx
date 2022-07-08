import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';

export default function Join() {
  const history = useHistory();

  const [joinId, setJoinId] = useState('');
  const [joinPassword, setJoinPassword] = useState('');
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [passwordAvailable, setPasswordAvailable] = useState(true);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    setIsUser(false);
  }, [joinId]);

  const getJoinInfo = (id, password) => {
    useEffect(() => {
      setJoinId(id);
      setJoinPassword(password);
    }, [id, password]);
  };

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
