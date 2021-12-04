import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import citiesAction from "../redux/actions/citiesAction";
import {connect} from 'react-redux';

function Cards(props) {
  !props.cities[0] && props.getCities()


//si esto no existe
  
  // useEffect(() => {
  //   fetch("http://localhost:4000/api/cities")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(true)
  //       setCities(data.response);
  //     })
  //     .catch((err) => err.message);
  // }, []);

  // const filter = cities.filter(
  //   (city) =>
  //     city.name.toLowerCase().startsWith(search) ||
  //     city.country.toLowerCase().startsWith(search)
  // );

  return (
    <>
      <div className="fondo-cards">
        <div className="inputContenedor">
          <input
            onChange={(e) => {
              props.filtrar(props.cities, e.target.value.toLowerCase().trim());
            }}
            type="text"
            placeholder="Filter by city"
            className="cityFilter"
          ></input>
        </div>
        <div className="contenedorCards">
          
          <div className="d-flex flex-column justify-content-center">
                       
          {props.auxiliar.length > 0 ? (
            props.auxiliar.map((city, index) => {
              return (
                <Link to={`/city/${city._id}`}>
                  <Card className="Cards" key={index}>
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
                       
                      </Card.Body>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              );
            })
          ) : (
            <h1>No matching results</h1>
          )}
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

