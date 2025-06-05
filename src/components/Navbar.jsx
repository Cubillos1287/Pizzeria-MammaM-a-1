import './Navbar.css'
import React from "react"
import { Button } from "react-bootstrap"


const Navbar = () => {
    const total = 25000;
    const token = false;
    return(
    <nav className="Barra"> 
        <div>
             <span className="Nombre">Pizzería Mamma Mía</span>
        </div>
            <Button variant="outline-secondary">Home</Button>
            {token ? (
            <>
                <Button variant="outline-secondary">🔓 Profile</Button>
                <Button variant="outline-secondary" onClick={() => alert('¡Sesión cerrada!')}>🔒 Logout</Button>
            </>
             ) : (
            <>
                <Button variant="outline-secondary">🔐 Login</Button> 
                <Button variant="outline-secondary">🔐 Register</Button> 
            </>
           )}
            <Button className='Carrito' variant="outline-secondary">  🛒 Total:$ {total.toLocaleString('es-CL')} </Button>
    </nav>
    )
}

export default Navbar;