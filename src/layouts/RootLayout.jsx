import { Outlet } from 'react-router-dom';
import { redirectTo } from '../heroes/helpers';
import { Navbar } from '../ui';

export const RootLayout = () => {

   
    redirectTo('/','/marvel');

    return (
        <>
            <Navbar />
            <main className='container'>
                <Outlet />
            </main>
        </>
    );
};
