import React from 'react';
import errorLogo from '../../assets/error.png'

const ErrorPage = () => {
    return (
        <div >
            <div className='bg-danger rounded w-75 mx-auto my-5'>
            <div className='p-5 d-flex align-items-center'>
                <img style={{width:"120px"}} src={errorLogo} alt="" />
                <div className='ps-3'>
                <h2 >404 - Page not found</h2>
                <p >Sorry, the content you were looking for cannot be found</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;