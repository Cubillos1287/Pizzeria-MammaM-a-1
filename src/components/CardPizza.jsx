import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

const CardPizza = ({id, name, desc,price, ingredients, img, addToCart, cardWidth='18rem', cardMargin='50px', buttonMore= true}) => {
    console.log("Props recibidas", { id, name, price, ingredients, img, desc, cardWidth, cardMargin });
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
                    <strong>Precio: ${price?.toLocaleString('es-CL')}</strong>
                </Card.Text>
                <div className="d-flex justify-content-center mt-3">
                    <Link to= {`/pizza/${id}`}>
                    {buttonMore ? <Button variant="secondary" style={{ marginRight: "5px", width:"90px", height:"60px" }}>Ver Más 🍕</Button>:"" }
                 </Link>
                    <Button variant="dark" style={{marginLeft:"5px", width:"90px", height:"60px"  }} onClick= {addToCart} >Añadir al 🛒</Button>
                </div>
                </Card.Body>
        </Card>
    );
};


export default CardPizza

