import React from 'react';
import '../style/Blog.css';
import picture1 from '../utils/picture1.jpeg';
import picture2 from '../utils/picture2.jpeg';
import picture3 from '../utils/picture3.jpeg';
import picture4 from '../utils/picture4.jpeg';
import Neatherland from '../utils/neatherlands.jpg';
import Sanj from '../utils/Sanj.jpeg';
const Blog = ()=>{
  return (
    <div>
      <div className='Nether'>
        <h1>Netherlands for Higher Education</h1>
        <img src={Neatherland} alt="Neatherland" className='Neatherland'/>
        <p>The Netherlands, renowned for its innovative education system and high-quality universities, is a popular destination for international students. Dutch universities offer a diverse range of English-taught programs, attracting students from around the globe. The country’s focus on critical thinking, practical application, and research ensures a well-rounded and dynamic educational experience.</p>
        <p>Dutch higher education institutions are divided into research universities and universities of applied sciences. Research universities focus on theoretical and research-oriented programs, while universities of applied sciences emphasize practical skills and professional training. This variety allows students to choose programs that best suit their career goals and learning preferences.</p>
        <p>The Netherlands is known for its inclusive and multicultural society, making it an inviting environment for international students. The friendly atmosphere, combined with the Dutch proficiency in English, ensures that students can easily adapt and thrive. Additionally, the country's strategic location in Europe provides opportunities for travel and cultural exploration.</p>
        <p>Financially, studying in the Netherlands is more affordable compared to other popular destinations like the US or UK. Dutch universities offer various scholarships and grants to help international students manage their expenses. Moreover, the Dutch government allows international students to work part-time, providing an additional source of income.</p>
        <p>Overall, the Netherlands offers a unique blend of high-quality education, cultural diversity, and affordability. International students in the Netherlands gain valuable academic knowledge, practical skills, and a global perspective, all of which significantly enhance their career prospects and personal growth.</p>
      </div>
      <div className='pictures'>
      <img src={picture1} alt="picture1" className='picture1'/>
      <img src={picture2} alt="picture2" className='picture2'/>
      <img src={picture3} alt="picture3" className='picture3'/>
      <img src={picture4} alt="picture4" className='picture4'/>
      </div>
      <div className='sanjeev'>
      <img src={Sanj} alt="Sanj" className='Sanj'/>
      <p>Hi there, this is Sanjiv Thapa currently living in New York, USA. We know the effort and dedication a student puts into pursuing a career abroad physically, financially, and mentally. Trying to pursue an academic /professional career abroad, keeping yourself away from home, family, and friends for a better future, and putting your hard work upfront to get an academic degree/achievement is not just a bit scary if you make the wrong choice.  Your first choice makes the difference, so be wise. We have been through that journey so we know explicitly how and what it takes to pursue a career abroad.  You are half done when you have the right information on hand and for that Aero Global is here on your service, for your ease, for that big leap towards the future.</p>
      </div>
    </div>
  )
}

export default Blog;