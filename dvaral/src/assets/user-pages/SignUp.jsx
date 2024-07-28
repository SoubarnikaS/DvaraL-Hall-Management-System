import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAuth } from './AuthContext';
import '../css/SignInUp.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        login(email); 
    };

    return (
        <>
            <div className='sign-in-container'>
                <div className='sign-up-box'>
                    <p>Welcome to DavarL</p>
                    <form onSubmit={handleLogin} className='sign-up-content'>
                        <TextField
                            id="standard-basic"
                            label="Email"
                            variant="standard"
                            className='sign-input-box'
                            style={{ width: '22vw' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="standard-basic"
                            label="Password"
                            variant="standard"
                            className='sign-input-box'
                            style={{ width: '22vw' }}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            style={{ height: '6vh', width: '22vw', fontFamily: 'Poppins', fontSize: '1vw' }}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;
