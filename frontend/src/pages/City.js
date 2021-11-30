import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useState, useEffect} from "react";
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

  const back = {
    backgroundImage: "url(" + city.src + ")",
    width: "100%",
    height: "70vh",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "z-index": "-1",
  }
  return (
    <>
      <Navigation />
       <div style={back}>
         <h1>asdasd</h1></div>  
      <div className="contenedorCard">
        <div className="itinerarioCard">
        <h2>itinerario nombre</h2>
        <img className="singleCard" variant="top" src=""></img>
        <h3>nombre persona</h3>
        <div>
          <span></span>
          <span>duration</span>
          <span>price</span>
        </div>
        <div>#asdasd #lorem #asd</div>
        <button>View more</button>
        <Link to="/cities">Back to cities</Link><Link to="/">Back to Home</Link>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default City;

{
  /* <div className="contenedorCard">
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
</div> */
}
