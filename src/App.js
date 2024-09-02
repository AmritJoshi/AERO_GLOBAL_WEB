import './App.css';
import AboutUs from './components/AboutUs.components';
import Blog from './components/Blog.components';
import Home from './components/Home.components';
import Ielts from './components/Ielts.components';
import Navigation from './components/Nav.components';
import Pte from './components/Pte.components';
import Std_US from './components/Std_US.components';
import Std_AUS from './components/Stud_AUS.components';
import Std_CAN from './components/Stud_CAN.components';
import Std_EU from './components/Stud_EU.components';
import Toefl from './components/Toefl.components';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Std_UK from './components/Stud_UK.components';
import Std_DEN from './components/Stud_DEN.components';
import Appointment from './components/Appointment.components';
import Footer from './components/footer.component';

function App() {
  return (
    <Router>
    <div>
    <Navigation/>
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Appointment' element={<Appointment/>}/>
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Study_in_US' element={<Std_US/>}/>
      <Route path='/Study_in_AUS' element={<Std_AUS/>}/>
      <Route path='/Study_in_EU' element={<Std_EU/>}/>
      <Route path='/Study_in_CANADA' element={<Std_CAN/>}/>
      <Route path='/Study_in_UK' element={<Std_UK/>}/>
      <Route path='/Study_in_DEN' element={<Std_DEN/>}/>
      <Route path='/Ielts' element={<Ielts/>}/>
      <Route path='/Toefl' element={<Toefl/>}/>
      <Route path='/Pte' element={<Pte/>}/>
      </Routes>
      <Footer/>
    </div>

    </Router>
  );
}

export default App;
