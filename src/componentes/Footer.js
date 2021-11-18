import { FaFacebookSquare } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Nav} from "react-bootstrap";

export default function Footer(){

    return (
        <>
          <div className='footer'>
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
            <div className="d-flex ">
            <Nav>
              
              <Nav.Link href='./Home'><span className='white-link'>HOME</span></Nav.Link>
              <Nav.Link href='./Cities'><span className='white-link'>CITIES</span></Nav.Link>
            </Nav>
            </div>
          </div>
        </>
    )
}