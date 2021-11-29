import React from 'react';
import Navigation from '../componentes/Navigation';
import Hero from '../componentes/Hero';
import Footer from '../componentes/Footer';
import '../App.css';
import MultipleRows from '../componentes/MultipleRows';




export default class Home extends React.Component{
    render (){
      
        return(<>
            <Navigation />                     
            <Hero/>
            <MultipleRows />
            <Footer />
            
            </>)
    }

}