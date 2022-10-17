import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';
import Main from '../layout/Main';

const MainRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/home",
                    element: <Home></Home>
                },
                {
                    path: "/about",
                    element: <About></About>
                },
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default MainRouter;