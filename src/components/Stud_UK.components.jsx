import React from 'react';
import UKFLAG from '../utils/uk-flag.jpg';
import '../style/stud.css';
import { Link } from 'react-router-dom';
const Std_UK=()=>{
    
  return (
    <div>
    <div style={ {  width:'100vw',height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',justifyContent:'center',alignContent:'center', backgroundImage:`url(${UKFLAG})` }}>
      <div className='countries' >
      <h3><Link to='/Study_in_US' style={{color:'#000000'}}>USA</Link></h3>
      <h3><Link to="/Study_in_AUS" style={{color:'#000000'}}>AUSTRALIA</Link></h3>
      <h3><Link to="/Study_in_CANADA" style={{color:'#000000'}}>CANADA</Link></h3>
      <h3><Link to="/Study_in_DEN" style={{color:'#000000'}}>DENMARK</Link></h3>
      <h3><Link to="/Study_in_EU" style={{color:'#000000'}}>EUROPE</Link></h3>
      </div>
      </div>

      <p className='desc'>Studying in the UK offers international students an unparalleled educational experience, combining prestigious universities, diverse cultural interactions, and rich historical settings. UK institutions are renowned for their academic excellence, innovative research, and strong emphasis on critical thinking. Students can choose from a wide array of programs and benefit from a multicultural environment that fosters global connections. The UK's vibrant cities and picturesque countryside provide a perfect balance of academic rigor and leisure. Scholarships and part-time work opportunities help manage living expenses. Studying in the UK equips students with a world-class education, enhancing their career prospects and personal growth.

</p>

      <h3>Requirements for International Students to Study in the UK</h3>
      <ol>
        <li><strong>Academic Records:</strong> Certified copies of transcripts and certificates from previous educational institutions.</li>
        <li><strong>English Proficiency:</strong> TOEFL, IELTS, or other accepted English language proficiency test scores.</li>
        <li><strong>Standardized Tests:</strong> Depending on the program, GMAT or GRE scores may be required.</li>
        <li><strong>Application Form:</strong> Completed application forms for the chosen universities, often through UCAS for undergraduate programs.</li>
        <li><strong>Letters of Recommendation:</strong> Usually from teachers, professors, or employers.</li>
        <li><strong>Statement of Purpose:</strong> An essay outlining academic goals and reasons for choosing the specific program and university.</li>
        <li><strong>Financial Proof:</strong> Evidence of financial capability to cover tuition fees and living expenses (bank statements, sponsorship letters, etc.).</li>
        <li><strong>Visa:</strong> Valid Tier 4 (General) student visa after receiving a Confirmation of Acceptance for Studies (CAS) from the university.</li>
        <li><strong>Passport:</strong> A valid passport with an expiration date beyond the duration of the study program.</li>
        <li><strong>Medical Records:</strong> Tuberculosis (TB) test results and proof of health insurance, as required by the university.</li>
        <li><strong>Portfolio:</strong>For creative courses, a portfolio of work may be required.</li>
      </ol>
      <p>Specific university requirements may vary.</p>
      </div>
  )
}

export default Std_UK