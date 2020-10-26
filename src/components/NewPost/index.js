import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

// styles
import './styles.css';


const NewPost = ( {addPost} ) => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isTextValid, setIsTextValid] = useState(true);

  const isWhitespaceOnly = (string) => {
    return !string.replace(/\s/g, '').length;
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(text === "" || title === "" || isWhitespaceOnly(text) || isWhitespaceOnly(title)){
      if(text === "") {
        setIsTitleValid(false);
      } else setIsTextValid(true);

      if(title === "") {
        setIsTitleValid(false);
      } else setIsTitleValid(true);

    }
    else{
      const newPost = {id: uuidv4(), title, text}
      addPost(newPost);
      setTitle("");
      setText("");
      setIsTitleValid(true);
      setIsTextValid(true);
    }
  }

  return(
    <form className="add-post" onSubmit={onSubmit}>
      <div>
        <label>Title</label>
        <input value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div>
        <label>Text</label>
        <textarea value={text} type="text" cols="10" rows="5" onChange={(e) => setText(e.target.value)}></textarea>
      </div>

      <input type="submit" placeholder="Add Post"/>
    </form>
  )
}

export default NewPost;
