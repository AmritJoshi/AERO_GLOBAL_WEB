import React from 'react'
import '../style/Home.css';
import firstimg from '../utils/first.jpeg';
import USA from '../utils/USA.jpeg';
import CANADA from '../utils/Canada.jpeg';
import Australia from '../utils/Australia.jpeg';
import UK from '../utils/UK.jpeg';
import Europe from '../utils/Europe.jpeg';
import Denmark from '../utils/Denmark.jpeg';
import PTE from '../utils/PTE.jpeg';
import Toefl from '../utils/TOEFL.jpeg';
import Ielts from '../utils/IELTS.jpeg';
import GRAD from '../utils/GRAD.jpeg';
import YoutubeEmbed from './Youtube_vid.components';
import '../style/Youtube_vid.css';
import { Link } from 'react-router-dom';

// import Googlemap from './Googlemap.components';

const Home = ()=>{
  return (
    <div>
        <div className='firstpage' style={ { filter:'brightness(60%)', width:'100vw',height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',justifyContent:'center',alignContent:'center', backgroundImage:`url(${firstimg})` }}>
            {/* <img src={firstimg} alt="firstimage" className='firstimage'/> */}
            <div className='firstpage_content'>
            <h1>Speedy Service At It's Best</h1>
            <h3>Career counseling + Visa guidance + Scholarship + documentation</h3>
            </div>
        </div>
    <div className='secondpage'>
        <h1 className='secondpage_heading'>Begin Your Journey With Us</h1>
        <p className='secondpage_paragraph'>At Aero Global Consultancy, we specialize in providing expert guidance and support for students aiming to pursue higher education abroad. Our experienced consultants offer personalized advice on university selection, application processes, and scholarship opportunities. We assist in preparing compelling personal statements, securing student visas, and acclimating to new educational environments. With a focus on individual aspirations and academic goals, Aero Global Consultancy ensures a smooth and successful journey from application to admission. Our comprehensive services and deep understanding of global education systems empower students to achieve their dreams and excel in their chosen fields. Partner with us for a brighter academic future.</p>
    </div>

    <div className='countrys'>
        <h1>Study Destination</h1>
        <div className='fst_countrys'>
            
            <div>
                <img src={USA} alt="USA" className='USA'/>
                <h1><Link to='/Study_in_US'>USA</Link></h1>
                </div>
            <div>
                <img src={Australia} alt="AUSTRALIA" className='AUSTRALIA'/>
                <h1><Link to="/Study_in_AUS">AUSTRALIA</Link></h1>
            </div>
            <div>
                <img src={CANADA} alt="CANADA" className='CANADA'/>
                <h1><Link to="Study_in_CANADA">CANADA</Link></h1>
            </div>
        </div>

        <div className='snd_countrys'>
            <div>
                <img src={UK} alt="UK" className='UK'/>
                <h1><Link to="/Study_in_UK">UK</Link></h1>
        </div>
        <div>
            <img src={Denmark} alt="DENMARK" className='DENMARK'/>
            <h1><Link to="/Study_in_DEN">DENMARK</Link></h1>
            </div>
            <div>
                <img src={Europe} alt="EUROPE" className='EUROPE'/>
                <h1><Link to="/Study_in_EU">EUROPE</Link></h1>
             </div>
        </div>
        <div>

        </div>
    </div>

    <div className='TEST_PREP'>
        <h1>Test Preparation</h1>

        <div className='test'>
      
            <div>
                <img src={Ielts} alt="IELTS" className='IELTS'/>
                <h1><Link to="/Ielts">IELTS</Link></h1>
                </div>
            <div>
                <img src={PTE} alt="PTE" className='PTE'/>
                <h1><Link to="/Pte">PTE</Link></h1>
            </div>
            <div>
                <img src={Toefl} alt="TOEFL" className='TOEFL'/>
                <h1><Link to="/Toefl">TOEFL</Link></h1>
            
        </div>
        </div>
    </div >

    <div className='grad_page' style={ { filter:'brightness(60%)', paddingTop:'20px',paddingBottom:'50px',backgroundSize:'cover',backgroundRepeat:'no-repeat',justifyContent:'center',alignContent:'center', backgroundImage:`url(${GRAD})` }}>
        <h2>
        MY JOURNEY FROM NEPAL TO EUROPE AND USA
        </h2>
        <p>
        Hello Everyone,
        </p>
        <p>
        I am Mr. Suman Kunwar, the CEO of Aero Global Consultancy. Today, I would like to share some memories from my journey, transitioning from a student to a professional.
        </p>
        <p>
        Like many students in Nepal, I was confused in 2015 AD after completing my Bachelor's degree, unsure of where to pursue further studies. An opportunity arose for me to study in Denmark, a beautiful country and a hub of opportunities for international students. The environment both inside and outside the college was fantastic, and the people and colleagues were incredibly friendly.
        </p>
        <p>
        During my time in Denmark, I worked in various international restaurants as a chef, receptionist in hotels, storekeeper, and in food factories. Upon completing my Master's degree in 2019 AD, I had another turning point in my life: the chance to move to the USA, a dream country for many. Working there, I had the pleasure of collaborating with people from around the globe, including countries I hadn't even heard of. This experience was immensely interesting and informative. later on, I started to work as an Education Counselor. A few years after accumulating knowledge and experience, I moved back to Nepal.
        </p>
        <p>
        The opportunity to travel worldwide and gather priceless memories became possible because I took my first steps toward my ambitions. My ambition to complete my studies, explore different places, cultures, & countries, and achieve my academic as well as financial goals has driven my journey.
        </p>
    </div>
    <div className='Youtube'>
    <div className='embed'>
    <YoutubeEmbed embedId="wFr_G4jxIBw" />
    </div>
    <div className='parma'>
    <p>Tivoli Gardens in Copenhagen is a magical amusement park and pleasure garden, enchanting visitors since 1843. Located in the heart of the city, Tivoli blends charming vintage rides, modern attractions, and beautiful gardens. It's famous for its wooden roller coaster, romantic boat rides, and vibrant entertainment, including concerts and pantomime theater. Seasonal events, such as Halloween and Christmas markets, add to its charm. Tivoli's stunning architecture, colorful lights, and delightful dining options create a unique, fairy-tale atmosphere. A visit to Tivoli Gardens offers a perfect mix of nostalgia, excitement, and cultural experiences, making it a must-see destination in Copenhagen.</p>
    </div>
    </div>
    {/* <div>
        <Googlemap/>
    </div> */}
    <div className='consols'>
        <h1>OUR CONSULTANTS</h1>
    <div className="first_consols">
        <ul>
        <li><strong>Nepal</strong></li>
        <li>Suman Kunwar</li>
        <li>4th Floor, IT Plaza, Kamaladi 28, Kathmandu</li>
        <li>Email:- kunwarsuman109@gmail.com</li>
        <li>Phone:- +977-9704415741, +977-9851317221</li>
        </ul>
        <ul>
        <li><strong>USA</strong></li>
        <li>Sanjiv Thapa</li>
        <li>8237 51st Ave, Elmhurst, NY 11373,</li>
        <li>Email:- jdtnepal2015@gmail.com</li>
        <li>Phone:- +1 4787-772-746</li>
        </ul>
        <ul>
        <li><strong>Netherland</strong></li>
        <li>Puja Sapkota</li>
        <li>22-53, Eindhoven, 5611 Netherland</li>
        <li>Email:- sapkotapuja34@gmail.com</li>
        <li>Phone:- +31 687918823</li>
        </ul>
    </div>
    <div className="second_consols">
    <ul>
        <li><strong>Czech Republic</strong></li>
        <li>Yogesh Joshi</li>
        <li>Email:- joshiyogesh144@gmail.com</li>
        <li>Linkedin:<a href='http://linkedin.com/in/yogesh-joshi-7a0b3420b' rel="noopener noreferrer" target='_blank'> Yogesh Joshi</a></li>
        <li>WhatsApp: +977-9848738992</li>
        </ul>
        <ul>
        <li><strong>Australia</strong></li>
        <li>Niranjan Thapa</li>
        <li>5\60 central avenue moonah, Tasmania</li>
        <li>Email:- nirzn7@gmail.com</li>
        <li>Phone:- +61452424292</li>
        </ul>
        <ul>
        <li><strong>Denmark</strong></li>
        <li>Pawan Ranabhat</li>
        <li>Åfløjen 34, 2700 Copenhagen</li>
        <li>Email:- rbpawan7@gmail.com</li>
        <li>Twitter: @rbpawan07</li>
        <li>Phone:- +45 25172892</li>
        </ul>
    </div>
    </div>
    </div>
  )
}
export default Home;
