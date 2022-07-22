const initialState = {
  OtherUserInfo: [],
};

const OtherUserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLWER':
      return {
        ...state,
        OtherUserInfo: action.OtherUserInfo,
      };
    case 'FOLLWING':
      return {
        ...state,
        OtherUserInfo: action.OtherUserInfo,
      };
    default:
      return state;
  }
};

export default OtherUserInfoReducer;
