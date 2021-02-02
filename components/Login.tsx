import { useEffect } from 'react';
import { useIdentity } from '@hooks/useIdentity';

const Login = () => {
  const { state, login, logout, closeModal } = useIdentity();

  useEffect(() => {
    if (state.loggedIn) {
      closeModal();
    }
  }, [state]);

  return (
    <>
      { state.loggedIn ? <button onClick={() => logout()}>Logout</button> : <button onClick={() => login()}>Login</button> }
    </>
  );
};

export default Login;
