import React from 'react';
import Navigation from '../componentes/Navigation';
import Hero from '../componentes/Hero';
import Carousel from '../componentes/Carousel';
import Footer from '../componentes/Footer';


export default class Home extends React.Component{

    render (){
        return(<>
            <Navigation />
            <Hero />
            <Carousel />
            <Footer />
            
            </>)
    }

}