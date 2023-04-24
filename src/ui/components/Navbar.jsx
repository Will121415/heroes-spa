import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

import { HeroBrand } from '../../ui/components/HeroBrand';

import style from './navbar.module.css';
import { useLocation } from 'react-router-dom';


const routes = [
    { path: '/marvel', label: 'Marvel' },
    { path: '/dc', label: 'DC' },
    { path: '/search', label: 'Search' },
]


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onLogout = () => {

        logout();

        navigate('login', {
            replace: true
        })
    }

    return (
        <nav className={style['navbar']}>

            <Link
                className={style['navbar-brand']}
                to="/"
            >
                <HeroBrand />
            </Link>

            <div className={style['navbar-nav']}>

                {
                    routes.map(({path, label}) => (
                        <NavLink
                            key={path}
                            className={`${path === pathname ? style['active'] : ''}`}
                            to={path}
                        >
                            {label}
                        </NavLink>
                    ))
                }
            </div>

            <div className={style['navbar-end']}>
                <span className={style['navbar-user']}>
                    @{user?.name}
                </span>
                <button
                    onClick={onLogout}
                    className='btn-outline'
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}