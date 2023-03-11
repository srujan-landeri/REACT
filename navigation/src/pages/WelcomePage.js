import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth';
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
import { auth } from '../firebase/firebase';

export default function () {
    const [signinClicked, setSigninClicked] = React.useState(true);
    const [registerClicked, setRegisterClicked] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [signinData, setSigninData] = React.useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();

    const [registerData, setRegisterData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    function handleFormChange(event) {
        if (signinClicked) {
            setSigninData(prev => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value
                }
            })
        }
        else {
            setRegisterData(prev => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value
                }
            })
        }

    }

    async function signinUser(){
        try
        {const userCredential = await signInWithEmailAndPassword(
            auth,
            signinData.email,
            signinData.password
        )

        if(userCredential.user){
            navigate('/home')
            toast.success("You are successfully signed in!");
        }
        else{
            toast.error("Bad User Credential")
        }}
        catch(error){
            let message = (error.message.split('/')[1]);
            if(message === 'wrong-password).'){
                toast.error('Incorrect Password. Try Again')
            }
            else if(message === 'user-not-found).'){
                toast.error("User Not Found")
            }
            else if(message === "network-request-failed)."){
                toast.error("Network Error")
            }
            else{
                toast.error("Something went wrong")
            }
        }
    }

    async function registerUser(){
        try{
            await createUserWithEmailAndPassword(
                auth,
                registerData.email,
                registerData.password
            );
    
            updateProfile(auth.currentUser, {
                displayName:registerData.name
            })
    
            toast.success("You are Successfully Registered!")
        }
        catch(error){
            toast.error("Something went wrong");
        }
    }

    return (
        <section className="welcome-page">
            <h1 className="main-heading">INDOOR MUSEUM NAVIGATION</h1>
            <p className="caption">EVERYTHING MADE EASY!</p>
            <nav>
                <ul className="nav-links">
                    <li onClick={() => { setSigninClicked(prev => !prev); setRegisterClicked(prev => !prev) }} className={signinClicked ? "active links" : "links"}>SIGNIN</li>
                    <li onClick={() => { setSigninClicked(prev => !prev); setRegisterClicked(prev => !prev) }} className={registerClicked ? "active links" : "links"}>REGISTER</li>
                </ul>
            </nav>

            {signinClicked && 
            <div className="form">
                <input onChange={handleFormChange} type="email" placeholder="Email" name="email"  />
                <div className='form-password'>
                    <input onChange={handleFormChange}  type={showPassword? "text" : "password"} placeholder="Password" name="password"  />
                    {
                        !showPassword &&
                        <AiFillEye
                            size={22}
                            className={!showPassword && 'password-icon'}
                            onClick={() => setShowPassword(prev => !prev)}
                        />
                    }
                    {
                        showPassword &&
                        <AiFillEyeInvisible
                            size={22}
                            className={'password-icon'}
                            onClick={() => setShowPassword(prev => !prev)}
                        />}
                <button onClick={signinUser}>SIGNIN</button>
                </div>
            </div>}

            {registerClicked && <div className="form">
                <input onChange={handleFormChange} type="name" placeholder="Name" name="name" id="" />
                <input onChange={handleFormChange} type="email" placeholder="Email" name="email" id="" />
                <div className='form-password'>
                    <input onChange={handleFormChange} type={showPassword? "text" : "password"} placeholder="Password" name="password" id="" />
                    {
                        !showPassword &&
                        <AiFillEye
                        size={22}
                            className={!showPassword && 'password-icon'}
                            onClick={() => setShowPassword(prev => !prev)}
                            />
                        }
                    {
                        showPassword &&
                        <AiFillEyeInvisible
                        size={22}
                        className={'password-icon'}
                        onClick={() => setShowPassword(prev => !prev)}
                        />
                    }
                <button onClick={registerUser}>REGISTER</button>
                </div>
            </div>}

            { }
            <div className="image">
            </div>
        </section>

    )
}