import React from 'react';
import '../style/AboutUs.css';
import About_Us from '../utils/AboutUS.jpg';
import Laptops from '../utils/Laptops.jpg';
import Graduates from '../utils/Graduates.jpg';
import Box from './Box.components.jsx';
import LapRead from '../utils/ReadLap.jpg';
import Cop from '../utils/Cop.jpeg';
import University from '../utils/University.jpg';
import SumanK from '../utils/TeamImages/SumanK.jpeg';
import SumanS from '../utils/TeamImages/SumanS.jpeg';
import YogeshJ from '../utils/TeamImages/YogeshJ.jpeg';
import SamirT from '../utils/TeamImages/SamirT.jpeg';
const AboutUs=()=>{
  return (
    <div>
      <div style={ {  width:'100vw',height:'100vh',backgroundSize:'cover',backgroundRepeat:'no-repeat',justifyContent:'center',alignContent:'center', backgroundImage:`url(${About_Us})` }}>
      <div className='about' >
      <h1>Aero global consultancy</h1>
      <p>Aero Education Consultancy is a premier educational advisory firm dedicated to guiding students towards their academic dreams and career aspirations. With a deep understanding of the global education landscape, we specialize in providing tailored guidance for students seeking higher education opportunities abroad. Our team of experienced consultants offers personalized support in choosing the right programs, universities, and countries that align with each student’s goals and interests. At Aero Education Consultancy, we are committed to excellence, integrity, and the success of our clients, ensuring a smooth and informed journey from application to admission and beyond. Our mission is to empower students to reach new heights in their educational and professional endeavors through expert advice and unwavering support.
      </p>
      </div>
      </div>
      <div>
        <div className="Team">
        <h1>Our Team</h1>
        </div>
        <div className="portfolio-grid">
        <div className="CEO_DES">
        <img src={SumanK} alt="CEO" className='CEO'/>
          <h3 style={{marginTop:"5px"}}>Suman Kunwar</h3>
          <h3>CEO</h3>
        </div>
        <div className="SConsultant_DES">
          <img src={YogeshJ} alt="SConsultant" className="SConsultant" />
          <h3 style={{marginTop:"5px"}}>Yogesh Joshi</h3>
          <h3>Senior Consultant</h3>
        </div>
        <div className="COO_DES">
          <img src={SumanS} alt="COO" className="COO"/>
          <h3 style={{marginTop:"5px"}}>Suman Shrestha</h3>
          <h3>COO</h3>
        </div>
        <div className="AdHead_DES">
          <img src={SamirT} alt="AdHead" className="AdHead"/>
          <h3 style={{marginTop:"5px"}}>Samir Thakuri</h3>
          <h3>Administrative Head/Consultant</h3>
        </div>
        </div>
      </div>
      <div className='Aim'>
        <h1>Our Aim and Vison</h1>
        <h5>Aim:</h5>
        <p>Our aim is to empower students to achieve their academic and career goals by providing comprehensive, personalized guidance and support. We strive to connect students with educational institutions that best match their aspirations, ensuring a seamless and enriching transition to their desired programs and destinations.
</p>
        <h5>Vision:</h5>
        <p>Our vision is to be a global leader in educational consultancy, renowned for our commitment to excellence, integrity, and innovation. We envision a world where every student has access to the resources and opportunities needed to unlock their full potential, fostered by our dedicated support and expertise. Through our efforts, we aim to contribute to the creation of a well-informed, globally-minded community of learners and professionals who drive positive change and advancement in their fields.
</p>
      </div>

      <div className='whoarewe'>
        <h1>Who we are and how we formed</h1>
        <div  className='lapsandgrads'>
        <img src={Laptops} alt="Laptops" className='Laptops'/>
        <img src={Graduates} alt="Graduates" className='Graduates'/>
        </div>
        <div className='stories'>
          <Box img={Cop} text={"Copenhagen"} para={"Check out some of our favorite snapshots over the years! "}/>
          <Box img={LapRead} text={"Stories & Updates"} para={"Have we told you what's going on recently? Read about some of our favorite adventures and find out whats new."}/>
          <Box img={University} text={"Stories & Updates"} para={"A study buddy boosts motivation, provides support, enhances understanding, fosters accountability, and makes learning more engaging and effective."}/>
        </div>
      </div>

    </div>
  )
}

export default AboutUs;