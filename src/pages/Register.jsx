import React, {useState} from "react"
import './Register.css'
import Swal from 'sweetalert2'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validarDatos = (e) => {
        e.preventDefault()
    let message = "";
    console.log("aqui");
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
        message = "Error: Todos los campos son obligatorios";
    }
    if (password.length < 6){
        message = "Error: La contraseña debe tener al menos 6 caracteres.";
    }
    if(password !== confirmPassword){
        message = "Error: La contraseña y la confirmación de la contraseña no son iguales";
    }
    if(message) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
        });
    }else {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: `Datos Ingresados Correctamente. ¡Bienvenido ${email}!`,
        });
        // Aquí podrías redirigir al usuario o limpiar el formulario
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
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