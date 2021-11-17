import Navigation from './componentes/Navigation';
import Footer from './componentes/Footer';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import playa from './assets/fondo-playa.jpg'


function App() {
  return (
    <div>
    <Navigation />
    <Footer />
    <img className="fondo" src={playa}></img>
    
    </div>
  );
}

export default App;
