import React from 'react'
import IELTS from '../utils/Study.jpg';
import '../style/teststyle.css'
import { Link } from 'react-router-dom';
const Ielts = ()=>{
  return (
    <div>
        <div>
    <div className='study_class' style={ {  width:'100vw',height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',justifyContent:'center',alignContent:'center', backgroundImage:`url(${IELTS})` }}>
        
        <h1 className='title'>IELTS</h1>
        <h3>International English Language Testing System</h3>
        <div className='rest_link'>
        <h1><Link to="/Pte" style={{color:'white'}}>PTE</Link></h1>
        <h1><Link to="/Toefl" style={{color:'white'}}>TOEFL</Link></h1>
        </div>
    </div>
    </div>

    <div className="study_details">
        <h3>IELTS English Test </h3>
        <p>
        <strong>Overview:</strong> The International English Language Testing System (IELTS) is a widely recognized English language proficiency test for non-native English speakers. It is accepted by universities, employers, immigration authorities, and professional bodies around the world.
        </p>
        <h4>Types of IELTS:</h4>
        <p>
        <strong>IELTS Academic:</strong> For students applying to higher education or professional registration.
        </p>
        <p>
            <strong>IELTS General Training:</strong> For those migrating to English-speaking countries for secondary education, work experience, or training programs.</p>
        <h4>Test Structure:</h4>
        <ol>
            <li><strong>Listening:</strong> 30 minutes</li>
            <li><strong>Reading:</strong> 60 minutes</li>
            <li><strong>Writing:</strong> 60 minutes</li>
            <li><strong>Speaking:</strong> 11-14 minutes</li>
        </ol>

        <h5>Scoring:</h5>
            <ul>
            <li>Each section is scored on a band scale of 1-9.</li>
            <li>The overall band score is the average of the four section scores.</li>
            </ul>
            

        <h5>Test Centers in Nepal:</h5>
        <ul>
            <li>IELTS is administered in various cities including Kathmandu, Pokhara, and Biratnagar.</li>
            <li>Official test centers are managed by the British Council and IDP Education.</li>
        </ul>
        
        <h5>Registration:</h5>
        <ul>
            <li>Register online through the British Council Nepal or IDP Education Nepal websites.</li>
            <li>Choose your preferred test date and location.</li>
            <li>Pay the registration fee (typically around NPR 25,300, but check the official websites for the latest fee).</li>
        </ul>

        <h5>Preparation:</h5>
        <ul>
            <li>Take practice tests available on the official IELTS website.</li>
            <li>Enroll in preparatory courses offered by British Council Nepal and other language institutes.</li>
            <li>Use online resources, including sample questions, study materials, and tips.</li>
        </ul>

        <h5>Test Day Requirements:</h5>
        <ul>
            <li>Arrive early at the test center.</li>
            <li>Bring a valid passport or national ID used during registration.</li>
            <li>Follow the instructions provided by the test center staff.</li>
        </ul>
        <h5>Results:</h5>
        <ul>
            <li>Results are usually available 13 days after the test date.</li>
            <li>Access your scores online through the British Council or IDP Education portals.</li>
            <li>A hard copy of the Test Report Form (TRF) will be sent to your address.</li>
        </ul>

        <h5>Additional Resources:</h5>
        <ul>
            <li>British Council Nepal: IELTS Nepal</li>
            <li>IDP Education Nepal: IELTS Nepal</li>
        </ul>
    <p>For the most accurate and up-to-date information, always check the official websites of the British Council and IDP Education in Nepal.</p>
    </div>
    </div>
  )
}

export default Ielts;