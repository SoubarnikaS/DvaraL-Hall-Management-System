
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

import '../css/SignInUp.css';


const SignIn = () => {
    return (
        <>
            <div className='sign-in-container'>
                <div className='sign-up-box'>
                    <p>Welcome to DavarL</p>
                    <div className='sign-up-content'>
                        <TextField id="standard-basic" label="Email" variant="standard" className='sign-input-box' style={{width: '22vw'}} />
                        <TextField id="standard-basic" label="Password" variant="standard" className='sign-input-box' style={{width: '22vw'}} />
                        <Link to = '/dashboard'>
                            <Button variant="contained" style={{ height: '6vh', width: '22vw', fontFamily: 'Poppins', fontSize: '1vw' }}>
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignIn;