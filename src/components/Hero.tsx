import { useState, useRef } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {MdOutlineArrowBackIos,MdOutlineArrowForwardIos} from 'react-icons/md';
import { heroCarousel } from '../data/carouselData';
import { Link } from 'react-router-dom';



const Hero = () => {
  const [carousel] = useState(heroCarousel);
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
        <div className='hidden md:block'>
          <button className='absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 opacity-30 hover:text-gray-100 hover:opacity-70 duration-300 text-6xl' onClick={handlePrevious}><MdOutlineArrowBackIos /></button>
          {/* NEXT BUTTON */}
          <button className='absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 opacity-30 hover:text-gray-100 hover:opacity-70 duration-300 text-6xl' onClick={handleNext}><MdOutlineArrowForwardIos /></button>
        </div>

      <div className='opacity-30'>
        <Slider ref={sliderRef} {...settings}>
          {carousel.map((slide)=>{
              const {id, image} = slide;

              return (
              <article key={id} className='w-full h-[60vh] md:h-[80vh]'>
                  <img className='w-full h-full object-cover' src={image} alt='image' />
              </article>
              )
            })}
          </Slider>
      </div>
     

        {/* Hero Section Content */}
        <article className='absolute top-0 left-0 w-full h-full p-4 md:px-20  bg-gradient-to-r from-white/90 to-slate-700/20 flex flex-col justify-center items-start'>
          <h1 className='mb-5 font-bold leading-tight text-slate-600 text-3xl md:leading-tight md:text-5xl lg:text-6xl lg:leading-tight '>Discover a World of <br/><span className='text-transparent bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text'>Tail-Wagging Happiness!</span>
          </h1>
          <p className='max-w-3xl text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text font-semibold md:text-xl lg:text-xl mb-8'>Browse our extensive collection and find the perfect products that will keep those tails wagging.</p>
          <Link to='products' className='rounded-sm py-2 px-4 bg-sky-500 text-white hover:bg-sky-600 hover:text-slate-100 duration-300'>Shop Now</Link>
          
          
        </article>
    </section>
  )
}

export default Hero