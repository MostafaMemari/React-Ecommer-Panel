import { lazy, Suspense, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import { useIsLogin } from './hooks/authHook';

const Register = lazy(() => import('./pages/auth/Register'));
const Login = lazy(() => import('./pages/auth/Login'));
const Router = lazy(() => import('./router/Router'));

function App() {
  const [loading, isLogin] = useIsLogin();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isLogin && location.pathname !== '/login') {
      navigate('/login', { replace: true });
    }
  }, [loading, isLogin, location.pathname, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {location.pathname === '/register' ? (
        <Register />
      ) : location.pathname === '/login' ? (
        <Login />
      ) : (
        <Router isLogin={isLogin} />
      )}
    </Suspense>
  );
}

export default App;
