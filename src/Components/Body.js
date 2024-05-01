import React, { useEffect } from 'react'
import Login from './AuthenticationPages/Login'
import { Browse } from './Pages/Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'

export const Body = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, accessToken, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, accessToken: accessToken, displayName: displayName, photoURL: photoURL }));
            } else {
                // User is signed out
                dispatch(removeUser())
            }
        });
    }, [])

    const appRouter = createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/browse", element: <Browse /> }
    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}
