import "./styles/Header.css"
import logo from '../assets/logo192.png'
import {NavLink, Link } from 'react-router-dom'


//Utilisation de liens pour naviguer dans l'application grâce à Link et NavLink
//NavLink est stylisable alors que Link non
function Header(){
    return(
    <header className="navigation-container">
        <Link to="/" className="link-home"><img src={logo} className="logo-kasa" alt=""/></Link>
        
        <nav>
           <NavLink to="/" className="link" style={({ isActive }) => ({ 
                            textDecoration: isActive ? 'underline' : 'none' })}>Accueil</NavLink>
           <NavLink to="/About" className="link" style={({ isActive }) => ({ 
                            textDecoration: isActive ? 'underline' : 'none' })}>A Propos</NavLink>
        </nav>
        
    </header>
    )
}

export default Header