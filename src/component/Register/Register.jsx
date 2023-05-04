import React, { useContext, useState } from 'react';
import './Register.css'
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {

    const [error , setError] = useState('');
    const [success , setSuccess] = useState('');

    const {createUser,userUpdateData} = useContext(AuthContext);

   
    const handleSignUpForm = (event) => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
       
        

        setError('');
        setSuccess('');

        createUser(email,pass)
        .then(result =>{
            const logUser = result.user;
            setSuccess('Registration Successful !!!');
            form.reset();
            userUpdateData(logUser,name,photo)
            .then(() => {
                
              }).catch((error) => {
                console.log(error);
              });
        })
        .catch(error =>{
            
            setError(error.message);
        })

       


    }


    return (
        <div>
            <div className='form-container-sn'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUpForm}>
                <div className="form-control">
                        <label htmlFor="password">Name</label>
                        <input type="text" name="name" id="name" required />
                    
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Photo Url</label>
                        <input type="text" name="photo" id="photo" required />
                    
                    </div>
                    <input className='btn-submit' type="submit" value="Register" />
                </form>
                <p><small>Already have account? <Link to="/login">Please Login</Link></small></p>

                <p className='error-text'>{error}</p>
                <p className='text-success'>{success}</p>
            </div>


        </div>
    );
};

export default Register;