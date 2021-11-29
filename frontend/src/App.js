import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import City from './pages/City'


function App() {
  return (
    <BrowserRouter>
    <Routes>    
         <Route path="/" element={<Home />}/>   
         <Route path="/cities" element={<Cities />}/> 
        
         <Route path="/city/:id" element={<City />}/>
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;
