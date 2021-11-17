import { Navbar, Nav, Container } from "react-bootstrap"
import { BiUserCircle } from "react-icons/bi";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" bg="warning" expand='lg' >
        <Container>
          <Navbar.Collapse className="justify-content-start" id='responsive-navbar-nav'>
            <Nav>
              
              <Nav.Link href='/'><span className='white-link'>HOME</span></Nav.Link>
              <Nav.Link href='/cities'><span className='white-link'>CITIES</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
              <Nav.Link href='/'><span className='white-link'>Sign In</span></Nav.Link>
              <Nav.Link href='/'><span className='white-link personita'><BiUserCircle/></span></Nav.Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        </Container>
      </Navbar>
      

      <div className="titulo-centro">
        <h1>MyTinerary</h1>
        </div>
        <div className="titulo-medio">
        <h1>Find your perfect trip,</h1> 
        <h4>designed by insiders who knows and love their cities!</h4>
      </div>

     
      {/* <div className='footer' >
          <div className=' d-flex justify-content-around align-items-center'>
            <div className='icon-f'>
            <FaFacebookSquare className='icon'/>
            </div>
            <div className='icon-f'>
            <FaTwitter className='icon'/>
            </div>
            <div className='icon-f'>
            <FaLinkedin className='icon'/>
            </div>
          </div>
      </div> */}
    </>
  )
}