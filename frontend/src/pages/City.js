
import Navigation from "../componentes/Navigation";
import Footer from "../componentes/Footer";
import Ciudad from "../componentes/Ciudad"

function City() {
  // const [city, setCity] = useState([]);

  // const params = useParams();
  // console.log(params.id);

  // useEffect(() => {
  //   fetch("http://localhost:4000/api/city/" + params.id)
  //     .then((res) => res.json())
  //     .then((data) => setCity(data.response))
  //     .catch((err) => err.message);
  // }, []);

  
  return (
    <>
      <Navigation />
      <Ciudad/>
      <Footer />
    </>
  );
}

export default City;


