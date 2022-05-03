import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  handleDelete = (id) => {
    console.log(id);
    this.props.deletePost(id);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let content = e.target[0].value;
    this.props.addPost(content)
  };
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postRender = (posts) => {
      return posts.map((item) => {
        return (
          <div>
            <h2 key={item.id}>{item.content}</h2>{" "}
            <button
              key={Math.random()}
              onClick={() => this.handleDelete(item.id)}
            >
              删除按钮
            </button>
          </div>
        );
      });
    };
    return (
      <div>
        <h1>Home 页面</h1>
        {postRender(posts)}
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input id="postInput"></input>
          <button>添加state</button>
        </form>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    posts: state.post,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch({ type: "DELETE_POST", id: id }),
    addPost: (content) =>
      dispatch({ type: "ADD_POST", content: content, id: Math.random() }),
  };
};
export default connect(mapStateProps, mapDispatchProps)(Home);
