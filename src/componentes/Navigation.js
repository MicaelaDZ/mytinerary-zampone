import { Navbar, Nav, Container } from "react-bootstrap"

export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" bg="light" expand='lg' >
        <Container>
          <Navbar.Brand href="/"><span className='yellow'>My</span><span className='white'>Tinerary</span></Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className="justify-content-end" id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='/'><span className='white-link'>Home</span></Nav.Link>
              <Nav.Link href='/cities'><span className='white-link'>Cities</span></Nav.Link>
              <Nav.Link href='/'><span className='white-link'>Sign Up</span></Nav.Link>
              <Nav.Link href='/'><span className='white-link'>Sign In</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}