import React from 'react';
import styled from 'styled-components';
import ImageButton from './ImageButton';
import UserInfoInput from './UserInfoInput';
import Button from '../Button/Button';

export default function ProfileForm({ isButton }) {
  return (
    <FormContainer>
      <ImageButton />
      <UserInfoInput
        TitleText="사용자 이름"
        placeholder="2~10자 이내여야 합니다."
      />
      <UserInfoInput
        TitleText="계정 ID"
        placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
      />
      <UserInfoInput
        TitleText="소개"
        placeholder="자신이 판매할 상품에 대해 소개해 주세요!"
      />
      {isButton ? <Button buttonText="샤인마스켓 시작하기" /> : null}
    </FormContainer>
  );
}

const FormContainer = styled.form`
  padding: 0 34px;
`;
