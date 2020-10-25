import React from 'react';

// components
import Posts from '../../screens/Posts';

// styles
import './styles.css';

const MainLayout = () => {

  const posts = [
    { image: 'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9', title: 'Title here', text: 'Text goes here something lala' },
    { image: 'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9', title: 'Title here', text: 'Text goes here something lala' },
    { image: 'https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9', title: 'Title here', text: 'Text goes here something lala' },
  ]

  return(
    <div className="content">
      <Posts posts={posts}/>
    </div>
  )
}

export default MainLayout;
