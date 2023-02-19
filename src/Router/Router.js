import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LogIn from '../Authentication/LogIn';
import Resister from '../Authentication/Resister';
import Main from '../Laout/Main';
import Home from '../Pages/Home/Home';
import ShoppingCart from '../Pages/Home/ShoppingCart/ShoppingCart';

const Router = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://jobbox-server-tau.vercel.app/products')
            const data = await res.json()
            return data
        }
    })
    console.log(products);
    const [CartItem, setCartItem] = useState([])
    const addToCart = (product)=>{
      console.log(product);
      const exitProduct = CartItem.find(i=> i._id === product._id)
      if(exitProduct){
        setCartItem(CartItem.map(i=> i._id === product._id ?{...exitProduct, qty: exitProduct.qty +1}:i))
      }else{
        setCartItem([...CartItem,{...product, qty:1}])
      }
      console.log(CartItem);
    }

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main CartItem={CartItem}></Main>,
            children:[
                {
                    path:'/',
                    element:<Home addToCart={addToCart} products={products}></Home>
                },
                {
                    path:'/register',
                    element:<Resister/>
                },
                {
                    path:'/login',
                    element:<LogIn></LogIn>
                },
                {
                    path:'/shopping',
                    element:<ShoppingCart CartItem={CartItem} addToCart={addToCart}></ShoppingCart>
                }
            ]
        },
        
    ])
    return (
        <RouterProvider router={router}>
            
        </RouterProvider>
    );
};

export default Router;