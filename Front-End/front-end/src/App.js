import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Tittle from './components/Tittle';
import Content from './components/Content';
import Footer from './components/Footer';
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Tittle/>
      <Content/>
      <hr />
      <Footer/>
    </div>  
  );
}

export default App;
