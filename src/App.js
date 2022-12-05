

import './App.css';
import {Routes, Route,Link} from 'react-router-dom'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Admin from './components/Admin' 
import Registration from './components/Registration'
import Home from "./components/Home"
import Visionmission from "./components/Visionmission"
import Aimsobj from "./components/Aimsobj"
import Founders from "./components/Founders"
import { FaFacebook,FaInstagram,FaWhatsapp} from "react-icons/fa"

function App() {
  return (
    <div className="mb-0 ">
      <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand display-3 text-danger active" href="#">BETTER DONATION</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-8 ">
      <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/admin">Admin</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/registration">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contactus">Contact Us</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
      

      <div className="card text-center bg-warning p-5 mt-4">
  <div >
    
  </div>
  <div>
    
    <p className=" doll">	
 	
   Better Donation is a registered Website,working towards the upliftment of the destitute and deprived of the society. This Website provides helping hand to needy, poor, disabled, destitute persons to make them good citizens of tomorrow.</p>
    
  </div>
  <div className='pt-5 '>
   
     <h1> <FaFacebook size='4rem'/>      <FaInstagram size='4rem'/>        <FaWhatsapp size='4rem'/></h1> 
  </div>
</div>
  


    </div>



  );
}

export default App;
