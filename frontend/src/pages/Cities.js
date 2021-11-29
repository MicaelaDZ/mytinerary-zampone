import React from 'react'
import Navigation from '../componentes/Navigation'
import '../App.css'
import AllCities from '../componentes/AllCities'
import Footer from '../componentes/Footer'
import Cards from '../componentes/Cards'

export default class Cities extends React.Component{
    render(){
        return(
            <>
            <Navigation />
             <AllCities />
             <Cards />
             <Footer />
           
            </>
        )
    }
}