
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfileAction } from '../redux/actions/userAction';
import Header from '../components/Shared/Header/Header';

const UserDashboard = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector(state => state.userProfile);

    useEffect(() => {
        dispatch(userProfileAction());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (

       <>
        <Box className="ms-5 mt-2" >
           
            <h1 className='fw-bold'>Dashboard</h1>
            <p><span className='fw-bold'>Complete name:</span> {user && user.name}</p>
            <p><span className='fw-bold'>E-mail:</span> {user && user.email}</p>
            <p><span className='fw-bold'>Role:</span> {user && user.role}</p>
            
        </Box>
       </>
    );
}

export default UserDashboard;
