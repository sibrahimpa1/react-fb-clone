import React, { useState } from 'react';

// components
import Post from '../../components/Post';

// styles
import './styles.css';


const Posts = ({ posts }) => {

  const postToComponent = ({ id, image, title, text }) => {
    return <Post key={id} image={image} title={title} text={text}/>
  }

  return(
    <div className="posts">
      <h1>All posts</h1>
      {posts.map(postToComponent)}
    </div>
  )
}

export default Posts;
