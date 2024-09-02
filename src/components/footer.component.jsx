import React from "react";
import "../style/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareFacebook,faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
  return (
  <div>
    
  <div className="SocialMedia">
  <FontAwesomeIcon icon={faSquareInstagram} style={{width:'40px',height:'40px'}}/>
  <FontAwesomeIcon icon={faSquareFacebook} style={{width:'40px',height:'40px',marginLeft:'4px'}} />
  <FontAwesomeIcon icon={faLinkedin} style={{width:'40px',height:'40px',marginLeft:'4px'}} />
  <FontAwesomeIcon icon={faYoutube} style={{width:'40px',height:'40px',marginLeft:'4px'}} />
  </div>
  <div className="Details">
    <p>All Copy Right Reserved &#169;</p>
  </div>
  </div>
  )
}

export default Footer;