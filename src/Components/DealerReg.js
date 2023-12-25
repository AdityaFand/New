import React, { useReducer, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const initialState = {
    dealer_id: '',
    dealer_name: '',
    email: '',
    contact: '',
    company_id: '',
    locationId: '',
    password: '',
};

function formReducer(state, action) {
    return { ...state, [action.field]: action.value };
}

const DealerRegistration = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [err, setErr] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'field', field: name, value: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      console.error('Password and confirm password must match!');
      setErr('Password and confirm password must match!');
      return;
    }
    try {
      const response = await fetch('http://localhost:9000/dealerRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      
      const data = await response.json();
      console.log(data);
      
      if (response.ok) {
        console.log('Dealer registered successfully!');
      } else {
        console.error('Registration failed:', data.message);
      }
      if (!state.dealer_id || !state.dealer_name || !state.email || !state.contact || !state.company_id || !state.locationId || !state.password || !state.confirmPassword) {
        setErr('All fields are required.');
        return;
    }

    if (state.password !== state.confirmPassword) {
        setErr('Password and confirm password must match!');
        return;
    }

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(state.email)) {
        setErr('Please enter a valid email address.');
        return;
    }

    // Password Length
    if (state.password.length < 8) {
        setErr('Password must be at least 8 characters long.');
        return;
    }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  const navigate = useNavigate();
  const cross = () => {
    navigate('/');
  };
  
    return (
        <div className='contain col-sm-3'>
           <div className='crosss'>
                <button type="button" className='btn btn-danger' onClick={cross}>x</button>
                </div>
            <h2>Dealer Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Dealer ID:</label>
                    <input type="text" name="dealer_id" value={state.dealer_id} onChange={handleChange} required className='form-control'/>
                </div>
                <div>
                    <label>Dealer Name:</label>
                    <input type="text" name="dealer_name" value={state.dealer_name} onChange={handleChange} required className='form-control'/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={state.email} onChange={handleChange} required className='form-control'/>
                </div>
                <div>
                    <label>Contact:</label>
                    <input type="text" name="contact" value={state.contact} onChange={handleChange} required className='form-control'/>
                </div>
                <div>
                    <label htmlFor="CompanyId">Company ID:</label>
                    <select id="CompanyId" name="company_id" value={state.company_id} onChange={handleChange} required >
                        <option value="">Select Company</option>
                        <option value="C1">Hero MotoCorp</option>
                        <option value="C2">Bajaj Auto</option>
                        <option value="C3">Royal Enfield</option>
                        <option value="C4">Yamaha Motor</option>
                        <option value="C5">TVS Motor Company</option>
                        <option value="C6">KTM India</option>
                        <option value="C7">Honda Motorcycle</option>
                        <option value="C8">Kawasaki</option>
                        <option value="C9">Harley Davidson</option>
                        <option value="C10">Suzuki</option>
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
                    <input type="password" name="password" value={state.password} onChange={handleChange} required className='form-control'/>
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={state.confirmPassword} onChange={handleChange} required className='form-control'/>
                </div>
                <div>{err}</div>
                <br/>
                <button type="submit" className='btn btn-primary'>Register</button>
            </form>
        </div>
    );
}

export default DealerRegistration;