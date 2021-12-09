import Navigation from "../componentes/Navigation";
import Footer from "../componentes/Footer";
import SignupComponent from "../componentes/SignupComponent";
import React from 'react';
import '../App.css';


export default class SignUp extends React.Component{
  render (){
    
      return(<>
          <Navigation />                     
          <SignupComponent />
          <Footer />
          
          </>)
  }

}