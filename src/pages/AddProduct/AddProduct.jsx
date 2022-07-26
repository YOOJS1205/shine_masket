import React from 'react';
import styled from 'styled-components';
import ProductForm from '../../components/ProductFrom/ProductForm';

export default function AddProduct() {
  return (
    <Container>
      <ProductForm isButton={true} />
    </Container>
  );
}

const Container = styled.section``;
