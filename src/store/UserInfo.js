const initialState = {
  reduxLoginId: '',
  loginToken: '',
  registerId: '',
  registerPassword: '',
  registerToken: '',
  registerUserName: '',
  registerAccountName: '',
  registerIntro: '',
};

const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        reduxLoginId: action.reduxLoginId,
        loginToken: action.loginToken,
      };
    case 'JOIN':
      return {
        ...state,
        registerId: action.registerId,
        registerPassword: action.registerPassword,
      };

    case 'CLICK':
      return {
        ...state,
        registerUserName: action.registerUserName,
        registerAccountName: action.registerAccountName,
        registerIntro: action.registerIntro,
      };
    default:
      return state;
  }
};

export default UserInfoReducer;
