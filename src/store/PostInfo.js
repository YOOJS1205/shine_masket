const initialState = {
  userName: '',
  userAccount: '',
  content: '',
  date: '',
  postId: '',
  postImages: '',
  heartCount: '',
  commentCount: '',
  updateImages: '',
  postList: [],
};

const PostInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD':
      return {
        ...state,
        userName: action.userName,
        userAccount: action.userAccount,
        userImage: action.userImage,
        content: action.content,
        postId: action.postId,
        date:
          action.date.split('-')[0] +
          '년 ' +
          action.date.split('-')[1] +
          '월 ' +
          action.date.split('-')[2].split('T')[0] +
          '일',
        postImages: action.postImages.split(','),
        heartCount: action.heartCount,
        commentCount: action.commentCount,
      };
    case 'UPDATE':
      return {
        ...state,
        userName: action.userName,
        userAccount: action.userAccount,
        userImage: action.userImage,
        content: action.content,
        postId: action.postId,
        date:
          action.date.split('-')[0] +
          '년 ' +
          action.date.split('-')[1] +
          '월 ' +
          action.date.split('-')[2].split('T')[0] +
          '일',
        postImages: action.postImages.split(','),
      };
    case 'GET_POST':
      return {
        ...state,
        postList: action.postList,
        // userAccount: action.userAccount,
        // userImage: action.userImage,
        // content: action.content,
        // postImages: action.postImages.split(','),
      };
    default:
      return state;
  }
};

export default PostInfoReducer;
