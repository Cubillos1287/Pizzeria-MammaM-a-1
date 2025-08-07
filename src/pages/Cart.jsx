import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const { token } = useContext(UserContext);

  const totalCarrito = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
  };

  const handleCheckout = async () => {
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart }),
    });

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "¡Compra realizada!",
        text: "Tu pedido fue enviado correctamente 🍕",
      });
      clearCart();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error en la compra",
        text: "No se pudo procesar tu pedido. Intenta de nuevo.",
      });
    }
  };

  return (
    <>
      <main>
        <div className="container mt-4">
          <h1 className="text-center mb-4">Tu Pedido</h1>

          <div className="row">
            {cart.map((pizza) => (
              <div key={pizza.id} className="col-12 col-sm-6 col-md-4 mb-4">
                <div className="card h-100">
                  <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{pizza.name}</h5>
                    <p className="card-text">
                      Precio: ${pizza.price.toLocaleString("es-CL")}
                    </p>
                    <p className="card-text">Cantidad: {pizza.count}</p>
                    <div className="mt-auto d-flex justify-content-between">
                      <button
                        className="btn btn-success"
                        onClick={() => addToCart(pizza)}
                        style={{
                          marginRight: "10px",
                          width: "150px",
                          height: "60px",
                        }}
                      >
                        Agregar 🍕
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeFromCart(pizza.id)}
                        style={{
                          marginLeft: "10px",
                          width: "150px",
                          height: "60px",
                        }}
                      >
                        Eliminar 🍕
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h2>
              Total del Pedido: ${totalCarrito().toLocaleString("es-CL")}
            </h2>
            <button
              className="btn btn-success"
              onClick={handleCheckout}
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                width: "150px",
                height: "50px",
              }}
              disabled={!token || cart.length === 0}
            >
              Pagar Pedido
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;

