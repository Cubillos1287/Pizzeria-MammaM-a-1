import './Navbar.css'
import React, { useContext }from "react"
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
    const { cart } = useContext(CartContext);
    const {token, logout} = useContext (UserContext);
    const totalCarrito = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
    
console.log ('valor token:', token);

    return(
    <nav className="Barra"> 
        <div>
             <span className="Nombre">Pizzería Mamma Mía </span>
        </div>
            <Link to="/" className="nav-link" style={{ marginRight: "5px" }}>
            <Button variant="outline-secondary">
                <AiFillHome style={{ marginRight: "5px" }} /> Home</Button>
            </Link>
            {token ?(
            <>
                <Link to="/profile" className="nav-link" style={{ marginRight: "5px" }} >
                <Button variant="outline-secondary">🔓 Profile</Button>
                </Link>
                <Link to="/login" className="nav-link" style={{ marginRight: "5px" }}> 
                <Button variant="outline-secondary" onClick={logout}>🔒 Logout</Button>
                </Link>
            </>
            ) :(
            <>
                <Link to="/login" className="nav-link" style={{ marginRight: "5px" }}>
                <Button variant="outline-secondary">🔐 Login</Button> 
                </Link>
                <Link to="/register" className="nav-link" style={{ marginRight: "5px" }}>
                <Button variant="outline-secondary">🔐 Register</Button> 
                </Link>
            </>
            )}
           <> 
           <Link to="/cart" className="nav-link" style={{ marginRight:"20px"}}>
            <Button className='Carrito' variant="outline-secondary" style={{ width: "120px", height: "60px" }}>  🛒 Total:$ {totalCarrito.toLocaleString('es-CL')} </Button>
            </Link>
            </>
    </nav>
    )
}

export default Navbar;