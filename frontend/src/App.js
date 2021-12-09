import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import City from './pages/City'
import SignUp from './pages/SignUp';



function App() {
  return (
    <BrowserRouter>
    <Routes>    
         <Route path="/" element={<Home />}/>   
         <Route path="/cities" element={<Cities />}/>         
         <Route path="/city/:id" element={<City />}/>
         <Route path="/signup" element={<SignUp />}/>
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;
