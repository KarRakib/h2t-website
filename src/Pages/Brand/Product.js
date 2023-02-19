import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const Product = ({addToCart}) => {
    const { data : allProduct= []} = useQuery({
        queryKey:['allProduct'],
        queryFn: async ()=>{
            const res = await fetch('https://jobbox-server-tau.vercel.app/product');
            const data = res.json()
            return data
        }
    })
    const [count, setCount] = useState(0)
    const increment = () => {
      setCount(count + 1)
    }
    console.log(allProduct);
    return (
        <>
        {allProduct.map((shopItems, index) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{shopItems.discount}% Off</span>
                  <img src={shopItems.cover} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                  <h3>{shopItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${shopItems.price}.00 </h4>
                    {/* step : 3  
                       if hami le button ma click garryo bahne 
                      */}
                    <button onClick={() => addToCart(shopItems)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </>
    );
};

export default Product;