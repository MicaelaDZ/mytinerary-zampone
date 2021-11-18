import { Navbar, Nav, Container } from "react-bootstrap"
import { BiUserCircle } from "react-icons/bi";


export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" bg="warning" expand='lg' >
        <Container>
          <Navbar.Collapse className="justify-content-start" id='responsive-navbar-nav'>
            <Nav>
              
              <Nav.Link href='./Home'><span className='white-link'>HOME</span></Nav.Link>
              <Nav.Link href='./Cities'><span className='white-link'>CITIES</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
              <Nav.Link href='/'><span className='white-link'>Sign In</span></Nav.Link>
              <Nav.Link href='/'><span className='white-link personita'><BiUserCircle/></span></Nav.Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        </Container>
      </Navbar>

    </>
  )
}