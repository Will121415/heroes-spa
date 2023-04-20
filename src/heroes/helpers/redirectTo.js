import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export const redirectTo = (route, routeRedirect) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();    


    useEffect(() => {
        if (pathname === route) return navigate(routeRedirect);
    }, [pathname])
};
