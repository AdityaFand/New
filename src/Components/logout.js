import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../loggedSlice";

export default function Logout() {
    const dispatch = useDispatch();
    const Navigate=useNavigate('/')
    dispatch(logout());
    const mystate = useSelector(state=>state.logged)
    Navigate("/")
    return (
      <div>
            <p> Logged out successfully </p>
            <p> Login status : {mystate.loggedIn.toString()}</p>
        </div>
    )
}

