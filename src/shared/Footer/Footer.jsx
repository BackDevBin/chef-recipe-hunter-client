import React from 'react';
import chefLogo from '../../assets/chef.png'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {


    return (
        <div className="bg-dark">

            <div className="container text-start text-white pt-5 pb-5">
                <div className="footer-container">
                    <div>
                        <div>
                            <img style={{ width: "100px" }} src={chefLogo} className="mb-1" alt="" />
                            <p>Finding Personal Chefs is easy by searching our trusted network of top-rated Personal Chefs.</p>
                        </div>
                    </div>
                    <div className="show-div">
                        <h5 className="mb-5">Usefull Link</h5>
                       <p><Link to='/' className='text-decoration-none  text-white'>Home</Link></p> 
                       <p>About Us</p> 
                       <p><Link to='/blog' className='text-decoration-none  text-white'>Blog</Link></p> 
                       <p><Link to='/register' className='text-decoration-none  text-white'>Register</Link></p> 
                    </div>
                    <div className="show-div">
                        <h5 className="mb-5">Contact Now</h5>
                        <p>555 4th 5t NW, America<br />
                            DC 20530, United State</p>
                        <p>+88 01750 000 000 <br />
                            +88 01750 000 00</p>
                        <p>info@gmail.com</p>
                    </div>
                    <div>
                        <h5 className="mb-5">Subscribe</h5>
                        <p>Subscribe for our latest & Articles. We Won’t Give You Spam Mails</p>
                        <div className="input-group mb-3">
                            <input type="text" placeholder="Email Address" className='rounded ps-2' aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn btn-danger rounded" type="button" id="button-addon2"><img style={{ width: "40px" }} src={chefLogo} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;