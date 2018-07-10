import React from 'react';
import UserPostForm from './UserPostForm';
import PostList from './PostList';

function UserPage() {
  return (
    <div>
      <h1>Dude bro user page</h1>
      <UserPostForm/>
      <PostList />
    </div>
  );
}

export default UserPage;
