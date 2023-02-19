import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Discount.css"
import { useQuery } from "@tanstack/react-query"

const DiscountCard = () => {
    const { data: discounts = [], refetch } = useQuery({
        queryKey:['discounts'],
        queryFn: async ()=>{
            const res = await fetch('https://jobbox-server-tau.vercel.app/discount')
            const data = await res.json()
            return data;
        }
    })
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <>
            <Slider {...settings}>
                {discounts.map((value, index) => {
                    return (
                        <>
                            <div className='box product' key={index}>
                                <div className='img'>
                                    <img className="h-12" src={value.cover} alt='' width='100%' />
                                </div>
                                <h4>{value.name}</h4>
                                <span>{value.price}</span>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default DiscountCard;