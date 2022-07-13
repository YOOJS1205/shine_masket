import React from 'react';
import ProductForm from '../../components/ProductFrom/ProductForm';
import TopMenuBar from '../../components/TopMenuBar/TopMenuBar';

export default function AddProduct() {
  return (
    <>
      <TopMenuBar saveButton />
      <ProductForm />
    </>
  );
}
