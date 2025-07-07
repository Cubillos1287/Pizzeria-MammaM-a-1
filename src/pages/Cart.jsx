import React, {useContext} from "react";
import { CartContext } from "../context/CartContext";


const Cart = () => {
    const {cart, addToCart, removeFromCart, clearCart} = useContext(CartContext);
    const totalCarrito = () => {
      return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
    };
    
    return (
      <>
      <main>
        <div className="container mt-4">
          <h1 className="text-center mb-4">Tu Pedido</h1>
          <div className="d-flex flex-wrap justify-content-center">
            {cart.map((pizza) => (
              <div key={pizza.id} className="card m-2" style={{ width: "18rem" }}>
                <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                <div className="card-body">
                  <h5 className="card-title">{pizza.name}</h5>
                  <p className="card-text">Precio: ${pizza.price.toLocaleString("es-CL")}</p>
                  <p className="card-text">Cantidad: {pizza.count}</p>
                  <div className="d-flex align-items-center">
                  <button className="btn btn-success"  onClick={() => addToCart(pizza)} style={{ marginRight: "10px", width:"150px", height:"60px" }}>
              Agregar 🍕</button>
                    <button className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromCart(pizza.id)}
                      style={{ marginLeft: "10px", width:"150px", height:"60px" }}
                    >
                    Eliminar 🍕
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mt-4">
          <h2>Total del Pedido: ${totalCarrito().toLocaleString("es-CL")}</h2>
          <button className="btn btn-success" onClick={clearCart} style={{ marginTop:"20px", marginBottom: "20px", width:"150px", height:"50px" }}>
            Vaciar Carrito
          </button>
        </div>
      </main>
    </>
  );
};

 export default Cart;   