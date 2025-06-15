import React from "react"
import { Card, Button } from "react-bootstrap"

const CardPizza = ({name,price, ingredients, img}) => {
    console.log("Props recibidas", { name, price, ingredients, img});
    return (
        <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={img} alt={name || "Imagen de pizza"} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                   <strong> Ingredientes:</strong>
                <ul style={{ paddingLeft: "10px", textAlign: "left" }}>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                
                </ul>
                </Card.Text>
                <Card.Text>
                    <strong>Precio: ${price.toLocaleString('es-CL')}</strong>
                </Card.Text>
                <div className="d-flex justify-content-between mt-3">
                    <Button variant="secondary">Ver Más</Button>
                    <Button variant="dark">Añadir  🛒</Button>
                </div>
                </Card.Body>
        </Card>
    );
};


export default CardPizza

