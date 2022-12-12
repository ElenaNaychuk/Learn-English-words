import { useEffect, useState } from 'react'

import Header from './components/Header/Header.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import WordList from './components/WordList/WordList.jsx';
import CardGallery from './components/CardGallery/CardGallery.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';

import words from './data/wordsData.json';
import './style/App.scss';


function App() {
  const [isLoginFormShown, setIsLoginFormShown] = useState(false);
  const [isCardGalleryShown, setIsCardGalleryShown] = useState(false);
  const [isWordsListShown, setIsWordsListShown] = useState(false);

  const showLoginForm = () => {
    setIsLoginFormShown(true);
  };

  const showWordsList = () => {
    setIsWordsListShown(!isWordsListShown);
  };

  const closeLoginForm = () => {
    setIsLoginFormShown(false);
  };

  const showCardGallery = () => {
    setIsCardGalleryShown(!isCardGalleryShown);
  }

  // useEffect(() => {
  //   console.log(words);
  //   words.splice(1, 1);
  //   console.log(words);
  // }, [])

  useEffect(() => { console.log("Hello") }, []) // TODO вместо log брать данные из LocalStorage или с сервера

  return (
    <div className='wrapper'>
      <Header showLoginForm={showLoginForm} />
      {
        isLoginFormShown && <LoginForm
          closeRegistrationForm={closeLoginForm}
        // title={title}
        // btnText={title}
        />
      }
      <MainPage />
      {isWordsListShown && <WordList words={words} />}
      {isCardGalleryShown && <CardGallery words={words} />}
      <Footer
        showCardGallery={showCardGallery}
        showWordsList={showWordsList}
      />
    </div>
  );
}

export default App;
