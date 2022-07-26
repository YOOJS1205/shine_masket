import React from 'react';
import styled from 'styled-components';
import Picture from '../../assets/images/basic-profile-img.png';

export default function SaleProductItem(props) {
  console.log('SaleProductItem!!!!!!!!!!');
  console.log(props);

  return (
    <>
      <SaleProductItemContainer>
        <SaleProductImg src={props.productImg} />
        <SaleProductName>{props.productName}</SaleProductName>
        <SaleProductCost>{props.productPrice}</SaleProductCost>
      </SaleProductItemContainer>
    </>
  );
}

const SaleProductItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const SaleProductImg = styled.img`
  margin: 0 10px 5px 0;
  width: 140px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
`;

const SaleProductName = styled.strong`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

const SaleProductCost = styled.strong`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: var(--color-enabled-dark);
`;
