import "./styles/Header.css"
import logo from '../assets/logo192.png'
import {NavLink } from 'react-router-dom'



function Header(){
    return(
    <header className="navigation-container">
        <img src={logo} className="logo-kasa" />
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