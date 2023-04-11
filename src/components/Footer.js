import "./styles/Footer.css"
import logo from '../assets/logo192 - white.png'

function Footer(){
    return(
    <footer className="footer-container">
        <img src={logo} className="logo-kasa-footer" />
        <p className="copyright-footer">©2020 Kasa. All rights reserved</p>
    </footer>  
    )
}

export default Footer