const initialState = {
  UserId: '',
  registerPassword: '',
  loginToken: '',
  UserName: '',
  UserAccount: '',
  UserIntro: '',
  UserImage: '',
};

const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        UserId: action.UserId,
        loginToken: action.loginToken,
      };
    case 'JOIN':
      return {
        ...state,
        UserId: action.UserId,
        registerPassword: action.registerPassword,
      };

    case 'CLICK':
      return {
        ...state,
        UserName: action.UserName,
        UserAccount: action.UserAccount,
        UserIntro: action.UserIntro,
        UserImage: action.UserImage,
      };
    default:
      return state;
  }
};

export default UserInfoReducer;
