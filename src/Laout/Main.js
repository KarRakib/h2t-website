import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router-dom';
import productItem from '../Pages/Flash/productItem';
import Footer from '../Sheared/Footer/Footer';
import Nav from '../Sheared/NavBar/Nav';


const Main = ({CartItem}) => {
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://jobbox-server-tau.vercel.app/products')
            const data = await res.json()
            return data
        }
    })
    // const [products, setProducts] = useState({})
    const { productItems } = productItem
    console.log(products);

    // const [CartItem, setCartItem] = useState([])

    //Step 4 :
    // const addToCart = (product) => {
    //     const productExit = CartItem.find((item) => item.id === product.id)
    //     if (productExit) {
    //         setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    //     } else {
    //         setCartItem([...CartItem, { ...product, qty: 1 }])
    //     }
    // }

    // const decreaseQty = (product) => {
    //     const productExit = CartItem.find((item) => item.id === product.id)
    //     if (productExit.qty === 1) {
    //         setCartItem(CartItem.filter((item) => item.id !== product.id))
    //     } else {
    //         setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    //     }
    // }
    return (
        <div>
         <Nav CartItem={CartItem}></Nav>
            <Outlet></Outlet>
            <Footer className='py-12'></Footer>
        </div>
    );
};

export default Main;