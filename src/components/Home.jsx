import React from "react"
import Header from "./Header"
import CardPizza from "./CardPizza"
import { pizzas } from "./data/pizzas"
console.log(pizzas)

const Home = () => {
    return (
        <>
            <main>
                <Header />
                <div className="container mt-4">
                    <div className="d-flex flex-wrap justify-content-center">
                        {pizzas.map((pizza) => (
                            console.log("Pizza:", pizza),
                        <CardPizza
                            key={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients} 
                            img={pizza.img}      
                        />  
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home