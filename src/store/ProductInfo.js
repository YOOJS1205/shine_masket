const initialState = {
  productList: [],
  // productImg: '',
  // productName: 0,
  // productCost: '',
  // productLink: '',
};

const ProductInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT':
      return {
        ...state,
        productList: action.productList,
      };
    default:
      return state;
  }
};

export default ProductInfoReducer;