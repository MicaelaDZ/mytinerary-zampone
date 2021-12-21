import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import citiesAction from "../redux/actions/citiesAction";
import {connect} from 'react-redux';

function Cards(props) {
  !props.cities[0] && props.getCities()

  return (
    <>
      <div className="fondo-cards">
        <div className="inputContenedor">
          <input
            onChange={(e) => {
              props.filter(props.cities, e.target.value.toLowerCase().trim());
            }}
            type="text"
            placeholder="Filter by city"
            className="cityFilter"
          ></input>
        </div>
        <div className="contenedorCards">
          
          <div className="d-flex flex-column justify-content-center">
           {props.cities.length > 0 ? (        
          props.auxiliar.length > 0 ? (
            props.auxiliar.map((city, index) => {
              return (
                <Link key={index} to={`/city/${city._id}`}>
                  <Card className="Cards" >
                    <Card.Img
                      variant="top"
                      className="tamañoCard"
                      src={city.src}
                    />
                    <Card.ImgOverlay>
                      <Card.Body>
                        <Card.Title className="cardTitle2">
                          {city.name}, {city.country} 
                        </Card.Title>
                        <Card.Text className="txt-description">
                      {city.description}
                    </Card.Text>
                      </Card.Body>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              );
            })
          ) : (
            <h1>No matching results</h1>
          )) : <Spinner className="spinner" animation="border" variant="warning" />}
        </div>
      </div>
      </div>
      
    </>
  );
}

const mapDispatchToProps = ({  //las acciones los guarda en las props
  getCities: citiesAction.getCities,
  filter: citiesAction.filter,
})

const mapStateToProps = (state) => { //trae los estados  q estan en el reducer y lo manda a props
return {
  cities: state.citiesReducer.cities,
  auxiliar: state.citiesReducer.auxiliar,
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards)

