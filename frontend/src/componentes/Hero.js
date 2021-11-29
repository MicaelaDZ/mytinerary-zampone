import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

export default function Hero(){

    return (
        <>
        <div className="main">
                 <img className="fondo" src="./assets/fondo-playa.jpg" alt="fondo"></img>
            <div className="titulo-centro">
                <h1>MyTinerary</h1>
            </div>
            <div className="container">
                <div className="titulo-medio d-flex">                
                    <div className="col-6 findyourperfect">
                        <h1>Find your perfect trip,</h1> 
                        <h4>designed by insiders who knows and love their cities!</h4>
                    
                    </div>           
                    <div className=" col-6 botonamarillo" >
                   <Link to="/Cities"><Button variant="warning">LET'S GO!</Button></Link>
                    </div>   
                </div>  
            </div>
        </div>
        </>
        )
}

