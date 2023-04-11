import "./styles/Header.css"
import logo from '../assets/logo192.png'
import { Link } from "react-router-dom"

function Header(){
    return(
    <header className="navigation-container">
        <img src={logo} className="logo-kasa" />
        <nav>
            {/* <Link to="/" className="link">Accueil</Link>
            <Link to="/" className="link">A propos</Link> */}
        </nav>
        
    </header>
    )
}

export default Header