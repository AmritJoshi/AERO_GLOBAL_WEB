import React from 'react'
import USFLAG from '../utils/US_Flag.jpg';
import '../style/stud.css';
import { Link } from 'react-router-dom';
const Std_US=()=>{
    
  return (
    <div>
    <div style={ {  width:'100vw',height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',justifyContent:'center',alignContent:'center', backgroundImage:`url(${USFLAG})` }}>
      <div className='countries' >
      <h3><Link to="/Study_in_AUS" style={{color:'white'}}>AUSTRALIA</Link></h3>
      <h3><Link to="/Study_in_CANADA" style={{color:'white'}}>CANADA</Link></h3>
      <h3><Link to="/Study_in_UK" style={{color:'white'}}>UK</Link></h3>
      <h3><Link to="/Study_in_DEN" style={{color:'white'}}>DENMARK</Link></h3>
      <h3><Link to="/Study_in_EU" style={{color:'white'}}>EUROPE</Link></h3>
      </div>
      </div>

      <p className='desc'>Studying in the USA offers international students a unique blend of high-quality education, cultural diversity, and abundant opportunities. American universities are renowned for their innovative research programs, diverse academic fields, and state-of-the-art facilities. Students benefit from a dynamic and inclusive environment that fosters personal and professional growth. Beyond academics, the USA provides a rich cultural experience, with diverse communities and numerous extracurricular activities. Networking opportunities with professionals from various industries enhance career prospects. Financial aid, scholarships, and on-campus jobs help manage expenses. Studying in the USA equips students with a global perspective and a competitive edge in their careers.</p>

      <h3>Requirements for International Students to Study in the USA</h3>
      <ol>
        <li><strong>Academic Records:</strong> Official transcripts from previous educational institutions.</li>
        <li><strong>English Proficiency:</strong> TOEFL, IELTS, or other accepted English language proficiency test scores.</li>
        <li><strong>Standardized Tests:</strong> SAT, ACT, GRE, or GMAT scores, depending on the program and university requirements.</li>
        <li><strong>Application Form:</strong> Completed application forms for the chosen universities.</li>
        <li><strong>Letters of Recommendation:</strong> Usually from teachers, professors, or employers.</li>
        <li><strong>Statement of Purpose:</strong> An essay outlining academic goals and reasons for choosing the specific program and university.</li>
        <li><strong>Financial Proof:</strong> Evidence of financial capability to cover tuition fees and living expenses (bank statements, sponsorship letters, etc.).</li>
        <li><strong>Visa:</strong> Valid student visa (F-1 or J-1) after receiving an acceptance letter.</li>
        <li><strong>Passport:</strong> A valid passport with an expiration date beyond the duration of the study program.</li>
        <li><strong>Medical Records:</strong> Immunization records and health insurance, as required by the university.</li>
      </ol>
      <p>Specific university requirements may vary.</p>
      </div>
  )
}

export default Std_US