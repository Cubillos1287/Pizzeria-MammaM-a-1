import React, { useState, useEffect } from "react"
import Header from "./Header"
import CardPizza from "./CardPizza"
import { pizzas } from "./data/pizzas"
console.log(pizzas)

const Home = () => {
    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas";
        const response = await fetch(url);
        const data = await response.json();
        setInfo(data);
    }
    useEffect(() => {
        consultarApi();
    }   , []);
    const [info, setInfo] = useState([]);
    return (
        <>
            <main>
                <Header />
                <div className="container mt-4">
                    <div className="d-flex flex-wrap justify-content-center">
                        {info.map((data) => (
                            console.log("Pizza:", data),
                        <CardPizza
                            key={data.id}
                            name={data.name}
                            price={data.price}
                            ingredients={data.ingredients} 
                            img={data.img}      
                        />  
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home