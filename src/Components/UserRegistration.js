import React, {  useReducer, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const initialState = {
    user_id: '',
    username: '',
    email: '',
    contact: '',
    budget: '',
    preferredCategory: '',
    locationId: '',
    password: '',
    confirmPassword: ''
};

function formReducer(state, action) {
    return { ...state, [action.field]: action.value };
}

const UserRegistration = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);
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
            const response = await fetch('http://localhost:9000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                // Successful registration 
                console.log('User registered successfully!');
            } else {
                console.error('Registration failed:', data.message);
            }
            if (!state.user_id || !state.username || !state.email || !state.contact || !state.budget || !state.preferredCategory || !state.locationId || !state.password || !state.confirmPassword) {
                SetErr('All fields are required.');
                return;
            }
    
            if (state.password !== state.confirmPassword) {
                SetErr('Password and confirm password must match!');
                return;
            }
    
            // Email Validation
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(state.email)) {
                SetErr('Please enter a valid email address.');
                return;
            }
    
            // Password Validation
            if (state.password.length < 8) {
                SetErr('Password must be at least 8 characters long.');
                return;
            }

        } catch (error) {
            console.error('Registration error:', error);
        }
    };
    const navigate = useNavigate();
    const cross=()=>{
        navigate('/');
    }

    return (
        <div className='contain col-sm-3'>
              <div className='crosss'>
                <button type="button" className='btn btn-danger' onClick={cross}>x</button>
                </div>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User ID:</label>
                    <input type="text" name="user_id" value={state.user_id} onChange={handleChange}  required className='form-control' />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={state.username} onChange={handleChange} required className='form-control' />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email"  value={state.email} onChange={handleChange} required className='form-control'/>
                </div>
                <div>
                    <label>Contact:</label>
                    <input type="text" name="contact" value={state.contact} onChange={handleChange} required className='form-control'/>
                </div>
                <div>
                    <label>Budget:</label>
                    <input type="text" name="budget" value={state.budget} onChange={handleChange} required className='form-control'/>
                </div>
                <div>
                <label htmlFor="preferredCategory">Preferred Category:</label>
                    <select id="preferredCategory" name="preferredCategory" value={state.preferredCategory} onChange={handleChange} required >
                        <option value="">Select Category</option>
                        <option value="CruiserBike">CruiserBike</option>
                        <option value="Offroad">Offroad</option>
                        <option value="SportsBike">SportsBike</option>
                        <option value="Standard">Standard</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="locationId">Location ID:</label>
                    <select id="locationId" name="locationId" value={state.locationId} onChange={handleChange} required >
                        <option value="">Select Location</option>
                        <option value="101">Wakad</option>
                        <option value="102">Kothrud</option>
                        <option value="103">Katraj</option>
                        <option value="104">Hadapsar</option>
                        <option value="105">Pimpri</option>
                    </select>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={state.password} onChange={handleChange} required className='form-control'/ >
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={handleChange} required className='form-control'/>
                </div>
                <div>{err}</div>
                <button type="submit" className='btn btn-block btn-primary'>Register</button>
                <button type="reset" className='btn btn-block btn-dark'>Clear</button>
            </form>
        </div>
    );
}

export default UserRegistration;
