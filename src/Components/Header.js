import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gptSearch.showGptSearch);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, accessToken, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, accessToken: accessToken, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        // unsubscribe will called when component is unmounted.
        return () => unsubscribe();
    }, [])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser());
            // navigate("/");
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage, "code and message of errors")
        });
    }

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
            <img className='w-44' src={LOGO} alt='Logo' />
            {user &&
                <div className='flex m-4'>
                    {showGptSearch && <select className='p-2 m-2 rounded-lg bg-gray-500 text-white' onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGES.map((item) => <option key={item.identifier} value={item.identifier} name={item.name} >{item.name} </option>)}
                    </select>}
                    <button className='no-wrap font-bold bg-green-500 text-white py-2 my-2 mx-2 px-2 rounded-lg w-full' onClick={handleGptSearch}>{!showGptSearch ? "Gpt Search" : "Home"} </button>
                    <img className='w-10 rounded-lg' alt='user-logo' src={user?.photoURL} />
                    <button className=' no-wrap font-bold p-2 m-2 bg-red-500 text-white w-full rounded-lg ' onClick={handleSignOut}>Sign out</button>
                </div>
            }
        </div>
    )
}
