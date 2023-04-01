// This component handles user login and sign-up.
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Modal from "../../components/signupModal/signupModal";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const [showModal, setShowModal] = useState(false);
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  /* When the user logs in, it dispatches a "LOGIN_START" action to the context 
  and tries to log in with the entered credentials. */
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    /* If successful, it dispatches a "LOGIN_SUCCESS" action, sets the isSignUpSuccess state to true, 
    and navigates to the homepage. */
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
      navigate("/")
      /* If unsuccessful, it dispatches a "LOGIN_FAILURE" action and displays an error message. */
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  /* If the user clicks on the sign-up button, it shows a modal window that allows the user 
  to enter their registration details, and on successful registration, it sets the isSignUpSuccess 
  state to true. */

  const handleRegister = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const signupSuccess = () => {
    setIsSignUpSuccess(true);
  };
    
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
        <button disabled={loading} onClick={handleRegister} className="lButton">
          Sign-Up
        </button>
        {showModal && (
          <Modal 
            isOpen={showModal} 
            closeModal={closeModal}
            signupSuccess={signupSuccess} 
          >
          <form>
              <label>
                Username:
                <input type="text" id="username" />
              </label>
              <label>
                Email:
                <input type="email" id="email" />
              </label>
              <label>
                Password:
                <input type="password" id="password" />
              </label>
              <button type="submit">Sign-Up</button>
            </form>
          </Modal>
          )}
          {isSignUpSuccess && (
          <p>Thanks for signing up, please log in here.</p>
        )}
      </div>
    </div>
  );
};

export default Login;
// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import "./login.css";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: undefined,
//     password: undefined,
//   });

//   const { loading, error, dispatch } = useContext(AuthContext);

//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("/auth/login", credentials);
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details});
//       navigate("/")
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
//     }
//   };


//   return (
//     <div className="login">
//       <div className="lContainer">
//         <input
//           type="text"
//           placeholder="username"
//           id="username"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <button disabled={loading} onClick={handleClick} className="lButton">
//           Login
//         </button>
//         {error && <span>{error.message}</span>}
//       </div>
//     </div>
//   );
// };

// export default Login;