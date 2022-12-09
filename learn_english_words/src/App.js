import { useEffect, useState } from 'react'

import Header from './components/Header/Header.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import WordList from './components/WordList/WordList.jsx';
import CardGallery from './components/CardGallery/CardGallery.jsx';

import words from './data/wordsData.json';
import './style/App.scss';


function App() {

  useEffect(() => { console.log("Hello") }, []) // TODO вместо log брать данные из LocalStorage или с сервера

  return (
    <div className='wrapper'>
      <Header />
      <MainPage />
      <WordList words={words} />
      <CardGallery words={words} />
      <Footer />
    </div>
  );
}

export default App;
