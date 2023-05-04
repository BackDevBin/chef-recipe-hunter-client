import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';



const Login = () => {
    const [show , setShow] =useState(false);
    const [error , setError] = useState('');

    const {createLogin} = useContext(AuthContext);

    const navigate = useNavigate();

    let location = useLocation();

    const from = location.state?.from?.pathname || '/';
    

    const handleLogin =(event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;


        createLogin(email, pass)
        .then(result =>{
            const logUser = result.user;
            console.log(logUser)
            form.reset();
            navigate(from);
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })
        
    }

    return (
        <div>
            <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="ema" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="pass" required />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span>: <span>Show Password</span>
                        }
                        </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to HireAmericanChef? <Link to="/register">Create New Account</Link></small></p>
            <div>
                <div className='text-center'>
                    <p>Login With</p>
                </div>
                <div className='d-flex justify-content-around mb-3'>
                <Button variant="outline-danger"><FaGoogle></FaGoogle> Google</Button>
                <Button variant="outline-danger"><FaGithub></FaGithub> GitHub</Button>
                </div>
            </div>

            <p className='error-text'>{error}</p>
        </div>
        </div>
    );
};

export default Login;