import { useEffect } from "react";
import { connect } from "react-redux";
import citiesAction from "../redux/actions/citiesAction";
import {useParams} from 'react-router-dom';
import Itinerary from './Itinerary';

 function Ciudad(props) {
   const params = useParams()
   console.log(props)

  useEffect(()=> { //asi no se hace el loop infinito. compDidmount
    !props.cities[0] && props.getCities(); //si no existen cities, traelas
    props.cities[0] && props.findCity(props.cities, params.id); //si existe cities, encontrame una ciudad por id (los paranms)
    props.getItinerariesByCityId(params.id)
  }, [props.cities]) //c/vez q se atualiza props.cities: se ejecuta useEff
  
  const back = {
    backgroundImage: "url(" + props.city.src + ")",
    width: "100%",
    height: "70vh",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "z-index": "-1",
  };
  

  return (
    <>  
      <div className="contenedorCard d-flex flex-column justify-content-center" style={back}>
      {props.itineraryFiltered[0] && props.itineraryFiltered.map((itinerary)=> {
        <div><Itinerary itinerary={itinerary}/>
        <h1>asdasd</h1></div>
        })}
       </div>
    </>
  );
}

const mapDispatchToProps = ({  //las acciones los guarda en las props
  getCities: citiesAction.getCities,
  findCity: citiesAction.findCity,
  getItinerariesByCityId: citiesAction.getItinerariesByCityId,
})

const mapStateToProps = (state) => { //trae los estados  q estan en el reducer y lo manda a props
return {
  cities: state.citiesReducer.cities,
  city: state.citiesReducer.city,
  itineraryFiltered: state.citiesReducer.itineraryFiltered,
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Ciudad)