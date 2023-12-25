import { Link } from 'react-router-dom';
import pic from './Royal Enfield inaugurates exclusive showroom in Dubai.jpeg';
export default function Home(){
    return(
        <div>
        
        <div className='navin'>

        <ul className="nav navbar">

        <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        {/* <li className="nav-item">
            <Link to="/register" className="nav-link">REGISTER</Link>
        </li> */}
        <li className="nav-item">
            <Link to="/Adminlogin" className="nav-link">ADMIN</Link>
        </li>
        <li className="nav-item">
            <Link to="/dealerlogin" className="nav-link">DEALER </Link>
        </li>
        <li className="nav-item">
            <Link to="/login" className="nav-link">USER</Link>
        </li>
  </ul>
  </div>
    
        <div className='background-img1'>
            <div className='container'>
                <div className='col-6'></div>
                <div className='col mt-5'>
                    <h1 style={{ fontFamily: "Lucida Handwriting" }}>“Welcome to Bikers Planet”</h1>
                    <img src={pic}/>
                </div>
            </div>
        </div>

        <footer className='navin'>
        <ul className='nav navbar '>
      <li className='nav-item'><Link to="/aboutus">About us</Link></li>
      <li className='nav-item'><Link to="/contactus">Contact us</Link></li>
      <li className='nav-item'><Link to="/termsandconditions">Terms and Conditions</Link></li>
      <li className='nav-item'><Link to="/privacypolicy">Privacy Policy</Link></li>
      <li className='nav-item'><Link to="/faqs">FAQS</Link></li>
    </ul>

        </footer>
        
        
        </div>
    )
}