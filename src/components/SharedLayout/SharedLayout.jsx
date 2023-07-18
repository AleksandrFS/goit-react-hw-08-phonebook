import { AppBar } from "components/AppBar/AppBar";
import { Link, Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <AppBar/>
        {/* <Link to="/">Home</Link>
        <Link to="/register"> Register</Link>
        <Link to="/login">Login</Link> */}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}