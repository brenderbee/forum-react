import React from 'react';
import PropTypes from 'prop-types';


function Post(props) {

  function incrementVote() {
    return props.voteCount += 1;
  }

  function decrementVote() {
    return props.voteCount -= 1;
  }

  return(
    <div>
      <h3>{props.title}</h3>
      <p>{props.comment}</p>
      <p><em>{props.timeStamp.format('LLLL')}</em></p>
      <p><strong>{props.user}</strong></p>
      <p>Votes: {props.voteCount}</p>
      <button onClick={incrementVote}>UpVote</button><button onClick={decrementVote}>DownVote</button>
      <hr/>
    </div>
  );

}

Post.propTypes = {
  user: PropTypes.string,
  title: PropTypes.string,
  comment: PropTypes.string,
  voteCount: PropTypes.number,
  timeStamp: PropTypes.object,
  id: PropTypes.string
}

export default Post;
