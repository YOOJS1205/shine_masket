import React, { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';

export default function Join() {
  const [joinId, setJoinId] = useState('');
  const [joinPassword, setJoinPassword] = useState('');

  const getJoinInfo = (id, password) => {
    useEffect(() => {
      setJoinId(id);
      setJoinPassword(password);
    }, [id, password]);
  };
  return (
    <div>
      <Title title="이메일로 회원가입" />
      <Form buttonText="다음" getJoinInfo={getJoinInfo} />
    </div>
  );
}
