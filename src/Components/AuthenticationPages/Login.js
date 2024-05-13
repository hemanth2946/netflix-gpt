import React, { useRef, useState } from 'react'
import { Header } from '../Header'
import { validateForm } from '../../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../utils/userSlice';
import { BACKGROUND_IMG, USER_AVATAR } from '../../utils/constants';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    // zxcv!234A
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        let name, confirmPassword;
        if (!isSignInForm) {
            name = nameRef.current.value;
            confirmPassword = confirmPasswordRef.current.value;
        }

        const formFields = isSignInForm ? { email, password } : { name, email, password, confirmPassword }

        const errors = validateForm(formFields, isSignInForm);
        console.log(errors);
        setErrorMessage(errors);

        if (errors) return;
        if (!isSignInForm) {
            // signup logic
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name, photoURL: USER_AVATAR
                    }).then(() => {
                        const { displayName, email, photoURL } = auth.currentUser;
                        dispatch(addUser({ displayName: displayName, email: email, photoURL: photoURL }));
                        // navigate("/browse");
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                    console.log(user);

                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage)
                })
        } else {
            // signin logic
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage)
                });
        }
    }
    return (
        <div>
            <Header />
            <div className='absolute w-full'>
                <img className='h-screen md:h-full object-cover md:w-screen' src={BACKGROUND_IMG} alt='Background' />
            </div>
            <form onSubmit={handleFormSubmit} className='w-full m-2 md:w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
                <h1 className='font-bold text-lg md:text-3xl py-1 md:py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={nameRef} type='text' placeholder='Name' className='p-2 my-2 md:p-4 md:my-2 w-full bg-gray-800' />}
                <input ref={emailRef} type='text' placeholder='Email Address' className='p-2 my-2 md:p-4 md:my-2  w-full bg-gray-800' />
                <input ref={passwordRef} type='password' placeholder='Password' className='p-2 my-2 md:p-4 md:my-2 w-full bg-gray-800' />
                {!isSignInForm && <input ref={confirmPasswordRef} type='password' placeholder='Confirm Password' className='p-2 my-2 md:p-4 md:my-2 w-full bg-gray-800' />}
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className=' p-2 my-1 md:p-4 md:my-4 bg-red-700 w-full rounded-lg ' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py:4 md:py-6 cursor-pointer' onClick={handleSignInForm}>  {isSignInForm ? "New to Netflix?   Sign Up Now" : "Alredy have an Account?   Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login