import React, { useState, useEffect } from "react"
import CardPizza from "../components/CardPizza";

const Pizza = () => {
    console.log("Componente Pizza renderizado");
    const [info, setInfo] = useState({});

    useEffect(() => {
        console.log("Consultando API...");
        // Llamada a la API para obtener los datos de la pizza
        consultarApi();
    }, []);

    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas/p001";
        const response = await fetch(url);
        const data = await response.json();
        console.log("Datos recibidos:", data);
        setInfo(data);
    };
    console.log("Info:", info);
    return (
        <>
            <div style={{paddingLeft:'15%'}}>
                <CardPizza
                    desc={info.desc}
                    key={info.id}
                    name={info.name}
                    price={info.price}
                    ingredients={info.ingredients}
                    img={info.img}
                    cardWidth='50rem'
                    cardMargin='50px'
                />
            </div>

        </>
    );
}

export default Pizza;