import React from 'react';

// page layouts
import Sidebar from './layout/Sidebar';
import MainLayout from './layout/MainLayout';
import Header from './layout/Header';

// style
import './App.css';


function App() {
  return (
    <>
      <Header/>
      <div className="main">
        <Sidebar/>
        <MainLayout/>
      </div>
    </>
  );
}

export default App;
