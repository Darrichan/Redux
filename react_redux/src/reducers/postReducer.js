const initState = {
  post: [
    { id: 123, content: "我是redux实践1" },
    { id: 13, content: "我是redux实践2" },
  ],
};
const postReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPost = state.post.filter((item) => {
      return item.id !== action.id;
    });
    return {
      ...state,
      post: newPost,
    };
  }
  if (action.type === "ADD_POST") {
    let newPost = JSON.parse(JSON.stringify(state.post));
    newPost.push({ id: action.id, content: action.content });
    return {
      ...state,
      post: newPost,
    };
  }
  return state;
};

export default postReducer;
