import "./styles/Header.css"
import logo from '../assets/logo192.png'



function Header(){
    return(
    <header className="navigation-container">
        <img src={logo} className="logo-kasa" />
        <nav>
           <a href="#" className="link">Accueil</a>
           <a href="#" className="link">A Propos</a> 
        </nav>
        
    </header>
    )
}

export default Header