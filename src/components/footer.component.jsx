import React from "react";
import "../style/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareFacebook,faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
  return (
  <div>
    
  <div className="SocialMedia">
  <a href='https://www.instagram.com/aero_global_consultancy_nepal/profilecard/?igsh=ejMxaGQ3cHgwcnI5' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faSquareInstagram} style={{width:'40px',height:'40px'}}/></a>
  <a href='https://www.facebook.com/profile.php?id=61565007855319' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faSquareFacebook} style={{width:'40px',height:'40px',marginLeft:'4px'}} /></a>
  <a href="https://np.linkedin.com/in/aero-global-consultancy-20a13531a"  rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{width:'40px',height:'40px',marginLeft:'4px'}} /></a>
  <FontAwesomeIcon icon={faYoutube} style={{width:'40px',height:'40px',marginLeft:'4px'}} />
  </div>
  <div className="Details">
    <p>All Copy Right Reserved &#169;</p>
  </div>
  </div>
  )
}

export default Footer;