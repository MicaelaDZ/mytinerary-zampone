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
                <div className="titulo-medio col-12 col-lg-12 col-md-12 col-sm-12">                
                    <div className=" col ">
                        <h1>Find your perfect trip,</h1> 
                        <h4>designed by insiders who knows and love their cities!</h4>
                    </div>
                    <div className="d-flex align-self-center justify-content-center col" >
                   <Link to="/Cities"><Button variant="warning">LET'S GO!</Button></Link>
                    </div>              
                </div>  
            </div>
        </div>
        </>
        )
}

