import React from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';
import { v4 } from 'uuid';


function UserPostForm(props) {
  let _user = null;
  let _title = null;
  let _comment = null;

  function handlePostFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      user: _user.value,
      title: _title.value,
      comment: _comment.value,
      timeStamp: new Moment()
    };
    dispatch(action);
    _user.value = '';
    _title.value = '';
    _comment.value = '';
  }

  return (
    <div>
      <form onSubmit={handlePostFormSubmission}>
        <input
          type='text'
          id='user'
          placeholder='User Name'
          ref={(input) => {_user = input;}}/>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <textarea
          type='text'
          id='comment'
          placeholder='Write your Post'
          ref={(input) => {_comment = input;}}/>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

export default connect()(UserPostForm);
