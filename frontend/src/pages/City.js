import { useParams, Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import Navigation from "../componentes/Navigation";
import Footer from "../componentes/Footer";


function City() {
  const [city, setCity] = useState([]);

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    fetch("http://localhost:4000/api/city/" + params.id)
      .then((res) => res.json())
      .then((data) => setCity(data.response))
      .catch((err) => err.message);
  }, []);

  return (
     <>
      <Navigation />
      <div className="contenedorCard">
      <Card className="container singleCard" >
        <Card.Img className="imgSingle" variant="top"  src={city.src} />
        <Card.Body>
         
          <Card.Title className="cityTitle">{city.name}, {city.country}</Card.Title>
          <Card.Text>
           <h2>Under Construction...</h2>
          </Card.Text>
          <Link to="/cities"><Button variant="warning">Back to Cities</Button></Link>
        
        </Card.Body>
      </Card>
      </div>
      <Footer />
    </>
  );
}

export default City;
