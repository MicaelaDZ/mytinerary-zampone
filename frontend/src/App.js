import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';


function App() {
  return (
    <BrowserRouter>
    <Switch>    
         <Route exact path="/" component={Home}/>   
         <Route path="/Cities" component={Cities}/> 
         <Redirect to="/" ></Redirect>
        
    </Switch>
    </BrowserRouter>
  );
}

export default App;
