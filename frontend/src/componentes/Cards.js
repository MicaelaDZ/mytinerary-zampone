import { Card } from "react-bootstrap";
import { useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Cards() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState([])
  
    
  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then((res) => res.json())
      .then((data) => setCities(data.response))
      .catch((err) => err.message);
  }, []);

  const filter = cities.filter((city) => 
        city.name.toLowerCase().startsWith(search) || city.country.toLowerCase().startsWith(search)
    )

  return (<>
  <div className="fondo-cards">
       <div className="input">
              <input
              onChange={(e) => {setSearch(e.target.value.toLowerCase().trimStart().trimEnd())
              setSearch(e.target.value)}}
                type="text"            
                placeholder="Filter by city"
                className="cityFilter">
                </input>
          </div>
    <div className="contenedorCards">
      {filter.length > 0 ? (

        filter.map((city, index)=>{
             return(
              
             
            <Link to={`/city/${city._id}`}>
            <Card className="Cards"key={index} >
            <Card.Img variant="top" className="tamañoCard" src={city.src} />
            <Card.ImgOverlay>
            <Card.Body>
              <Card.Title className="cardTitle2">{city.name}, {city.country}</Card.Title>
             
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
          </Link>
          )

        })
      ) : (<h1>No matching results</h1>)}
      
    </div>
    </div>
    </>
  );
}

export default Cards;
