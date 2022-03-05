
import React, {useEffect} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from '../src/pages/HomePage/HomePage';
import About from './components2/About';
import QuestionsPage from '../src/pages/QuestionPage/QuestionsPages';
import './App.css';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import QuestionSection from './pages/Post/QuestionSection/QuestionSection.component';
import AnswerSection from './pages/Post/AnswerSection/AnswerSection.component';
import PostComponent from './pages/Post/PostComponent';
import Register from './pages/Register/Register';
import PostForm from './pages/PostForm/PostForm';
import TagPage from './pages/TagPage/TagPage';
import TagsPage from './pages/TagsPage/TagsPage';
import UserPage from './pages/UserPage/UserPage';
import UsersPage from './pages/UsersPage/UsersPage';
import {loadUser} from './redux/auth/auth.actions';
import {Provider} from 'react-redux';
import store from './redux/store';
import setAuthToken from './redux/auth/auth.utils';
import AddNewPost from './pages/AddNewPost/AddNewPost';
import AddNewQuestion from './pages/Post/AddNewQuestion';
// import Alert from './components/Alert/Alert.component';




if (localStorage.token) {
  setAuthToken(localStorage.token);
}


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
    <BrowserRouter>
    
    <Routes>
      <Route exact path='/about' element ={<About />} />
      <Route exact path='/' element={ <HomePage />} />
      <Route exact path='/login' element={<Login /> } />
      <Route exact path='/questions' element={<QuestionsPage /> } />
      <Route exact path='/*' element={<NotFound /> } />
      <Route exact path='/answer' element={<AnswerSection /> } />
      <Route exact path='/add/question' element={<PostForm /> } />
      <Route exact path='/questions/:id' element={< PostComponent /> } />
      <Route exact path='/addpost' element={<QuestionSection /> } />
      <Route exact path='/signup' element={<Register /> } />
      <Route exact path='/tag' element={<TagPage /> } />
      <Route exact path='/tags' element={<TagsPage /> } />
      <Route exact path='/user' element={<UserPage /> } />
      <Route exact path='/users' element={<UsersPage /> } />
      <Route exact path='/addnewpost' element={<AddNewPost /> } />
      <Route exact path='/addnewquestion' element={<AddNewQuestion /> } />

    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
