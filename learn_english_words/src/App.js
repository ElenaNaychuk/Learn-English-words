import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardGallery, ErrorMessage, MainPage, WordList } from './pages';
import { inject, observer } from "mobx-react";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.jsx';
// import words from './data/wordsData.json';
import './style/App.scss';

function App({ words, loadWords }) {

  console.log(words[0]);

  const [isLoginFormShown, setIsLoginFormShown] = useState(false);
  const [isRegistrationFormShown, setIsRegistrationFormShown] = useState(false);

  const showLoginForm = () => {
    setIsLoginFormShown(true);
  };

  const closeLoginForm = () => {
    setIsLoginFormShown(false);
  };

  const showRegistrationForm = () => {
    setIsRegistrationFormShown(true);
  }

  const closeRegistrationForm = () => {
    setIsRegistrationFormShown(false);
  };

  useEffect(() => {
    try {
      loadWords();
    } catch (error) {
      alert('Ой, произошла ошибка.')
    }
  }, [])

  return (
    <Router>
      <div className='wrapper'>
        <Header showLoginForm={showLoginForm} showRegistrationForm={showRegistrationForm} />
        {
          isLoginFormShown && <LoginForm
            closeLoginForm={closeLoginForm}
          />
        }
        {
          isRegistrationFormShown && <RegistrationForm closeRegistrationForm={closeRegistrationForm} />
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
};

export default inject(({ wordsStore }) => {
  const { words, loadWords } = wordsStore;
  return {
    words, loadWords
  }
})(observer(App));
