import './Navbar.css'
import React from "react"
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const total = 25000;
    const token = false;
    return(
    <nav className="Barra"> 
        <div>
             <span className="Nombre">Pizzería Mamma Mía</span>
        </div>
            <Link to="/" className="nav-link">
            <Button variant="outline-secondary">Home</Button>
            </Link>
            {token ? (
            <>
                <Link to="/profile" className="nav-link">
                <Button variant="outline-secondary">🔓 Profile</Button>
                <Button variant="outline-secondary" onClick={() => alert('¡Sesión cerrada!')}>🔒 Logout</Button>
                </Link>
                
            </>
             ) : (
            <>
                <Link to="/login" className="nav-link">
                <Button variant="outline-secondary">🔐 Login</Button> 
                </Link>
                <Link to="/register" className="nav-link">
                <Button variant="outline-secondary">🔐 Register</Button> 
                </Link>
            </>
           )}
           <Link to="/cart" className="nav-link">
            <Button className='Carrito' variant="outline-secondary">  🛒 Total:$ {total.toLocaleString('es-CL')} </Button>
            </Link>
    </nav>
    )
}

export default Navbar;