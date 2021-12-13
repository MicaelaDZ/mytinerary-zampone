import { Navbar, Nav, Container } from "react-bootstrap"
import { BiUserCircle } from "react-icons/bi";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

function Navigation(props) {
  console.log(props)
  return (
    <>
      <Navbar collapseOnSelect fixed="top" className="Navb col-12 col-lg-12 col-md-12 col-sm-12" expand='md' >
        <Container>
          <Navbar.Collapse className="justify-content-start" id='responsive-navbar-nav'>
            <Nav>
              
              <Link to="/"><span className='white-link'>Home</span></Link>
              <Link to="/cities"><span className='white-link'>Cities</span></Link>
              <Link to='/signup'><span className='white-link'>Sign Up</span></Link>
              <Link to='/signin'><span className='white-link'>Sign In</span></Link>
            </Nav>
        {props.newUser !== "" ? <h5>Welcome, {props.name}</h5> : <h5>You are not registered</h5> }
          </Navbar.Collapse>
              <Link to='/'><span className='personita'><BiUserCircle/></span></Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        </Container>
      </Navbar>
      

    </>
  )
}

const mapStateToProps = (state) => { 
  return {
    newUser: state.authReducer.newUser
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)