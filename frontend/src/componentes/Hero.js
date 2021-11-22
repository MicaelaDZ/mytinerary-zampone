import { Button } from "react-bootstrap";
import playa from '../assets/fondo-playa.jpg';
import {Link} from 'react-router-dom';

export default function Hero(){

    return (
        <>
        <div className="main">
                 <img className="fondo" src={playa} alt="fondo"></img>
            <div className="titulo-centro">
                <h1>MyTinerary</h1>
            </div>
            <div className="container">
                <div className="titulo-medio row ">                
                    <div className=" col p-4">
                        <h1>Find your perfect trip,</h1> 
                        <h4>designed by insiders who knows and love their cities!</h4>
                    </div>
                    <div className="d-flex align-self-center justify-content-center col" >
                   <Link to="/Cities"><Button  href="./Cities" variant="warning">LET'S GO!</Button></Link>
                    </div>              
                </div>  
            </div>
        </div>
        </>
        )
}

