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

function App(props) {
  let { elem, dif } = props;
  return (
    <div className="App">
      <Header />
      <Name />
      <Main />
      <Skills/>
      <Projects elem={elem} />
      <Slider/>
      <Problems dif={dif} />
      <Site />
      <Footer />
    </div>
  );
}

export default App;
