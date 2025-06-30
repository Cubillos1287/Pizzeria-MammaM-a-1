import React, {useState} from "react";
import {pizzaCart} from "../components/data/pizzas";


const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);
    
    const agregarPizza = (id) => {
        setCart ((inicialCart) => {
            const pizza = pizzaCart.find((pizza) => pizza.id === id);
            if (!pizza) return inicialCart;
            return [...inicialCart, pizza]
        });
    }
    const eliminarPizza = (id) => {
        setCart((inicialCart) => {
            return inicialCart.filter((pizza) => pizza.id !== id);
        });
    }
    const totalCarrito  = () => {
        return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
    }
    return (
      <>
        <main>
          <div className="container mt-4">
            <h1 className="text-center mb-4">Tu Pedido</h1>
            <div className="d-flex flex-wrap justify-content-center">
              {cart.map((pizza) => (
                <div key={pizza.id} className="card m-2" style={{ width: '18rem' }}>
                  <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                  <div className="card-body">
                    <h5 className="card-title">{pizza.name}</h5>
                    <p className="card-text">Precio: $
                    </p>
                    <p className="card-text">Precio: ${pizza.price.toLocaleString('es-CL')}</p>
                    <p className="card-text">Cantidad: {pizza.count}</p>
                    <button className="btn btn-secondary btn-sm" onClick={() => agregarPizza(pizza.id)} style={{marginLeft: "10px"}}
                    >
                    +
                    </button>
                    <span style={{ margin: "0 10px" }}>{pizza.count}</span>
                    <button 
                    className="btn btn-danger btn-sm" onClick={() => eliminarPizza(pizza.id)} style={{marginRight: "10px"}}
                    >
                     -
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <div className="container mt-4">
                <h2>Total del Pedido: ${totalCarrito().toLocaleString('es-CL')}</h2>
                <button className="btn btn-success" style={{marginBottom:"30px"}}>Pagar Pedido</button>
            </div>
        </main>
       
      </>
    )
  }
  
  export default Cart;   