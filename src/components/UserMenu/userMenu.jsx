import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/authOperations";
import { useAuth } from "redux/hooks/useAuth";

export const UserMenu = () => {
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logOut())
    
  }
  const {user} = useAuth()
    return (
      <div>
         <p>Welcome, {user.name}!</p>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    );
}