import React from "react"
import { Card, Button } from "react-bootstrap"

const CardPizza = ({name, desc,price, ingredients, img,cardWidth='18rem', cardMargin='50px'}) => {
    console.log("Props recibidas", { name, price, ingredients, img, desc, cardWidth, cardMargin });
    return (
        <Card style={{ width: cardWidth, margin: cardMargin, justifyContent:'center'}}>
            <Card.Img variant="top" src={img} alt={name || "Imagen de pizza"} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {desc || ""}
                </Card.Text>
                <Card.Text>
                   <strong> Ingredientes:</strong>
                </Card.Text>
                <Card.Text>
                <ul style={{ paddingLeft: "10px", textAlign: "left" }}>
                    {ingredients ? ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    )): ""}
                
                </ul>
                </Card.Text>
                <Card.Text>
                    <strong>Precio: ${price ? price.toLocaleString('es-CL'): ""}</strong>
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

