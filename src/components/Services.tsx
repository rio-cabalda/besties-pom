import {useRef, useEffect} from 'react'
import { SectionTitle } from ".";
import { services } from "../utils/constant";
import ServicesCard from "./ServicesCard";
import videoBg from '../assets/videoBg.mp4';

const Services = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
 // State variable to control video speed
 

 // Use useEffect to set the playbackRate when the component mounts
 useEffect(() => {
   if (videoRef.current) {
     // Set the playbackRate to slow down the video
     videoRef.current.playbackRate = 0.5  // Adjust the speed as needed
   }
 }, []); // This effect runs when isSlowedDown changes
  
 

  return (
    <section className="relative py-20 w-full flex flex-col justify-center items-center transform -translate-y-14 overflow-hidden">
      <video ref={videoRef} className='absolute inset-0 w-full h-full object-cover bg-slate-200 bg-blend-overlay opacity-50' src={videoBg} autoPlay loop muted></video>
      {/* <div className='absolute inset-0 w-full h-full bg-black/40'></div> */}
      <SectionTitle title={'Purrfect Pet Services'} />
      <div className="font-semibold text-slate-800 grid max-w-[400px] md:grid-cols-2 md:max-w-[700px] lg:grid-cols-3 lg:max-w-[900px] items-center gap-3 p-10 pt-5 ">

        {services.map((item)=>{
          return (
            <ServicesCard key={item.title} item={item} />
          )
        })}

      </div>
    </section>
  )
}

export default Services