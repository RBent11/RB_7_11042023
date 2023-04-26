import "./styles/Header.css"
import logo from '../assets/logo192.png'
import {NavLink, Link } from 'react-router-dom'



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