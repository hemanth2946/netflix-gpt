import React, { useState } from 'react'
import { Header } from '../Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_small.jpg' alt='Backgroung' />
            </div>
            <form className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 '>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Name' className='p-4 my-2 w-full bg-gray-800' />}
                <input type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-800' />
                <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-800' />
                {!isSignInForm && <input type='password' placeholder='Confirm Password' className='p-4 my-2 w-full bg-gray-800' />}
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg '>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-6 cursor-pointer' onClick={handleSignInForm}>  {isSignInForm ? "New to Netflix?   Sign Up Now" : "Alredy have an Account?   Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login