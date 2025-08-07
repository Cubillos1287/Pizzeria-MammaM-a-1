import React, {useState, useContext} from "react"
import './Login.css'
import Swal from 'sweetalert2'
import {UserContext} from "../context/UserContext";   
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const {token, loginOn} = useContext (UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const validarDatos = async (e) => {
        e.preventDefault()
    let message = "";
    
    if (!email.trim() || !password.trim()) {
        message = "Error: Todos los campos son obligatorios";
    }
    if (password.length < 6){
        message = "Error: La contraseña debe tener al menos 6 caracteres.";
    }
    const data = await loginOn(email, password);
    console.log(data);
     if(!data ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
        });
        return;
    }else {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: `Datos Ingresados Correctamente. ¡Bienvenido ${email}!`,
        });
    
        setEmail("");
        setPassword("");
        navigate ("/")
    }
}

    return (
        <section className="Login">
            <h2>Ingresa tus Datos:</h2>
            <form onSubmit={validarDatos} >
                <div>
                    <label className="email">Email</label>
                    <input type='email' value= {email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label className="contraseña">Contraseña</label>
                    <input type='password' value= {password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <button className="boton" type='submit'>Enviar</button>
                </div>
            </form>
        </section>
    )
}

export default Login;