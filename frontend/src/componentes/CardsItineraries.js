import {useEffect} from "react"
import {connect} from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import itinerariesAction from '../redux/actions/itinerariesAction'
import {useParams} from "react-router-dom"
import Itinerary from "./Itinerary"
import {Link} from "react-router-dom"
import { Spinner } from "react-bootstrap";

function CardsItineraries(props) {
  const params = useParams()

  useEffect(() => {
    //asi no se hace el loop infinito. compDidmount
    !props.cities[0] && props.getCities() //si no existen cities, traelas
    props.cities[0] && props.findCity(props.cities, params.id) //si existe cities, encontrame una ciudad por id (los paranms)
    props.getItinerariesByCityId(params.id)
  }, [props.cities]) //c/vez q se atualiza props.cities: se ejecuta useEff
  console.log(props)

  const back = {
    backgroundImage: "url(" + props.city.src + ")",
    width: "100%",
    height: "70vh",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center",
    "backgroundSize": "cover",
    "zIndex": "-1",
  }

  return (
    <>
    <div className="fondo-itinerario">
      <div className="back" style={back}></div>
      <h1 className="d-flex justify-content-center">{props.city.name}</h1>
      <p className="description container">{props.city.description}</p>
      {
      props.cities[0] ? (
        props.itineraries.length > 0 
        ? (props.itineraries.map(itinerary=><Itinerary key={itinerary._id}itinerary={itinerary} />)) : (
          <h1>There are not itineraries for this city yet...</h1>
          )): <Spinner className="spinner" animation="border" variant="warning" />}
          <Link className="botones m-4"to="/cities">Back to Cities</Link>
    </div>
    </>
  )
}

const mapDispatchToProps = {
  //las acciones los guarda en las props
  getCities: citiesAction.getCities,
  findCity: citiesAction.findCity,
  getItinerariesByCityId: itinerariesAction.getItinerariesByCityId,
}

const mapStateToProps = (state) => {
  //trae los estados  q estan en el reducer y lo manda a props
  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
    itineraries: state.itinerariesReducer.itineraries,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardsItineraries)