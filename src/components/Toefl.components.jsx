import React from 'react'
import TOEFL from '../utils/Study.jpg';
import { Link } from 'react-router-dom';
const Toefl=()=>{
  return (
    <div>
    <div>
<div className='study_class' style={ {  width:'100vw',height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',justifyContent:'center',alignContent:'center', backgroundImage:`url(${TOEFL})` }}>
    
    <h1 className='title'>TOEFL</h1>
    <h3>Test of English as a Foreign Language</h3>
    <div className='rest_link'>
    <h1><Link to="/Pte" style={{color:'white'}}>PTE</Link></h1>
    <h1><Link to="/Ielts" style={{color:'white'}}>IELTS</Link></h1>
    </div>
</div>
</div>

<div className="study_details">
    <h3>TOEFL English Test Details in Nepal</h3>
    <p>
    <strong>Overview:</strong> The Test of English as a Foreign Language (TOEFL) is a standardized test designed to measure the English language proficiency of non-native speakers. It is widely accepted by universities, employers, and immigration authorities worldwide.
    </p>
    <h4>Types of TOEFL:</h4>
    <p>
    <strong>TOEFL iBT (Internet-Based Test):</strong> The most common format, delivered online.
    </p>
    <p>
        <strong>TOEFL PBT (Paper-Based Test):</strong>  Available in locations where the iBT is not accessible (less common).</p>
    <h4>Test Structure:</h4>
    <ol>
        <li><strong>Reading:</strong> 60-80 minutes</li>
        <ul>
        <li>3-4 passages with 12-14 questions each</li>
    </ul>

    <li><strong>Listening:</strong> 60-90 minutes</li>
        <ul>
        <li>4-6 lectures with 6 questions each</li>
        <li>2-3 conversations with 5 questions each</li>
    </ul>

    <li><strong>Speaking:</strong> 20 minutes</li>
        <ul>
        <li>6 tasks: 2 independent and 4 integrated (based on reading and listening)</li>
    </ul>
    <li><strong>Writing:</strong>50 minutes</li>
        <ul>
        <li>1 integrated task (20 minutes)</li>
        <li>1 independent task (30 minutes)</li>
    </ul>
    </ol>
    
    <h5>Scoring:</h5>
        <ul>
        <li>Each section is scored on a scale of 0-30.</li>
        <li>The total score ranges from 0-120.</li>
        </ul>
        

    <h5>Test Centers in Nepal:</h5>
    <ul>
        <li>TOEFL iBT is administered in various cities, including Kathmandu and Pokhara.</li>
        <li>Official test centers are managed by ETS (Educational Testing Service).</li>
    </ul>
    
    <h5>Registration:</h5>
    <ul>
        <li>Register online through the ETS TOEFL website.</li>
        <li>Choose your preferred test date and location.</li>
        <li>Pay the registration fee (approximately USD 195, but check the official website for the latest fee).</li>
    </ul>

    <h5>Preparation:</h5>
    <ul>
        <li>Use the official TOEFL preparation materials available on the ETS website.</li>
        <li>Enroll in TOEFL preparation courses offered by language institutes.</li>
        <li>Utilize online resources, practice tests, and study guides.</li>
    </ul>

    <h5>Test Day Requirements:</h5>
    <ul>
        <li>Arrive early at the test center.</li>
        <li>Bring a valid passport or national ID used during registration.</li>
        <li>Follow the instructions provided by the test center staff.</li>
    </ul>
    <h5>Results:</h5>
    <ul>
        <li>Results are available approximately 6 days after the test date.</li>
        <li>Access your scores online through the ETS TOEFL portal.</li>
        <li>Scores are valid for two years.</li>
    </ul>

    <h5>Additional Resources:</h5>
    <ul>
        <li>ETS TOEFL website: TOEFL</li>
        <li>Preparation materials: TOEFL Preparation</li>
    </ul>
<p>For the most accurate and up-to-date information, always check the official ETS TOEFL website.</p>
</div>
</div>
  )
}

export default Toefl;