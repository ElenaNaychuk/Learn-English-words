import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CardGallery, ErrorMessage, MainPage, WordList } from './pages';
import { inject, observer } from "mobx-react";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';

import './style/App.scss';

function App({ loadWords, isLoading, serverError }) {

  const [isLoginFormShown, setIsLoginFormShown] = useState(false);

  const showLoginForm = () => {
    setIsLoginFormShown(true);
  };

  const closeLoginForm = () => {
    setIsLoginFormShown(false);
  };

  useEffect(() => {
    isLoading = true
    try {
      loadWords();
    } catch (error) {
      error = true;
    }
    isLoading = false;
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (serverError) {
    return <p>Ошибка загрузки...</p>;
  }
  return (
    <Router>
      <div className='wrapper'>
        <Header showLoginForm={showLoginForm} u />
        {isLoginFormShown &&
          <LoginForm
            closeLoginForm={closeLoginForm}
          />}
        <Routes>
          {/* <Route exact path="/learned" element={<LearnedWords />} /> //TODO */}
          <Route exact path="/cards" element={<CardGallery />} />
          <Route exact path="/list" element={<WordList />} />
          <Route exact path="/" element={<MainPage />} />
          <Route path="*" element={<ErrorMessage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default inject((store) => {
  const { wordsStore } = store;
  const { loadWords, isLoading, serverError } = wordsStore;
  return { loadWords, isLoading, serverError }
})(observer(App));
