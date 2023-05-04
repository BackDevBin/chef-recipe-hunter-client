import React, { useContext } from 'react';
import chefLogo from '../../assets/chef.png'
import { Link } from 'react-router-dom';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AuthContext } from '../../component/Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error))
    }

    console.log(user)


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
                    {
                        user ? <>
                            <>
                                {['bottom'].map((placement) => (
                                    <OverlayTrigger
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Tooltip id={`tooltip-${placement}`}>
                                                <strong>{user.displayName}</strong>.
                                            </Tooltip>
                                        }
                                    >
                                    
                                    <img style={{ width: "50px" }} className='rounded-circle me-2' src={user.photoURL} alt="" />
                                
                                    </OverlayTrigger>
                                ))}
                            </>

                            <Button onClick={handleLogOut} variant="danger">Logout</Button>
                        </> : <Link to='/login'><Button variant="danger">Login</Button></Link>
                    }
                </div>



            </div>
        </nav>
    );
};

export default Header;