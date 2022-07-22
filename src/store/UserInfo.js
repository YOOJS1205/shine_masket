const initialState = {
  UserId: '',
  registerPassword: '',
  loginToken: '',
  UserName: '',
  UserAccount: '',
  UserIntro: '',
  UserImage: '',
  UserFollowing: [],
  UserFollower: [],
  UserFollowerCount: 0,
  UserFollowingCount: 0,
};

const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        UserId: action.UserId,
        UserName: action.UserName,
        UserAccount: action.UserAccount,
        UserImage: action.UserImage,
        UserIntro: action.UserIntro,
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
    case 'FOLLOW':
      return {
        ...state,
        UserFollowing: action.UserFollowing,
        UserFollower: action.UserFollower,
        UserFollowerCount: action.UserFollowerCount,
        UserFollowingCount: action.UserFollowingCount,
      };
    default:
      return state;
  }
};

export default UserInfoReducer;
