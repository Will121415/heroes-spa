import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

import { HeroBrand } from '../../ui/components/HeroBrand';

import style from './navbar.module.css';


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);


    const navigate = useNavigate();


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

                <NavLink
                    className="nav-item nav-link"
                    to="/marvel"
                >
                    Marvel
                </NavLink>

                <NavLink
                    className="nav-item nav-link"
                    to="/dc"
                >
                    DC
                </NavLink>
                <NavLink
                    className="nav-item nav-link"
                    to="/search"
                >
                    Search
                </NavLink>
            </div>

            <div className={style['navbar-end']}>
                <span className={style['navbar-user']}>
                    {user?.name}
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