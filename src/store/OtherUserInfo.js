const initialState = {
  OtherUserInfo: [],
  OtherUserProfileInfo: [],
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
    case 'PROFILE':
      return {
        ...state,
        OtherUserProfileInfo: action.OtherUserProfileInfo,
      };
    default:
      return state;
  }
};

export default OtherUserInfoReducer;
