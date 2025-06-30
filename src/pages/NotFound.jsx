import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Imagen from "../assets/img/imagen.jpg";



const NotFound = () => {
  return (
    <div className="not-found">
    <Container className="pt-5 text-center">
      <h1 className="mb-4">La ruta que intentas consultar no existe :/</h1>
      <p className="mb-4">Parece que te has perdido. ¡No te preocupes!</p>
      <img 
      src={Imagen}
      alt="Página no encontrada" className="not-found-img" 
      />
      <br />
      <Link to="/" className="btn btn-primary">
        Volver al Inicio
      </Link>
    </Container>
    </div>
  );
};
export default NotFound;