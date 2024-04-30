import React, { useRef, useState } from 'react'
import { Header } from '../Header'
import { validateForm } from '../../utils/Validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

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
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_small.jpg' alt='Backgroung' />
            </div>
            <form onSubmit={handleFormSubmit} className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={nameRef} type='text' placeholder='Name' className='p-4 my-2 w-full bg-gray-800' />}
                <input ref={emailRef} type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-800' />
                <input ref={passwordRef} type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-800' />
                {!isSignInForm && <input ref={confirmPasswordRef} type='password' placeholder='Confirm Password' className='p-4 my-2 w-full bg-gray-800' />}
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg ' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-6 cursor-pointer' onClick={handleSignInForm}>  {isSignInForm ? "New to Netflix?   Sign Up Now" : "Alredy have an Account?   Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login