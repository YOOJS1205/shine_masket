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
};

const PostInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD':
      return {
        ...state,
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
    default:
      return state;
  }
};

export default PostInfoReducer;
