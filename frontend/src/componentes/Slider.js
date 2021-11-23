 import {Carousel, Row, Col, Card} from 'react-bootstrap';


function Slider(){

  let ciudades = [
    [
    { nombre: "Buenos Aires", ruta: require("../assets/BuenosAires.jpg").default },
    { nombre: "Barcelona", ruta: require("../assets/barceloneta.jpg").default },
    { nombre: "Cancún", ruta: require("../assets/Cancun.jpg").default },
    { nombre: "Costa Rica", ruta: require("../assets/CostaRica.jpg").default }
  ],

   [
     {nombre: "Egypt", ruta: require("../assets/egipto.jpg").default },
    { nombre: "Ireland", ruta: require("../assets/ireland.jpg").default },
    { nombre: "Maldives", ruta: require("../assets/maldives.jpg").default },
    { nombre: "Miami", ruta: require("../assets/miami.jpg").default }
  ],
   
   [
    { nombre: "Paris", ruta: require("../assets/paris.jpg").default },
    { nombre: "Punta Cana", ruta: require("../assets/puntaCana.jpg").default },
    { nombre: "Santorini", ruta: require("../assets/Santorini.jpg").default },
    { nombre: "Australia", ruta: require("../assets/australia.jpg").default }
  ]
  ];


    return (
      <div className="divCarousel"> 
        <h1 className="Popular">Popular MyTineraries</h1>
       
      <Carousel className="container p-5 ">

        {ciudades.map((arrayciudad) => {

          return (
            <Carousel.Item interval={3000}>
            <Row xs={1} md={2} className="g-4">

            {arrayciudad.map((ciudad) => {
              
              return (

                  <Col className="Col">
                    <Card className="container">
                    <Card.Img variant="top" width="200" height="300" src={ciudad.ruta} />
                    <Card.ImgOverlay>
                    <Card.Title>{ciudad.nombre}</Card.Title>
                      
                    </Card.ImgOverlay>
                  </Card>
                </Col>
                )

              
              })}

            </Row>
          </Carousel.Item>
            )})}
   
    </Carousel>
    </div>
    );
  }
  
export default Slider

