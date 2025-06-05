import React from "react"
import Header from "./Header"
import CardPizza from "./CardPizza"

const Home = () => {
    return (
        <>
            <main>
                <Header />
                <div className="container mt-4">
                    <div className="d-flex flex-wrap justify-content-center">
                        <CardPizza
                            key="napolitana"
                            name="Napolitana"
                            price={5950}
                            ingredients={["mozzarella", "tomates", "jamón", "orégano"].join(", ")} // Unir ingredientes para mostrar como string
                            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
                            
                        />
                        <CardPizza
                            key="espanola"
                            name="Española"
                            price={6950}
                            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"].join(", ")}
                            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
                            
                        />
                        <CardPizza
                            key="pepperoni" 
                            name="Pepperoni"
                            price={6950}
                            ingredients={["mozzarella", "pepperoni", "orégano"].join(", ")}
                            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
                           
                       />
                    </div>
                </div>
            </main>

        </>
    )
}

export default Home