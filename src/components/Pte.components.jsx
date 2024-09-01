import React from 'react'
import PTE from '../utils/Study.jpg';
import '../style/teststyle.css';
import { Link } from 'react-router-dom';
const Pte=()=>{
  return (
    <div>
        <div>
    <div className='study_class' style={ {  width:'100vw',height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',justifyContent:'center',alignContent:'center', backgroundImage:`url(${PTE})` }}>
        
        <h1 className='title'>PTE</h1>
        <h3>Pearson Test of English</h3>
        <div className='rest_link'>
        <h1><Link to="/Ielts" style={{color:'white'}}>IELTS</Link></h1>
        <h1><Link to="/Toefl" style={{color:'white'}}>TOEFL</Link></h1>
        </div>
    </div>
    </div>

    <div className="study_details">
        <h3>PTE English Test Details in Nepal </h3>
        <p>
        <strong>Overview:</strong> The Pearson Test of English (PTE) is a computer-based English language proficiency test designed for non-native speakers who need to demonstrate their English language skills for study, migration, or professional purposes.
        </p>
        <h4>Types of PTE:</h4>
        <p>
        <strong>PTE Academic:</strong> For students applying to educational institutions and for visa applications.
        </p>
        <p>
            <strong>PTE General:</strong>  For work, training, and immigration purposes (less commonly required than PTE Academic).</p>
        <h4>Test Structure:</h4>
        <ol>
            <li><strong>Speaking & Writing:</strong> 77-93 minutes</li>
            <ul>
            <li>Personal Introduction</li>
            <li>Read Aloud</li>
            <li>Repeat Sentence</li>
            <li>Describe Image</li>
            <li>Re-tell Lecture</li>
            <li>Answer Short Question</li>
            <li>Summarize Written Text</li>
            <li>Essay</li>
        </ul>

        <li><strong>Reading:</strong> 32-41 minutes</li>
            <ul>
            <li>Multiple-choice</li>
            <li>Re-order Paragraphs</li>
            <li>Fill in the Blanks</li>
        </ul>

        <li><strong>Listening:</strong> 45-57 minutes</li>
            <ul>
            <li>Summarize Spoken Text</li>
            <li>Multiple-choice</li>
            <li>Fill in the Blanks</li>
            <li>Highlight Correct Summary</li>
            <li>Select Missing Word</li>
            <li>Highlight Incorrect Words</li>
            <li>Write from Dictation</li>
        </ul>
        </ol>
        
        <h5>Scoring:</h5>
            <ul>
            <li>Scores range from 10 to 90, with detailed scores for each skill (listening, reading, speaking, writing).</li>
            </ul>
            

        <h5>Test Centers in Nepal:</h5>
        <ul>
            <li>PTE test centers are available in major cities such as Kathmandu and Pokhara.</li>
            <li>Official test centers are managed by Pearson VUE.</li>
        </ul>
        
        <h5>Registration:</h5>
        <ul>
            <li>Register online through the Pearson PTE website.</li>
            <li>Choose your preferred test date and location.</li>
            <li>Pay the registration fee (approximately USD 170, but check the official website for the latest fee).</li>
        </ul>

        <h5>Preparation:</h5>
        <ul>
            <li>Use the official PTE preparation materials available on the Pearson website.</li>
            <li>Enroll in PTE preparation courses offered by various language institutes.</li>
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
            <li>Results are typically available within 48 hours after the test.</li>
            <li>Access your scores online through the Pearson PTE portal.</li>
            <li>Scores are valid for two years.</li>
        </ul>

        <h5>Additional Resources:</h5>
        <ul>
            <li>Pearson PTE website: <a href='https://www.pearsonpte.com'>PTE Academic</a></li>
            <li>Preparation materials: PTE Preparation</li>
        </ul>
    <p>For the most accurate and up-to-date information, always check the official Pearson PTE website.</p>
    </div>
    </div>
  )
}

export default Pte;