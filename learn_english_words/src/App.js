import WordCard from './components/WordCard/WordCard.jsx';
import Header from './components/Header/Header.jsx';
import MainPage from './components/MainPage/MainPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import WordList from './components/WordList/WordList.jsx';
import './style/App.scss';
import words from './data/wordsData.json';
import CardGallery from './components/CardGallery/CardGallery.jsx';


function App() {
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
