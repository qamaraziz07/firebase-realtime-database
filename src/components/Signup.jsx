import React from "react";
import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <form onSubmit={handelLogin}>
        <h1>Signup</h1>
        <label>Email :</label>
        <input type="email" ref={emailRef} />
        <br></br>
        <label>Password:</label>
        <input type="curent-password" ref={passwordRef} />
        <br></br>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
