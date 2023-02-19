import React from "react"
import SliderData from "./SliderData"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../App.css';
import './Slider.css'
const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "-10px" }}>{dots}</ul>
    },
  }
  console.log(SliderData);
  return (
    <>
      <Slider {...settings}>
        {SliderData.map((value, index) => {
          return (
            <>
              <section className="homeSlide  contentWidth">
                <div className="container">
                  <div className='box d_flex top' key={index}>
                    <div className='left'>
                      <h1>{value.title}</h1>
                      <p>{value.desc}</p>
                      <button className='btn-primary'>Visit Collections</button>
                    </div>
                    <div className='right'>
                      <img className="w-80 h-80" src={value.cover} alt='' />
                    </div>
                  </div>
                </div>
              </section>
              {/* <div className="flex">
                <div className="w-2/3 top-1/2">
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
                </div>
                <img className="w-80 h-96" src={value.cover} alt="" />
              </div> */}
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default SlideCard
