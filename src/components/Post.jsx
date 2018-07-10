import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Post(props) {

  return(
    <div>
      <h3>{props.title}</h3>
      <p>{props.comment}</p>
      <p><em>{props.timeStamp.format('LLLL')}</em></p>
      <p><strong>{props.user}</strong></p>
      <hr/>
    </div>
  );

}

Post.propTypes = {
  user: PropTypes.string,
  title: PropTypes.string,
  comment: PropTypes.string,
  timeStamp: PropTypes.object,
  id: PropTypes.string
}

export default Post;
