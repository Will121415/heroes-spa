import { Outlet } from 'react-router-dom';
import { redirectTo } from '../heroes/helpers';
import { Navbar } from '../ui';
import { PrivateRoute } from '../router/PrivateRoute';


export const RootLayout = () => {

    redirectTo('/','/marvel');

    return (
        <PrivateRoute>
            <Navbar />
            <main className='container'>
                <Outlet />
            </main>
        </PrivateRoute>
    );
};
