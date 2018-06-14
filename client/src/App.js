import React from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';


const App = () => ( 
  <div className="App">
    <BlogForm />
    <BlogList />
    <Footer />
  </div>
);
export default App;
