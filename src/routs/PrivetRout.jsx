import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivetRout = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    return (
        <Navigate to={"/auth/login"}>
            
        </Navigate>
    );
};

export default PrivetRout;