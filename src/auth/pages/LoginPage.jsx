import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {


  const { login } = useContext( AuthContext );

  const navigate = useNavigate();

  const onLogin = () => {

    login('willmodev');

    const lastPath = localStorage.getItem('lastpath') || '/';

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className='container'>
      <h1>Login Page</h1>
      <hr />

      <button 
        onClick={ onLogin }
        className='container btn-outline'>
          Login
      </button>
    </div>
  );
};
