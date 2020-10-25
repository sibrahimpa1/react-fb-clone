import React from 'react';
import './styles.css';

const Post = ( {image, title, text} ) => {

  return(
    <div className="post">
      <img src={image} />
      <div className="post__text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
  
}

export default Post;
