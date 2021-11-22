import { Navbar, Nav, Container } from "react-bootstrap"
import { BiUserCircle } from "react-icons/bi";
import {Link} from 'react-router-dom';


export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" bg="warning" expand='lg' >
        <Container>
          <Navbar.Collapse className="justify-content-start" id='responsive-navbar-nav'>
            <Nav>
              
              <Link exact to="/"><span className='white-link'>HOME</span></Link>
              <Link to="/Cities"><span className='white-link'>CITIES</span></Link>
            </Nav>
          </Navbar.Collapse>
              <Link to='/'><span className='white-link'>Sign In</span></Link>
              <Link to='/'><span className='white-link personita'><BiUserCircle/></span></Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        </Container>
      </Navbar>
      

    </>
  )
}