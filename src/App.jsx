import { useLocation } from "react-router-dom";
import { useIsLogin } from "./hooks/authHook";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Router from "./router/Router";
// import "./assets/css/app.css";

function App() {
  const [loading, isLogin] = useIsLogin();
  const location = useLocation().pathname;

  return location === "/register" ? (
    <Register />
  ) : location === "/login" ? (
    <Login />
  ) : (
    <Router loading={loading} isLogin={isLogin}></Router>
  );
}

export default App;
