import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {


  const { login } = useContext( AuthContext );

  const navigate = useNavigate();

  const onLogin = () => {

    login('Mora Will');

    const lastPath = localStorage.getItem('lastpath') || '/';

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className='container my-5'>
      <h1>Login Page</h1>
      <hr />

      <button 
        onClick={ onLogin }
        className='btn btn-primary'>
          Login
      </button>
    </div>
  );
};
