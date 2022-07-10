const initialState = {
  registerId: '',
  registerPassword: '',
};

const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK':
      return {
        ...state,
        registerId: action.registerId,
        registerPassword: action.registerPassword,
      };
    default:
      return state;
  }
};

export default UserInfoReducer;
