import { useEffect } from "react";

const About = () => {

  useEffect(()=>{
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling animation
      });
    };
    scrollToTop();
  },[]);
 

  return (
    <section className="pt-10 flex flex-col text-lg">
      <article className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
          <h2 className="whitespace-nowrap uppercase absolute -top-5 lg:top-10 right-1/2 transform translate-x-1/2 text-3xl lg:text-8xl font-bold tracking-wider lg:tracking-[0.2em]">About Us</h2>
          <div className="order-2 lg:order-1">
                <img className='object-cover' src="https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="About" />
          </div>
          <div className="order-1 lg:order-2 px-4 lg:px-10 pt-10 lg:pt-40  flex items-end">
              <p className="italic ">
              At <span className="font-semibold text-lg">BestiesPom Pet shop</span>, we're more than just an online pet shop. We're pet lovers, just like you, and we understand the joy and companionship that our furry, feathery, and scaly friends bring into our lives. That's why we're dedicated to providing you with the best selection of pet products and accessories, all in one convenient place.
              <br />
              <br />
              Our journey began with a simple idea: to make pet parenting easier and more enjoyable. We saw the need for a comprehensive online store that caters to the unique needs of pet owners, offering high-quality products that promote the health, happiness, and well-being of pets of all kinds.
              </p>
          </div>
      </article>
      <article className="-mt-[10rem] pt-[14rem] pb-10 grid grid-cols-1 md:grid-cols-2 px-4 gap-6 bg-[#BCECE0] rounded-tr-[20rem]">
            <div className="flex flex-col items-center gap-4">
              <h2 className="uppercase font-bold text-4xl md:text-[3rem]">our mission</h2>
              <div className="flex flex-col lg:flex-row gap-4 items-center py-5">
                <div className="p-7 w-1/3 lg:w-1/2 bg-white rounded-full overflow-hidden">
                  <img src="https://media.istockphoto.com/id/1004198294/vector/pet-paw-symbol-simple-black-dog-or-cat-footprint-shape.jpg?s=612x612&w=0&k=20&c=7QGzowZhg4MFqjQWbjnhhaYBbBDXK7Qp4M7Jdtp43P0=" alt="Mission" />
                </div>
                <p>
                Our mission is to connect pet parents with the best products, information, and resources to ensure their pets live their happiest, healthiest lives. We're committed to being a trusted partner in your pet's journey, from their early days as a puppy or kitten to their golden years.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="uppercase font-bold text-4xl md:text-[3rem]">our Vission</h2>
              <div className="flex flex-col lg:flex-row gap-4 items-center py-5">
                <div className="p-7 w-1/3 lg:w-1/2 bg-white rounded-full overflow-hidden">
                  <img src="https://static.thenounproject.com/png/3587161-200.png" alt="Mission" />
                </div>
                <p>
                We want a world where pet parents are empowered with the knowledge and resources they need to provide the best care for their furry, feathered, or scaled companions. We believe that well-informed and confident pet parents make happier pets.
                </p>
              </div>
            </div>
      </article>
      <article className="-mt-1 mb-5 pt-5 bg-[#BCECE0] rounded-bl-[20rem] pb-[3rem] flex flex-col items-center gap-10">
        <h2 className="uppercase font-bold text-[2rem]">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-4 w-3/4 leading-tight">
          <div className="bg-[#F652A0] p-5 rounded-xl">
            <h3 className="font-bold text-lg text-slate-800">Wide Product Range:</h3>
            <p>Discover a vast selection of pet food, treats, toys, grooming supplies, and more for dogs, cats, birds, fish, and small animals.</p>
          </div>
          <div className="bg-[#F652A0] p-5 rounded-xl">
            <h3 className="font-bold text-lg">Expert Advice:</h3>
            <p>Explore our blog and resource center for informative articles, guides, and tips on pet care, training, and health.</p>
          </div>
          <div className="bg-[#F652A0] p-5 rounded-xl">
            <h3 className="font-bold text-lg">Convenient Shopping:</h3>
            <p> Enjoy a seamless shopping experience with user-friendly features, secure payment options, and prompt delivery to your doorstep.</p>
          </div >
        </div>
      </article>
    </section>
  )
}

export default About