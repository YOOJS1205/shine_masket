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
    default:
      return state;
  }
};

export default PostInfoReducer;
