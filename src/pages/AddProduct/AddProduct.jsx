import React from 'react';
import styled from 'styled-components';
import Title from '../../components/Title/Title';
// import ProfileForm from '../../components/ProfileForm/ProfileForm';
import ProductFinal from '../../components/ProductFrom/ProductFinal';

export default function AddProduct() {
  return (
    <Container>
      <ProductFinal isButton={true} />
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
