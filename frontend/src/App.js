import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import City from './pages/City'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>   
    <ToastContainer autoClose={4000} />
    <Routes>    
         <Route path="/" element={<Home />}/>   
         <Route path="/cities" element={<Cities />}/>         
         <Route path="/city/:id" element={<City />}/>
         <Route path="/signup" element={<SignUp />}/>
         <Route path="/signin" element={<SignIn />}/>        
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
