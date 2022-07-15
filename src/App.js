import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import ImgSlider from './components/ImgSlider';
import Deals from './components/Deals';
function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <ImgSlider/>
      <Deals/>
    </div>
  );
}

export default App;
