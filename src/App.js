import Navigation from './componentes/Navigation';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import playa from './assets/fondo-playa.jpg'


function App() {
  return (
    <div>
    <Navigation />
    <img src={playa}></img>
    </div>
  );
}

export default App;
