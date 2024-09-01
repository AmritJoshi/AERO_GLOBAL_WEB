import React from 'react'
import CANFLAG from '../utils/Canada_Flag.jpg';
import '../style/stud.css';
import { Link } from 'react-router-dom';
const Std_CAN=()=>{
    
  return (
    <div>
    <div style={ {  width:'100vw',height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',justifyContent:'center',alignContent:'center', backgroundImage:`url(${CANFLAG})` }}>
      <div className='countries' >
      <h3><Link to='/Study_in_US' style={{color:'white'}}>USA</Link></h3>
      <h3><Link to="/Study_in_AUS" style={{color:'white'}}>AUSTRALIA</Link></h3>
      <h3><Link to="/Study_in_UK" style={{color:'white'}}>UK</Link></h3>
      <h3><Link to="/Study_in_DEN" style={{color:'white'}}>DENMARK</Link></h3>
      <h3><Link to="/Study_in_EU" style={{color:'white'}}>EUROPE</Link></h3>
      </div>
      </div>

      <p className='desc'>Studying in Canada offers international students a high-quality education, diverse cultural experiences, and a welcoming environment. Canadian universities are globally recognized for their academic excellence, innovative research, and modern facilities. Students can choose from a wide range of programs across various disciplines. The multicultural society in Canada provides a rich cultural exchange and fosters a sense of inclusion and community. With safe cities and beautiful landscapes, students can enjoy a balanced lifestyle. Scholarships, work opportunities, and affordable tuition fees help manage expenses. Studying in Canada equips students with valuable skills and a global perspective, enhancing their career prospects.
</p>

      <h3>Requirements for International Students to Study in the Canada</h3>
      <ol>
        <li><strong>Academic Records:</strong> Certified copies of transcripts and certificates from previous educational institutions.</li>
        <li><strong>English Proficiency:</strong>  IELTS, TOEFL, or other accepted English proficiency test scores; TEF or other French proficiency test scores for French-speaking programs.</li>
        <li><strong>Standardized Tests:</strong> Depending on the program, GMAT or GRE scores may be required.</li>
        <li><strong>Application Form:</strong> Completed application forms for the chosen universities.</li>
        <li><strong>Letters of Recommendation:</strong> Usually from teachers, professors, or employers.</li>
        <li><strong>Statement of Purpose:</strong> An essay outlining academic goals and reasons for choosing the specific program and university.</li>
        <li><strong>Financial Proof:</strong> Evidence of financial capability to cover tuition fees and living expenses (bank statements, sponsorship letters, etc.).</li>
        <li><strong>Visa:</strong> Valid study permit and visa (apply through the Canadian visa office after receiving an acceptance letter).</li>
        <li><strong>Passport:</strong> A valid passport with an expiration date beyond the duration of the study program.</li>
        <li><strong>Medical Records:</strong> Medical examinations and proof of health insurance, as required by the university.</li>
        <li><strong>Portfolio:</strong>For creative courses, a portfolio of work may be required.</li>
      </ol>
      <p>Specific university requirements may vary.</p>
      </div>
  )
}

export default Std_CAN