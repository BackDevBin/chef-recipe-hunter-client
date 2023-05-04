import React from 'react';
import chefLogo from '../../assets/chef.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <nav className='bg-dark'>
            <div className='row align-items-center ms-5 me-5 pt-3 pb-3'>

                <div className='col d-flex align-items-center text-white'>
                    <img style={{ width: "80px" }} src={chefLogo} alt="" />
                    <h1 className='fw-bolder'><span className='text-danger fs-1'>American</span><span className='fs-3'>Chef</span></h1>
                </div>

                <div className='col text-center'>
                    <Link to='/' className='text-decoration-none me-3 text-white'>Home</Link>
                    <Link className='text-decoration-none me-3 text-white'>About Us</Link>
                    <Link to='/blog' className='text-decoration-none me-3 text-white'>Blog</Link>

                
                    
                </div>

                <div className='col text-end'>
                <Link to='/login'><Button variant="danger">Login</Button></Link>
                </div>

            </div>
        </nav>
    );
};

export default Header;