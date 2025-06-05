import React from "react"
import { Card, Button } from "react-bootstrap"

const CardPizza = (props) => {
    return (
        <Card style={{ width: '18rem', margin: '50px' }}>
            <Card.Img variant="top" src={props.img} alt={props.name || "Imagen de pizza"} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>Ingredientes: {props.ingredients}</Card.Text>
                <Card.Text>Precio: ${props.price.toLocaleString('es-CL')}</Card.Text>
                <div className="d-flex justify-content-between mt-3">
                    <Button variant="secondary">Ver Más</Button>
                    <Button variant="dark">Añadir  🛒</Button>
                </div>
                </Card.Body>
        </Card>
    );
};


export default CardPizza

