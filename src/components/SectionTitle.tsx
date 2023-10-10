type PropType = {
    title:string;
}


const SectionTitle = ({title}: PropType) => {
  return (
    <div className="w-full px-4 flex flex-col justify-start items-center gap-2 mb-4 md:mb-10 z-10">   
        <h2 className="capitalize px-4 text-center text-xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-sky-500 to-sky-900 bg-clip-text">{title}</h2>
        <div className="w-[40%] mt-2 border-b-2 md:border-b-4 border-yellow-500 rounded-lg"></div>
  </div>
  )
}

export default SectionTitle