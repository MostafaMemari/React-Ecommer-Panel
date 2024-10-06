import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, isLogin }) {
  return isLogin ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
