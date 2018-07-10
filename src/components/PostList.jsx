import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function PostList(props) {
  return(
    <div>
      {Object.keys(props.masterPostList).map(function(postId) {
        let post = props.masterPostList[postId];
        return <Post user={post.user}
          title={post.title}
          comment={post.comment}
          timeStamp={post.timeStamp}
          id={postId}
          key={postId}/>;   
      })}
    </div>
  );
}

PostList.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};

export default connect(mapStateToProps)(PostList);
