const initialState = {
  productImg: '',
  productName: 0,
  productCost: '',
  productLink: '',
};

const ProductInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_UPLOAD':
      return {
        ...state,
        productName: action.ProductInfo.productName,
        productPrice: action.ProductInfo.productPrice,
        productLink: action.ProductInfo.productLink,
        productImg: action.ProductInfo.productImg,
      };
    default:
      return state;
  }
};

export default ProductInfoReducer;
