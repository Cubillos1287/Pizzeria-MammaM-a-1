import React, { useState, useEffect, useContext } from "react"
import CardPizza from "../components/CardPizza";
import { useParams } from "react-router-dom";
import {CartContext} from '../context/CartContext'

const Pizza = () => {
   
    const { id } = useParams();
    const [pizza, setPizza] = useState({});
    const {addToCart} = useContext (CartContext);
    
    const consultarApi = async () => {
    try {
        const url = `http://localhost:5000/api/pizzas/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("Datos recibidos:", data);
        setPizza(data);
    }   catch (error) {
        console.error("Error al consultar la API:", error);
    }
    };
    useEffect(() => {
        console.log("Consultando API...");
        // Llamada a la API para obtener los datos de la pizza
        consultarApi();
    }, [id]);

    return (
        <>
            <div style={{paddingLeft:'15%'}}>
                {pizza.id ?(
                <CardPizza
                    desc={pizza.desc}
                    id={pizza.id}
                    name={pizza.name}
                    price={pizza.price}
                    ingredients={pizza.ingredients}
                    img={pizza.img}
                    cardWidth='50rem'
                    cardMargin='50px'
                    buttonMore = {false}
                    addToCart={() => addToCart(pizza)} 
        />
                ) : (
                    <p>Cargando información de la pizza ...</p>
                )}
                
            </div>

        </>
    );
}

export default Pizza;