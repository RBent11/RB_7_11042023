import {Routes, Route } from 'react-router-dom'

import './styles/App.css';
import Header from './Header';
import Banner from './Banner';
import AppartList from './AppartList';
import Footer from './Footer'
import imageBanner from '../assets/mer.png'
import Page404 from '../pages/Page404';
import Accueil from '../pages/Accueil';
import Appart from './Appart';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="*" element={<Page404 />}></Route>     
				<Route path="/appart/:id" element={<Appart />} />
 				{/* <Route path="/About" element={<About />} /> */}
      </Routes>

      
    </div>
  );
}

export default App;


