const initialState = {
  productList: [],
};

const ProductInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCT':
      return {
        ...state,
        productList: action.productList,
      };
    default:
      return state;
  }
};

export default ProductInfoReducer;
