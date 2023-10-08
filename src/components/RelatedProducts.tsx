import {useEffect, useState} from 'react'
import { RelatedProduct, SectionTitle } from "../components";
import { useRef } from 'react';
import {MdOutlineArrowBackIos,MdOutlineArrowForwardIos} from 'react-icons/md';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useAllProducts } from '../api/fetchProducts';
import { ProductItemType } from '../types';

type PropType = {
    category: string;
}
const RelatedProducts = ({category}:PropType) => {
    const sliderRef = useRef<Slider | null>(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [numberOfSlides, setNumberOfSlides] = useState(6);
    const {allProducts=[], isLoading,isError} = useAllProducts();
    const [relatedProducts, setRelatedProducts] = useState<ProductItemType[]|[]>([]);
    const currentWindowWidth = window.innerWidth;

    useEffect(()=>{
        setScreenWidth(currentWindowWidth);
        window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
        if(screenWidth < 400){
            setNumberOfSlides(3);
        }
        else if(screenWidth < 1024){
            setNumberOfSlides(4);
        }
        else if(screenWidth >=1024){
            setNumberOfSlides(4);
        }
        else if(screenWidth >=1280){
            setNumberOfSlides(5);
        }
        //eslint-disable-next-line
    },[currentWindowWidth]);

    useEffect(()=>{
        const filteredData = allProducts.filter((item:ProductItemType) => item.category === category);
        setRelatedProducts(filteredData);
    //eslint-disable-next-line
    },[isLoading]);

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: numberOfSlides,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true, //will pause when the container is hover
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

if(isLoading){
    return (
        <section className='max-w-screen-xl mx-auto flex flex-col justify-between items-center'>
            <div className="w-16 h-16 mt-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </section>)}
if(isError){
    return (
        <section className='w-full flex flex-col justify-center items-center gap-10'>
            <div className="flex-1 w-full bg-red-100 text-red-600 border border-red-400 rounded p-4 flex flex-col justify-center items-center">
                <h2 className="font-semibold text-lg mb-2">Something Went Wrong</h2>
                <p className="text-sm">Sorry, we encountered an error while loading the products.</p>
            </div>
        </section>
    )}

return (
<section className='mt-6 lg:mt-12'>
    <SectionTitle title='related products'/>
  

    <div className="relative bg-slate-200 px-1 py-4 lg:p-4">
        {/* PREVIOUOS BUTTON */}
        <div className='w-full'>
            <button className='absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 opacity-30 hover:text-gray-100 hover:opacity-70 duration-300 text-3xl lg:text-6xl' onClick={handlePrevious}><MdOutlineArrowBackIos /></button>
            {/* NEXT BUTTON */}
            <button className='absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 opacity-30 hover:text-gray-100 hover:opacity-70 duration-300 text-3xl lg:text-6xl' onClick={handleNext}><MdOutlineArrowForwardIos /></button>
        </div>

            <Slider ref={sliderRef} {...settings}>
        
            {relatedProducts.map((product)=>{
                        return (
                            <div key={product._id} className="p-1">

                                <RelatedProduct key={product._id} item={product}/>
                            </div>
                            )
                        })}
            </Slider>
        
    </div>
</section>
)
}

export default RelatedProducts