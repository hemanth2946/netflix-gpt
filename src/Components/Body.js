import React from 'react'
import Login from './AuthenticationPages/Login'
import { Browse } from './Pages/Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const Body = () => {
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
