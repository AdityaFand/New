import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:9000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            console.log(data);
            if (data.status === 'Login successful') {
                navigate('/userHome');
                console.log('Login successful!');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('An error occurred during login.');
        }
    };
    const handleClick = () => {
        navigate('/updatePassword');
      };
      const cross = () => {
        navigate('/');
      };
      const Registerclick = () => {
        navigate('/userregister');
      };
    return (
        <div className='admin col-sm-3'>
            <div className='crosss'>
                <button type="button" className='btn btn-danger' onClick={cross}>X</button>
                </div>
            <h2>User Login</h2>
            <form onSubmit={handleLogin}>
           
            <div>
                    <label >Username:</label>
                     <input type="text" id="username" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>                     <label >Password:</label>
                     <input type="password" id="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <br />
                <button type="submit" className='btn btn-block btn-primary'>Login</button>
                <span> </span>
                <button type="submit" className='btn btn-block btn-secondary' onClick={Registerclick}>Register</button>
                <button type="button" className='btn btn-block text-primary' onClick={handleClick}>Forgot Password?</button>
                
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}

export default Login;
