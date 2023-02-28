import React from 'react';
import { toast } from 'react-toastify';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { db } from './firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

export default function LoginPage(props) {
  const [isSignIn, setisSignIn] = React.useState(true);
  const [register, setRegister] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [signin, setSignin] = React.useState({
    email: '',
    password: '',
  });

  async function handleForgotPassword(e) {
    e.preventDefault();
    if (signin.email.trim() !== '') {
      try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, signin.email);
        toast.success('mail was successfully sent');
      } catch (error) {
        console.log(error);
        toast.error("Couldn't send reset password to given mail id");
      }
    } else {
      toast.error('Enter a valid Email');
    }
  }

  function handleNavigationClick() {
    setisSignIn((prev) => !isSignIn);
  }

  function handleLoginOnChange(event) {
    const { name, value } = event.target;
    setSignin((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleRegisterOnChange(event) {
    const { name, value } = event.target;
    setRegister((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function registerSubmit() {
    props.setChecking();
    try {
      const auth = getAuth();
      const userCreadential = await createUserWithEmailAndPassword(
        auth,
        register.email,
        register.password
      );
      updateProfile(auth.currentUser, {
        displayName: register.name,
      });
      const user = userCreadential.user;

      const registerCopy = { ...register };
      delete registerCopy.password;
      delete registerCopy.confirmPassword;
      registerCopy.timestamp = serverTimestamp();
      registerCopy.tasks = [];
      await setDoc(doc(db, 'users', user.uid), registerCopy);

      toast.success('Signup was successful');
      props.setChecking();
      props.setLogin();
    } catch (error) {
      props.setChecking();
      if (error.message.split('/')[1] == 'email-already-in-use).') {
        toast.error('Email is already in use');
      } else {
        toast.error('Something went wrong with the registration!');
      }
    }
  }

  async function signinSubmit() {
    props.setChecking();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        signin.email,
        signin.password
      );

      if (userCredential.user) {
        toast.success('signin was successful');
        props.setLogin();
        props.setChecking();
      } else {
        props.setChecking();
        toast.error('bad user credential');
      }
    } catch (error) {
      props.setChecking();
      console.log(error);
      toast.error('problem while signin');
    }
  }
  return (
    <div className="login-container">
      <div className="login-heading">
        <span>WELCOME TO TODO'S</span>
        <p>ALL YOUR TASKS AT ONE PLACE</p>
      </div>

      <div className="inner-container">
        <div>
          <nav className="navigation">
            <ul>
              <li
                className={isSignIn && 'active'}
                onClick={handleNavigationClick}
              >
                SIGN IN
              </li>
              <li
                className={!isSignIn && 'active'}
                onClick={handleNavigationClick}
              >
                REGISTER
              </li>
            </ul>
          </nav>

          <div className="login-form">
            {isSignIn ? (
              <div>
                {' '}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleLoginOnChange}
                  value={signin.email}
                />
                <input
                  type="Password"
                  name="password"
                  placeholder="Password"
                  onChange={handleLoginOnChange}
                  value={signin.password}
                />
                <a
                  href=""
                  className="forgot-pass"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </a>
                <button className="login-btn" onClick={signinSubmit}>
                  {isSignIn && 'SIGN IN'}
                </button>{' '}
              </div>
            ) : (
              <div>
                {' '}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleRegisterOnChange}
                  value={register.confirmPassword}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleRegisterOnChange}
                  value={register.email}
                />
                <input
                  type="Password"
                  name="password"
                  placeholder="Password"
                  onChange={handleRegisterOnChange}
                  value={register.password}
                />
                <p onClick={handleNavigationClick} className="forgot-pass">
                  Already have an account?
                </p>
                <button className="login-btn" onClick={registerSubmit}>
                  {!isSignIn && 'REGISTER'}
                </button>{' '}
              </div>
            )}
          </div>
        </div>

        <img
          src="https://www.linkpicture.com/q/Checklist-removebg-preview-1.png"
          type="image"
          className="img"
        />
      </div>
    </div>
  );
}
