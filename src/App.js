import Home from '../src/HomePages/home';
import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from '../src/pages/HomePage/HomePage';
import About from '../src/components/About';
import QuestionPage from '../src/pages/QuestionPage/QuestionPage';
import './App.css';
import LoginPage from './pages/Login/LoginPage';
import NotFound from './pages/NotFound/NotFound';
import QuestionSection from '../src/pages/Post/QuestionSection/QuestionSection';
import AnswerSection from './pages/Post/AnswerSection/AnswerSection';
import PostComponent from './pages/Post/PostComponent';
import Register from './pages/Register/Register';
import PostForm from './pages/PostForm/PostForm';
import TagPage from './pages/TagPage/TagPage';
import TagsPage from './pages/TagsPage/TagsPage';
import UserPage from './pages/UserPage/UserPage';
import UsersPage from './pages/UsersPage/UsersPage';




function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route exact path='/' element ={<Home />} />
      <Route exact path='/about' element ={<About />} />
      <Route exact path='/home' element={ <HomePage />} />
      <Route exact path='/login' element={<LoginPage /> } />
      <Route exact path='/questions' element={<QuestionPage /> } />
      <Route exact path='/*' element={<NotFound /> } />
      <Route exact path='/answer' element={<AnswerSection /> } />
      <Route exact path='/askquestion' element={<QuestionSection /> } />
      <Route exact path='/post' element={< PostComponent /> } />
      <Route exact path='/addpost' element={<PostForm /> } />
      <Route exact path='/signup' element={<Register /> } />
      <Route exact path='/tag' element={<TagPage /> } />
      <Route exact path='/tags' element={<TagsPage /> } />
      <Route exact path='/user' element={<UserPage /> } />
      <Route exact path='/users' element={<UsersPage /> } />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
