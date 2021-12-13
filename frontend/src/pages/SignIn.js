import Navigation from "../componentes/Navigation";
import Footer from "../componentes/Footer";
import SignInComponent from "../componentes/SignInComponent";
import React from 'react';
import '../App.css';


export default class SignUp extends React.Component{
  render (){
    
      return(<>
          <Navigation />                     
          <SignInComponent />
          <Footer />
          
          </>)
  }

}