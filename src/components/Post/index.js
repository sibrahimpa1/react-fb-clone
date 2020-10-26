import React from 'react';
import './styles.css';

const Post = ( {id, image, title, text} ) => {

  return(
    <div className="post" key={id}>
      <img src={image} />
      <div className="post__text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )

}

export default Post;
