import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import UserRegistration from './Components/UserRegistration';
import Login from './Components/UserLogin';
import Home from './Components/Home';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/adminlogin';
import UserHome from './Components/User';
import UpdatePassword from './Components/UpdatePassword';
import AdminHome from './Components/adminHome';
import Logout from './Components/logout';
import DealerLogin from './Components/dealerlogin';
import DealerHome from './Components/DealerHome';
import HomePage from './Components/User2';
import DealerRegistration from './Components/DealerReg';
// import AdminLogin from './Components/Adminlogin.js';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import TermsAndconditions from './Components/TermsAndConditions';
import Privacypolicy from './Components/PrivacyPolicy';
import FAQS from './Components/FAQS';

function App() {

     const mystate = useSelector(state=>state.logged)
  return (

    
    <div  >

    <div style={{display: mystate.loggedIn?"none":"block"}} className='bg-dark text-primary'>
         {/* <Link to='/home' className='nav-link'></Link> */}

        {/* <ul className="nav navbar">
            <li className="nav-item">
                <Link to="/register" className="nav-link">REGISTER</Link>
            </li>
            <li className="nav-item">
                <Link to="/Adminlogin" className="nav-link">AdminLogin</Link>
            </li>
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">LOGIN</Link>
            </li>
      </ul> */}
    </div>
    <Routes>
        <Route path="/userregister" element={<UserRegistration/>}  />
        <Route path="/dealerRegistration" element={<DealerRegistration/>}  />
        <Route path="/Adminlogin" element={<AdminLogin/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/" element={ <Home/> } />
        <Route path="/dealerlogin" element={ <DealerLogin/> } />
        <Route path="/userHome" element={ <UserHome/> } />
        <Route path="/adminHome" element={ <AdminHome/> } />
        <Route path="/dealerHome" element={ <DealerHome/> } />
        <Route path="/updatePassword" element={ <UpdatePassword/> } />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/termsandconditions" element={<TermsAndconditions />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/faqs" element={<FAQS/>} />
        {/* <Route path="logout" element={ <Logout/> } /> */}
        {/* <Route path="logout" element={ <LogoutComp /> } /> */}
    
        
       </Routes> 
      

    </div>
  );
}

export default App;
