import React, { useState, useEffect, useContext } from "react"
import Header from "../components/Header"
import CardPizza from "../components/CardPizza"
import {CartContext} from '../context/CartContext'


const Home = () => {
    const {addToCart} = useContext (CartContext);
    const [info, setInfo] = useState([]);

    const consultarApi = async () => {
    try{
        const url = "http://localhost:5000/api/pizzas";
        const response = await fetch(url);
        const data = await response.json();
        console.log("Datos recibidos:", data);
        setInfo(data);
    } catch (error) {
        console.error("Error al consultar la API:", error);
    }
    };
        
    useEffect(() => {
        consultarApi();
    }   , []);
    
    return (
        <>
            <main>
                <Header />
                <div className="container mt-4">
                    <div className="d-flex flex-wrap justify-content-center">
                        {info.map((data) => (
                        <CardPizza
                            key={data.id}
                            name={data.name}
                            price={data.price}
                            ingredients={data.ingredients} 
                            img={data.img}     
                            addToCart={() => addToCart(data)} 
                        />  
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home