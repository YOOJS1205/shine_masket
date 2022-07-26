import React, { useEffect } from 'react';

import styled from 'styled-components';
import SaleProductItem from '../SaleProductItem/SaleProductItem';
import { useSelector } from 'react-redux';

export default function SaleProduct(props) {
  return (
    <>
      <SaleProductContainer>
        <SaleProductTitle>판매중인 상품</SaleProductTitle>
        <SaleProductItemContainer>
          {props.productList &&
            props.productList.map((product) => (
              <SaleProductItem
                key={product.id}
                productImg={product.itemImage}
                productName={product.itemName}
                productPrice={product.price}
                productLink={product.link}
              />
            ))}
        </SaleProductItemContainer>
      </SaleProductContainer>
    </>
  );
}

const SaleProductContainer = styled.article`
  /* -ms-overflow-style: none; */
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;

  overflow-x: scroll;

  padding: 20px 0 20px 21px;
  border: 0.5px solid #dbdbdb;

  background-color: #fff;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #dbdbdb;
    border-radius: 10px;
  }
`;

const SaleProductTitle = styled.h1`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const SaleProductItemContainer = styled.div`
  display: flex;
`;
