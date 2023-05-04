import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../component/Provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);

    let location = useLocation();



    if (loader) {
        return <div  className='mx-5 my-5'>
            <Spinner  animation="border" variant="primary" />
            <p  >Loading...</p>
        </div>
    }

    if (user) {
        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;