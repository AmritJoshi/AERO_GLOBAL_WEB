import React from 'react'
import AUSFLAG from '../utils/Australia_Flag.jpg';
import '../style/stud.css';
import { Link } from 'react-router-dom';
const Std_AUS=()=>{
    
  return (
    <div>
    <div style={ {  width:'100vw',height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',justifyContent:'center',alignContent:'center', backgroundImage:`url(${AUSFLAG})` }}>
      <div className='countries' >
      <h3><Link to='/Study_in_US' style={{color:'#000000'}}>USA</Link></h3>
      <h3><Link to="/Study_in_CANADA" style={{color:'#000000'}}>CANADA</Link></h3>
      <h3><Link to="/Study_in_UK" style={{color:'#000000'}}>UK</Link></h3>
      <h3><Link to="/Study_in_DEN" style={{color:'#000000'}}>DENMARK</Link></h3>
      <h3><Link to="/Study_in_EU" style={{color:'#000000'}}>EUROPE</Link></h3>
      </div>
      </div>

      <p className='desc'>Studying in Australia offers international students world-class education, a diverse cultural experience, and stunning natural landscapes. Australian universities are renowned for their high academic standards, innovative research, and strong industry connections. Students can choose from a wide range of programs and benefit from a supportive and inclusive environment. Australia's multicultural society allows for rich cultural exchanges and unique experiences. Additionally, students can enjoy a high quality of life, safe cities, and numerous outdoor activities. Scholarships and work opportunities help manage living expenses. Studying in Australia equips students with valuable skills and a global perspective, enhancing their career prospects.
</p>

      <h3>Requirements for International Students to Study in the Australia</h3>
      <ol>
        <li><strong>Academic Records:</strong> Certified copies of transcripts and certificates from previous educational institutions.</li>
        <li><strong>English Proficiency:</strong> TOEFL, IELTS, or other accepted English language proficiency test scores.</li>
        <li><strong>Standardized Tests:</strong> Depending on the program, GMAT or GRE scores may be required.</li>
        <li><strong>Application Form:</strong> Completed application forms for the chosen universities.</li>
        <li><strong>Letters of Recommendation:</strong> Usually from teachers, professors, or employers.</li>
        <li><strong>Statement of Purpose:</strong> An essay outlining academic goals and reasons for choosing the specific program and university.</li>
        <li><strong>Financial Proof:</strong> Evidence of financial capability to cover tuition fees and living expenses (bank statements, sponsorship letters, etc.).</li>
        <li><strong>Visa:</strong> Valid student visa (Subclass 500) after receiving an acceptance letter.</li>
        <li><strong>Passport:</strong> A valid passport with an expiration date beyond the duration of the study program.</li>
        <li><strong>Medical Records:</strong> Health examinations and proof of Overseas Student Health Cover (OSHC).</li>
        <li><strong>Portfolio:</strong>For creative courses, a portfolio of work may be required.</li>
      </ol>
      <p>Specific university requirements may vary.</p>
      </div>
  )
}

export default Std_AUS