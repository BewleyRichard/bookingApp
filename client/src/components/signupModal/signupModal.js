/* This component takes three props: isOpen, closeModal, and signupSuccess. 
It renders a modal with a form that includes inputs for username, email, and password.
When the user submits the form, it sends a POST request to /auth/register with the form data, 
and calls signupSuccess() and closeModal() on success. If isOpen is false, the modal is not rendered. */

import "./signupModal.css";
import axios from "axios";
import React from "react";
import  { useState } from "react";


const Modal = ({ isOpen, closeModal, signupSuccess }) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log(username)
      const res = await axios.post("/auth/register", {
        username: username,
        email: email,
        password: password
      });
      closeModal();
      signupSuccess();
    } catch (err) {
      console.error(err);
    }
  };


  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>

          <div className="lContainer">
            <input 
              className="lInput" 
              type="text" 
              id="username" 
              name="username" 
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <label htmlFor="email">Email:</label>
          <div className="lContainer">
            <input 
              className="lInput" 
              type="email" 
              id="email" 
              name="email" 
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <label htmlFor="password">Password:</label>

          <div className="lContainer">
            <input 
              className="lInput" 
              type="password" 
              id="password" 
              name="password" 
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button className="lButton" type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;