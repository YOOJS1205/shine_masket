const initialState = {
  userName: '',
  userAccount: '',
  userImage: '',
  content: '',
  date: '',
  postId: '',
  postImages: '',
  heartCount: '',
  commentCount: '',
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
        date: action.date,
        postImages: action.postImages,
        heartCount: action.heartCount,
        commentCount: action.commentCount,
      };
    default:
      return state;
  }
};

export default PostInfoReducer;
