import React from 'react';
import chefLogo from '../../assets/chef.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <nav className='ms-5 me-5 mt-3 mb-3'>
            <div className='row align-items-center '>

                <div className='col d-flex align-items-center'>
                    <img style={{ width: "80px" }} src={chefLogo} alt="" />
                    <h1 className='fw-bolder'><span className='text-danger fs-1'>American</span><span className='fs-3'>Chef</span></h1>
                </div>

                <div className='col text-center text-black'>
                    <Link className='text-decoration-none me-3 text-black'>Home</Link>
                    <Link className='text-decoration-none me-3 text-black'>Blog</Link>
                    <Link className='text-decoration-none text-black'>log</Link>
                    
                </div>

                <div className='col text-end'>
                <Button variant="dark">Login</Button>
                </div>

            </div>
        </nav>
    );
};

export default Header;