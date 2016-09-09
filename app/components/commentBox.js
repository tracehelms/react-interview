import React from "react";
import { connect } from "react-redux";

import CommentList from "./commentList";

const CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.props.comments} />
      </div>
    );
  }
});

function mapStateToProps(state, ownProps) {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentBox);
