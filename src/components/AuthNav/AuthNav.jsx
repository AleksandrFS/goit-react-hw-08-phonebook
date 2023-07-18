// import { Login } from "pages/Login"
// import { Registration } from "pages/Registration"
import { Link } from "react-router-dom";

export const AuthNav = () => {
    return (
      <>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </>
    );
}