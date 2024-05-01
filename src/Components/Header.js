import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser());
            navigate("/");
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage, "code and message of errors")
        });
    }
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
            <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Logo' />
            {user &&
                <div className='flex m-4'>
                    <img className='w-10 ronded-lg' alt='user-logo' src={user?.photoURL} />
                    <button className='font-bold p-2 m-2 bg-red-500 text-white w-full rounded-lg ' onClick={handleSignOut}>Sign out</button>
                </div>
            }
        </div>
    )
}
