import React from 'react'
import {Route,Routes} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Header from './component/Header';
import AddBlog from './pages/AddBlog';
import AddCategory from './pages/AddCategory';
import SingleBlog from './pages/SingleBlog';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/add-blog" element={<AddBlog/>}/>
      <Route path="/add-category" element={<AddCategory/>}/>
      <Route path="/blog/:id" element={<SingleBlog/>}/>
    </Routes>
    </>
  )
}

export default App