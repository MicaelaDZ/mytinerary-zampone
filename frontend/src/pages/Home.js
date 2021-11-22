import React from 'react';
import Navigation from '../componentes/Navigation';
import Hero from '../componentes/Hero';
import Slider from '../componentes/Slider';
import Footer from '../componentes/Footer';
import '../App.css';



export default class Home extends React.Component{

    render (){
        return(<>
            <Navigation />           
            <Hero />
            <Slider />
            <Footer />
            
            </>)
    }

}