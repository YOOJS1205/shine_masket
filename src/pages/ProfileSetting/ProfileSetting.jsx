import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Title/Title';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

export default function ProfileSetting() {
  return (
    <Container>
      <Title title="프로필 설정" />
      <SubTitle>나중에 언제든지 변경할 수 있습니다.</SubTitle>
      <ProfileForm isButton={true} />
    </Container>
  );
}

const Container = styled.section``;

const SubTitle = styled.h2`
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  margin: 12px 0 30px;
  color: #767676;
`;
