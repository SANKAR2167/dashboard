import * as React from 'react';

import TextField from '@mui/material/TextField';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
export function UserLogin() {
  return (
    <div className='card'>
      <Card className='cardlogin' variant="outlined">
        <h3>User Login</h3>
        <TextField className='ul' id="standard-basic" label="User name" variant="standard" /> <br />
        <TextField className='ul' id="standard-basic" label="Password" variant="standard" /> <br />
        <br />
        <span>Don't have account <Link to="/user/register">Register here</Link></span>
      </Card>
    </div>
  )
}

export function UserRegister() {
  return (
    <div className='card'>
      <Card className='cardregister' variant="outlined">
        <h3>User Register</h3>
        <TextField className='ul' id="standard-basic" label="User name" variant="standard" /> <br />
        <TextField className='ul' id="standard-basic" label="Email" variant="standard" /> <br />
        <TextField className='ul' id="standard-basic" label="Mobile Number" variant="standard" /> <br />
        <TextField className='ul' id="standard-basic" label="Password" variant="standard" /> <br />
        <br />
        <span>Already have account <Link to="/user/login">Login here</Link></span>
      </Card>
    </div>
  )
}