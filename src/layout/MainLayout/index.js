import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

// components
import Posts from '../../screens/Posts';
import NewPost from '../../components/NewPost';

// styles
import './styles.css';

const MainLayout = () => {
  
  const dummyPosts = [
    { id: uuidv4(), image: 'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9', title: 'Title here', text: 'Text goes here something lala' },
    { id: uuidv4(), image: 'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9', title: 'Title here', text: 'Text goes here something lala' },
    { id: uuidv4(), image: 'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9', title: 'Title here', text: 'Text goes here something lala' },
  ]
  const [posts, setPosts] = useState(dummyPosts);

  const addPost = (post) => {
    setPosts([post, ...posts ]);
  }

  return(
    <div className="content">
      <NewPost addPost={addPost}/>
      <Posts posts={posts}/>
    </div>
  )
}

export default MainLayout;
