import React, {useState} from "react"
import './Register.css'
import Swal from 'sweetalert2'
import {UserContext} from "../context/UserContext";
import { useContext } from "react";

const Register = () => {
    const {token, register} = useContext (UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validarDatos = async (e) => {
        e.preventDefault()
    let message = "";

    console.log("aqui");
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
        message = "Error: Todos los campos son obligatorios";
    }
    else if (password.length < 6){
        message = "Error: La contraseña debe tener al menos 6 caracteres.";
    }
    else if(password !== confirmPassword){
        message = "Error: La contraseña y la confirmación no son iguales";
    }
    if (message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
        });
        return;
    }
    const data = await register(email, password);

    console.log("Register Token",data);
     if(!data || !data.token) {
        Swal.fire({
            icon: 'error',
            title: 'Error al registar',
            text: "Hubo un problema al crear el usuario, intenta con otro email.",
        });
        return;
    }
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: `Datos Ingresados Correctamente. ¡Bienvenido ${email}!`,
        });

        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
    return (
        <section className="Registro">
            <h2>Registra tus Datos:</h2>
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
                    <label className="confirmacion">Confirmar Contraseña</label>
                    <input type='confirmPassword' value= {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                </div>
                <div>
                    <button className="boton" type='submit'>Enviar</button>
                </div>
            </form>
        </section>
    )
}

export default Register