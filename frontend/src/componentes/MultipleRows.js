import { useEffect } from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import citiesAction from "../redux/actions/citiesAction";


function MultipleRows(props) {
  
  
  useEffect(() => {
    props.getCities();
  }, []);
  
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          rows: 4,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="contenedorSlider">
      <h1 className="Popular">Popular MyTineraries</h1>
      <Container>
        <Slider {...settings}>
          {
          props.cities.length > 0 && props.cities.map((city, index) => {
            if (index < 12) {
              return (
                <Card key={index} border="dark" className="text-white card2">
                  <Card.Img
                    className="card-img imgSlider"
                    src={city.src}
                    alt={city.name}
                  />
                  <Card.ImgOverlay>
                    <Card.Title className="txt-dark txt-title">
                      {city.name}, {city.country}
                    </Card.Title>
                    <Card.Text className="txt-dark txt-description txt-center">
                      {city.description}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              );
            }
          })}
        </Slider>
      </Container>
    </div>
  );
}

const mapDispatchToProps = ({ 
    getCities: citiesAction.getCities,
})

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MultipleRows)
