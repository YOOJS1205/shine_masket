const initialState = {
  OtherUserInfo: [],
  // OtherUserName: [],
  // OtherUserIntro: [],
  // OtherUserImage: [],
};

const OtherUserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLWER':
      return {
        ...state,
        OtherUserInfo: action.OtherUserInfo,
        // OtherUserName: action.OtherUserName,
        // OtherUserImage: action.OtherUserImage,
        // OtherUserIntro: action.OtherUserIntro,
      };
    default:
      return state;
  }
};

export default OtherUserInfoReducer;
