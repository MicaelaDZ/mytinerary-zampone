import { Navbar, Nav, Container } from "react-bootstrap"
import { BiUserCircle } from "react-icons/bi";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import authAction from "../redux/actions/authAction";

function Navigation(props) {
  localStorage.getItem("token") && !props.token && props.signInToken()
  return (
    <>
      <Navbar collapseOnSelect fixed="top" className="Navb col-12 col-lg-12 col-md-12 col-sm-12" expand='md' >
        <Container>
          <Navbar.Collapse className="justify-content-start" id='responsive-navbar-nav'>
            <Nav>
              <div className="welcome">
              <Link to="/"><span className='white-link'>Home</span></Link>
              <Link to="/cities"><span className='white-link'>Cities</span></Link>
              </div>
              </Nav>
              </Navbar.Collapse>

              <Navbar.Collapse className="justify-content-end">
                <Nav>
              {!props.token ? (
                <div className="welcome" >
              <Link to='/signup'><span className='white-link'>Sign Up</span></Link>
              <Link to='/signin'><span className='white-link'>Sign In</span></Link>
              <Link to='/signin'><span className='personita'><BiUserCircle/></span></Link>
                </div>
              ) : (
                <>
                <div className="welcome2">
                  <div>
                      <h5 className="m-2">¡Welcome {props.token.name}!</h5> 
                    </div>
                  <div className="account-img">
                    <img  className="account-img" alt="img" src={props.token.photo ? props.token.photo  : "https://static.wikia.nocookie.net/disney/images/8/82/Nemo.png/revision/latest?cb=20130819182247&path-prefix=es" } />
                  </div>                
                </div>  
                <div className="d-flex flex-end">
                <Link to="/" onClick={() => {props.signOut() }}><span className="white-link">Sign out</span> </Link>
               </div>     
                </>
              ) }      
            </Nav>
        
          </Navbar.Collapse>
             
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        </Container>
      </Navbar>
      

    </>
  )
}

const mapStateToProps = (state) => { 
  return {
    user: state.authReducer.user,
    token: state.authReducer.token
  }
}

const mapDispatchToProps = {
  signIn: authAction.signIn,
  signInToken: authAction.signInToken,
  signOut: authAction.signOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)