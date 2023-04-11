import './styles/App.css';
import Header from './Header';
import Banner from './Banner';
import AppartList from './AppartList';
import Footer from './Footer'
import imageBanner from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg'

function App() {
  return (
    <div className="App">
      
      
      <Header />
      <Banner image = {imageBanner} texte = 'Chez vous, partout et ailleurs'/>
      <AppartList/>
      <Footer/>

      
    </div>
  );
}

export default App;
