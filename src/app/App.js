import Header from '../header/Header';
import './App.css';
import Main from '../main/Main';
import Name from '../name/Name';
import Footer from '../footer/Footer';
import Projects from '../projects/Projects';
import Site from '../site/Site';
function App() {
  return (
    <div className="App">
      <Header />
      <Name />
      <Main />
      <Projects />
      <Site />
      <Footer />
    </div>
  );
}

export default App;
