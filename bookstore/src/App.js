import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNav from './Components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from './Components/Head.jsx';
import MyFooter from './Components/MyFooter'
import Categories from './Components/Categories'
import CommentList from './Components/CommentList'
import BookList from './Components/BookList'
function App() {
  return (
    <div className="main">
    <MyNav/>
    <Head 
      text="Bookstore"
      description=" "
    />
    <BookList/>
    <CommentList/>
    <MyFooter/>
   </div>
  );
}

export default App;
