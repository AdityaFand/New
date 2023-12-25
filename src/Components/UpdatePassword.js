import { useState,useReducer } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function UpdatePassword(){
    const initialState = {
        username: '',
        password: '',
        confirmPassword: ''
    };
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(formReducer, initialState);
    function formReducer(state, action) {
        return { ...state, [action.field]: action.value };
    }
    const[err, SetErr] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'field', field: name, value: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (state.password !== state.confirmPassword) {
            console.error('Password and confirm password must match!');
            SetErr('Password and confirm password must match!');
            return;
        }
        try {
            const response = await fetch('http://localhost:9000/updatePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                console.log('Password updated successfully!');
            } else {
                console.error('Password Reset failed:', data.message);
            }

        } catch (error) {
            console.error('Error Occured', error);
        }
    };
    const handleClick = () => {
        navigate('/');
      };


    return(
        <div className=" container updateP">
            <h2>Password Reset</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={state.username} onChange={handleChange} required className="form-control"/>
                </div>
                <div>
                    <label>New Password:</label>
                    <input type="password" name="password" value={state.password} onChange={handleChange} required className="form-control"/>
                </div>

                <div>
                    <label>Confirm New Password:</label>
                    <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={handleChange} required className="form-control"/>
                </div>
                <div>{err}</div>
                <br/>
                <button type="submit" className="btn border btn-info">UPDATE PASSWORD</button>
                <span> </span>
                <button type="button" className="btn border btn-dark" onClick={handleClick}>BACK</button>
            </form>
        </div>
    )
}