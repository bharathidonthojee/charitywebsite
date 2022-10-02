
import './App.css';
import {Routes, Route,Link} from 'react-router-dom'
import Aboutus from './components/Aboutus'
import Contactus from './components/Contactus'
import Gallery from './components/Gallery' 
import Registration from './components/Registration'
import Home from "./components/Home"
import Visionmission from "./components/Visionmission"
import Aimsobj from "./components/Aimsobj"
import Founders from "./components/Founders"

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Better Donation</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" to="/home"></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/aboutus">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/gallery">Gallery</Link>
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
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/registration" element={<Registration/>} />
      </Routes>
      
    </div>
  );
}

export default App;
