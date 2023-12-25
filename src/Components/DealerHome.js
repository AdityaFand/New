import { useSelector } from "react-redux";
import { Link, useNavigate, Outlet } from "react-router-dom";


export default function DealerHome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/updatePassword');
  };

  const hanClick = () => {
    navigate('/');
  };

  const mystate = useSelector((state) => state.logged);

  return (
    <div>
      <div className="navin">
        <ul className="nav navbar">
          <li className="nav-item">
            <Link to="/updatePassword" className="nav-link" onClick={handleClick}>
              UpdatePassword
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={hanClick}>
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Welcome to the Dealer Dashboard!</h2>
        </div>
      </div>
    </div>


      <Outlet />
    </div>
  );
}
