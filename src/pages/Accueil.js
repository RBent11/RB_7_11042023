import Header from "../components/Header"
import Banner from "../components/Banner"
import AppartList from "../components/AppartList"
import Footer from "../components/Footer"
import imageBanner from '../assets/mer.png'


function Accueil(){
    
    return(
    <div className="Accueil-container">
        
        <Header />
        <Banner image = {imageBanner} texte = 'Chez vous, partout et ailleurs'/>
        <AppartList/>
        <Footer/> 
    </div>
    )
}

export default Accueil

