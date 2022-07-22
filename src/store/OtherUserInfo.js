const initialState = {
  OtherUserName: {},
  OtherUserIntro: {},
  OtherUserImage: {},
};

const OtherUserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLWER':
      return {
        ...state,
        OtherUserName: action.OtherUserName,
        OtherUserImage: action.OtherUserImage,
        OtherUserIntro: action.OtherUserIntro,
      };
    default:
      return state;
  }
};

export default OtherUserInfoReducer;
