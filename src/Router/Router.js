import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Laout/Main';

const Router = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>
        }
    ])
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Router;