import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../../pages/Login/Login';

function ProtectedRoutes() {
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return isUserLoggedIn ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;
