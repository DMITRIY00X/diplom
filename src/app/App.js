import Header from '../header/Header';
import './App.css';
import Main from '../main/Main';
import Name from '../name/Name';
import Footer from '../footer/Footer';
import Projects from '../projects/Projects';
import Site from '../site/Site';
import Problems from '../problems/Problems';
import Slider from '../slider/Slider';

function App(props) {
  let { elem, dif } = props;
  return (
    <div className="App">
      <Header />
      <Name />
      <Main />
      <Projects elem={elem} />
      <Problems dif={dif} />
      <Slider/>
      <Site />
      <Footer />
    </div>
  );
}

export default App;
