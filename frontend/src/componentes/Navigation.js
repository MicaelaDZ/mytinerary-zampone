import { Navbar, Nav, Container } from "react-bootstrap"
import { BiUserCircle } from "react-icons/bi";
import {Link} from 'react-router-dom';


export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" className="Navb col-12 col-lg-12 col-md-12 col-sm-12" expand='md' >
        <Container>
          <Navbar.Collapse className="justify-content-start" id='responsive-navbar-nav'>
            <Nav>
              
              <Link to="/"><span className='white-link'>HOME</span></Link>
              <Link to="/Cities"><span className='white-link'>CITIES</span></Link>
            </Nav>
          </Navbar.Collapse>
              <Link to='/'><span className='white-link'>Sign In</span></Link>
              <Link to='/'><span className='personita'><BiUserCircle/></span></Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        </Container>
      </Navbar>
      

    </>
  )
}