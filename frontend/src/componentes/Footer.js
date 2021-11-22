import { FaFacebookSquare } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Nav} from "react-bootstrap";
import {Link} from 'react-router-dom';

export default function Footer(){

    return (
        
          <div className='footer'>
            <div className>
              {/* <h4>Social</h4> */}
            <div className=' d-flex '>
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
            </div>
            <div className="">
              {/* <h4>Explore</h4> */}
            <Nav>              
              <Link exact to="/"><span className='white-link'>HOME</span></Link>
              <Link to="/Cities"><span className='white-link'>CITIES</span></Link>
            </Nav>
            </div>
        </div>   
    )
}                                                                                  