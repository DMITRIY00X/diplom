import Header from '../header/Header';
import './App.css';
import Main from '../main/Main';
import Name from '../name/Name';
import Footer from '../footer/Footer';
import Projects from '../projects/Projects';
import Site from '../site/Site';
import Problems from '../problems/Problems';
import Slider from '../slider/Slider';
import Skills from '../skills/Skills';
import AboutProjects from '../aboutProjects/AboutProjects';
import Contact from '../contact/Contact';


// import { Routes, Route } from 'react-router-dom';
// import DescriptionPage from '../pages/DescriptionPage';
// import GamesPage from '../pages/GamesPage';
// import MainPage from '../pages/MainPage';
// import SitePage from '../pages/SitePage';




function App(props) {
  let { elem, dif } = props;
  return (
    <div className="App">
      <Header />
      <Name />
      <Main />
      <Skills/>
      <Projects elem={elem} />
      <AboutProjects/>
      <Slider/>
      <Problems dif={dif} />
      <Contact/>
      <Site />
      <Footer />
    </div>
  );
}

export default App;
