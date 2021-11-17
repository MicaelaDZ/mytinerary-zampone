import { FaFacebookSquare } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
        </div>
        </>
    )
}