import {useRef} from 'react'
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import authAction from '../redux/actions/authAction';
import GoogleLogin from 'react-google-login'

function SignInComponent(props){
  const responseGoogle = (response) => {
    console.log(response);
  }
  !props.token && props.signInToken()
  const email = useRef()
  const password = useRef()
  
  function handleSignIn(e) {
    e.preventDefault()
   
    props.signIn(email.current.value, password.current.value)

    email.current.value = ""
    password.current.value = ""
      
  }
 
    return(
        <>
        <div className="contenedorsignin">
        <div className="formulario">        
        <form className="form" onSubmit={handleSignIn}>  
        <legend>Sign In</legend>         
            <label htmlFor="email" >Email </label>
            <input type="email" placeholder="E-mail" ref={email}id="email" />
            <label htmlFor="pass" >Password</label>
            <input type="password" ref={password} placeholder="Password"className=""  id="pass" />
            <input className="botones p-1 fs-small btn-form txt-center" type="submit" value="Log in"/>
            <div className="already">
              <p>Don't you have an account yet? </p>
              <Link to='/signup'><span> Create new account</span></Link>            
            </div>
            <div className="googlelogin">
              <GoogleLogin
              clientId="976419191370-0f3qd6gishicdla3a3sn99f76pht65v2.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              />

              </div>
        </form>
        </div>
       
        </div>
       
      </>
      
    )
}

const mapStateToProps= (state)=>{  
  return  {
    user: state.authReducer.user ,  
    token: state.authReducer.token 
  }
}

const mapDispatchToProps= {
    signIn: authAction.signIn,
    signInToken: authAction.signInToken //chequea si hay token o no y lo traduce
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent)