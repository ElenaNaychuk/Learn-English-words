import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header/Header.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import WordList from './components/WordList/WordList.jsx';
import CardGallery from './components/CardGallery/CardGallery.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';

import words from './data/wordsData.json';
import './style/App.scss';


function App() {
  const [isLoginFormShown, setIsLoginFormShown] = useState(false);

  const showLoginForm = () => {
    setIsLoginFormShown(true);
  };

  const closeLoginForm = () => {
    setIsLoginFormShown(false);
  };

  useEffect(() => { console.log("Hello") }, []) // TODO вместо log брать данные из LocalStorage или с сервера

  return (
    <Router>
      <div className='wrapper'>
        <Header showLoginForm={showLoginForm} />
        {
          isLoginFormShown && <LoginForm
            closeLoginForm={closeLoginForm}
          />
        }
        <Routes>
          {/* <Route exact path="/learned" element={<LearnedWords />} /> //TODO */}
          <Route exact path="/cards" element={<CardGallery words={words} />} />
          <Route exact path="/list" element={<WordList words={words} />} />
          <Route exact path="/" element={<MainPage />} />
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
