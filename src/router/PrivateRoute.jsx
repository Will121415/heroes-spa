
import React from "react";
import { useContext } from 'react';
import { AuthContext } from '../auth/context';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const PrivateRoute = ({ children }) => {

    const { pathname, search } = useLocation();

    const lastPath = pathname + search;

    useEffect(() => {
        localStorage.setItem('lastpath', lastPath);

    },[pathname, search])

    

    const { logged } = useContext(AuthContext);

    return (logged) ? children : <Navigate to={"login"} />
};
