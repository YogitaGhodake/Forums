
import React, {useEffect} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from '../src/pages/HomePage/HomePage';
import About from './pages/About/About';
import QuestionsPage from '../src/pages/QuestionPage/QuestionsPages';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import QuestionSection from './pages/Post/QuestionSection/QuestionSection';
import AnswerSection from './pages/Post/AnswerSection/AnswerSection';
import PostComponent from './pages/Post/PostComponent';
import SignUp from './pages/SignUp/SignUp';
import PostForm from './pages/PostForm/PostForm';
import TagPage from './pages/TagPage/TagPage';
import TagsPage from './pages/TagsPage/TagsPage';
import UserPage from './pages/UserPage/UserPage';
import UsersPage from './pages/UsersPage/UsersPage';
import {loadUser} from './redux/auth/auth.actions';
import {Provider} from 'react-redux';
import store from './redux/store';
import SearchQuestions from './pages/SearchQuestion/SearchQuestions';
import setAuthToken from './redux/auth/auth.utils';

import Alert from './components/Alert/Alert.component';
import CareersPage from './pages/CareersPage/CareersPage';
import PageContainer from './components/PageContainer/PageContainer.component';

import Contact from './pages/ContactPage/ContactUs';
import Notifications from './pages/Notifications/Notifications';
import Settings from './pages/Settings/Settings';
import Faq from './pages/FAQ/Faq';
import BlogDetails from './pages/BlogDetails/BlogDetails';





if (localStorage.token) {
  setAuthToken(localStorage.token);
}


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);




  return (
    <Provider store={store}>
      <Alert />
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={ <HomePage />} />
      <Route exact path='/home' element={ <HomePage />} />
      <Route exact path='/about' element ={<About />} />
      <Route exact path='/login' element={<Login /> } />
      <Route exact path='/signup' element={<SignUp /> } />
      <Route exact path='/questions' element={<QuestionsPage /> } />

      <Route exact path='/answer' element={<AnswerSection /> } />
      <Route exact path='/add/question' element={<PostForm /> } />
      <Route exact path='/questions/:id' element={< PostComponent /> } />
      <Route exact path='/addpost' element={<QuestionSection /> } />
      <Route exact path='/tags/:tagname' element={<TagPage /> } />
      <Route exact path='/tags' element={<TagsPage /> } />
      <Route exact path='/users/:id' element ={<UserPage />} />
      <Route exact path='/users' element={<UsersPage /> } />
  
      <Route exact path='/search' element={<SearchQuestions /> } />
      <Route exact path='/careers' element={<CareersPage /> } />
      <Route exact path='/contact' element={<Contact /> } />
      <Route exact path='/notifications' element={<Notifications /> } />
      <Route exact path='/setting' element={<Settings /> } />
      <Route exact path='/faq' element={<Faq /> } />
      <Route exact path='/blog-details' element={<BlogDetails /> } />
      <Route exact path='/*' element={<NotFound /> } />


    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
