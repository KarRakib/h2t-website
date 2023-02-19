import React from 'react';
import Shop from '../Brand/Shop';
import FlashDeals from '../Flash/FlashDeals';
import SlideCard from '../Slider';
import WhyChoose from '../WhyChoose/WhyChoose';
import Discount from './Discount/Discount';

const Home = ({products,addToCart}) => {
    const data = [
        {
          cover: <i class='fa-solid fa-truck-fast'></i>,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-id-card'></i>,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-shield'></i>,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: <i class='fa-solid fa-headset'></i>,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]
      console.log(process.env.REACT_APP_MyCreator);
    return (
        <div>
            <SlideCard></SlideCard>
            <FlashDeals addToCart={addToCart}  products={products}></FlashDeals>
            <Discount></Discount>
            <Shop></Shop>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
               data.map((val,index)=> <WhyChoose val={val} key={index}></WhyChoose>) 
            }
            </div>
        </div>
    );
};

export default Home;