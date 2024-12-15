
import React from 'react';
import Post from './Post';
import './PostList.css';

function PostList({ posts, likePost, addComment, editPost, deletePost }) {
  return (
    <div className="post-list">
         
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.id} post={post} likePost={likePost} addComment={addComment} editPost={editPost} deletePost={deletePost} />
        ))
      ) : (
        <p>No posts yet</p>
      )}
    </div>
  );
}

export default PostList;
