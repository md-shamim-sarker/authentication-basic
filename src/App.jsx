import React, {useState} from 'react';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import app from './firebase/Firebase.config';

const auth = getAuth(app);

const App = () => {
  const [success, setSuccess] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSuccess("User Created Successfully.");
      })
      .catch((error) => {
        console.log(error.message);
        setSuccess(error.message);
      });
    form.reset();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="email" name="email" id="emailId" placeholder='Email' /><br /><br />
      <input type="password" name="password" id="passwordId" placeholder='Password' /> <br /><br />
      <button>Register</button>
      {
        success && <div>{success}</div>
      }
    </form>
  );
};

export default App;