import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap"
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import authAction from "../redux/actions/authAction";

function Navigation(props) {
  localStorage.getItem("token") && !props.token && props.signInToken()
  let userphoto = <img   
  className="account-img"
  alt="userphoto"
  src="https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146"/>

  return (
     <>
      <Navbar className="Navb p-1" collapseOnSelect fixed="top" expand="lg" variant="dark">
        <Container >
          <Link className="myt" to="/">
            
            <Navbar.Brand>
              <span className="yellow">MyTinerary </span>                           
            </Navbar.Brand>
            </Link>
            <Navbar.Brand>
            {props.token ? (
               <span className="welc"> ¡Welcome,  {props.token.name}! </span> ) : <span className="welc">You're not registered</span>}
            </Navbar.Brand>
            
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link as={Link} to="/">
                <span className="white-link ">Home</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/cities">
                <span className="white-link ">Cities</span>
              </Nav.Link>

              {!props.token ? (
              <NavDropdown className="navText navIcon" title={userphoto} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/signup">Sign up</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signin">Sign in</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <NavDropdown
                  className="white-link "
                  title={
                    <img
                      src={
                        props.token.photo
                          ? props.token.photo
                          : "https://static.wikia.nocookie.net/disney/images/8/82/Nemo.png/revision/latest?cb=20130819182247&path-prefix=es"
                      }
                      className="account-img"
                      alt="user_photo"
                    />
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <NavDropdown.Item as={Link} onClick={() => { props.signOut() }} to="/signin">Sign Out</NavDropdown.Item>
                    
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            </Nav>
          </Navbar.Collapse>
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

