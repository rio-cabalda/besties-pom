import React, { useState, useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {MdOutlineArrowBackIos,MdOutlineArrowForwardIos} from 'react-icons/md';
import { longList } from '../utils/carouselData';



const Hero = () => {
  const [heroCarousel] = useState(longList);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false, //will pause when the container is hover
  };

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Trigger the Slick Carousel's previous method
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Trigger the Slick Carousel's next method
    }
  };

  return (
    <section className='w-full relative'>

        {/* PREVIOUOS BUTTON */}
        <button className='absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 opacity-30 hover:text-gray-100 hover:opacity-70 duration-300 text-6xl' onClick={handlePrevious}><MdOutlineArrowBackIos /></button>
        {/* NEXT BUTTON */}
        <button className='absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 opacity-30 hover:text-gray-100 hover:opacity-70 duration-300 text-6xl' onClick={handleNext}><MdOutlineArrowForwardIos /></button>

      <Slider ref={sliderRef} {...settings}>
        {heroCarousel.map((slide)=>{
            const {id, image} = slide;

            return (
            <article key={id} className='w-full h-[80vh] bg-blue-700'>
                <img className='w-full h-full object-cover' src={image} alt='image' />
            </article>
            )
          })}
        </Slider>
    </section>
  )
}

export default Hero