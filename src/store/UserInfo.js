const initialState = {
  UserId: '',
  User_Id: '',
  registerPassword: '',
  loginToken: '',
  UserName: '',
  UserAccount: '',
  UserIntro: '',
  UserImage: 'https://mandarin.api.weniv.co.kr/Ellipse.png',
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
        User_Id: action.User_Id,
        UserName: action.UserName,
        UserAccount: action.UserAccount,
        UserImage: action.UserImage,
        UserIntro: action.UserIntro,
        loginToken: action.loginToken,
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
    case 'MODIFY_PROFILE':
      return {
        ...state,
        UserImage: action.UserImage,
        UserName: action.UserName,
        UserAccount: action.UserAccount,
        UserIntro: action.UserIntro,
      };
    default:
      return state;
  }
};

export default UserInfoReducer;
