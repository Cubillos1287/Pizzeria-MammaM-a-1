import React from "react"
import { Container } from "react-bootstrap"
import logo from '../assets/img/logo.jpg';
const Header = () => {
    return(
        <header>
            <div style={{ position: 'relative', width: '100%', height: 'auto' }}> 
            <img
            src={logo}
            alt="Pizzria Mamma Mía"
            className="img-fluid" style={{maxWidth:'100%', height:'auto', filter: 'brightness(30%)'}}
            />
            </div>
            <div style={{position: 'absolute',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', width: '80%', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>
            <h1>¡Pizzería Mamma Mía!</h1>
            <p>¡Tenemos las mejores pizzas que podras encontrar!</p>
            <hr style={{ width: '70%', margin: '0 auto', borderTop: '1px solid white' }}></hr>
             </div>
        </header>
    )
}

export default Header
