/* This component uses the useContext and useNavigate hooks from React Router 
to handle the authentication state of the user. If the user is logged in, it shows their username and a logout button. 
If the user is not logged in, it shows a register and a login button. 
The handleLogout function dispatches a LOGOUT action to the AuthContext, 
removes the user from localStorage and navigates the user to the login page. 
The Navbar also has a logo that links to the homepage. */


import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
   const { user, dispatch} = useContext(AuthContext);
   const navigate = useNavigate();

   const handleClick = () => {
       navigate("/login")    
   }


   const handleLogout = () => {
       dispatch({ type: "LOGOUT" });
       localStorage.removeItem("user");
       navigate("/login")
   }

   return (
       <div className="navbar">
           <div className="navContainer">
           <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
               <span className="logo">Nomadia</span>
           </Link>
           {user && user.username ? (
               <div className="navItems">
               <span className="navUsername">Welcome, {user.username}</span>
               <button className="navButton" onClick={handleLogout}>Logout</button>
               </div>
           ) : (
               <div className="navItems">
               <button className="navButton" onClick={handleClick}>Register</button>
               <button className="navButton" onClick={handleClick}>Login</button>
               </div>
           )}
           </div>
       </div>
       );
}


export default Navbar;