type ServicesProps = {
    item: {
        title: string;
        description: string;
        action:  string;
        photoStyle: string;
        spanStyle: string;
    }
}

const ServicesCard = ({item}:ServicesProps) => {
   const {title, description, action, photoStyle, spanStyle} = item;
   
  return (
    <div className="flex w-full items-center justify-center self-stretch">
        {/* Front  */}
            <div className="group h-full [perspective:1000px] self-stretch">
            {/*  */}
                <div className="relative h-full w-full  transition-all duration-500 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] ">
                {/* Front */}
                    <div className="h-full flex flex-col items-end rounded-xl shadow-xl overflow-hidden bg-white">
                    {/* Image and Gradient */}
                    <div className={`h-72 w-full ${photoStyle}`}>
                        {/* <div className={`w-full h-full`}>
                        </div> */}
                    </div>
                    <div className="relative flex flex-col ">
                        <h4 className="card-heading-front p-4"> 
                        <span className={`card-span ${spanStyle} text-white`}>{title}</span>
                        </h4>
                        <p className=" p-4 pt-10 text-sm">{description}</p>

                    </div>
                    <div className={`w-full py-10 pt-16 clip-polygon flex justify-center items-center ${spanStyle} lg:hidden`} >
                            <button className="py-4 px-10 bg-slate-100 text-slate-800 rounded-full capitalize hover:bg-blue-200 duration-100 hover:shadow-2xl">{action}</button>
                    </div>
                    </div>
                    {/* back */}
                    <div className={`absolute inset-0 h-full ${spanStyle} bg-slate-700 px-12 text-center text-slate-200 [transform:rotateY(180deg)]  [backface-visibility:hidden] rounded-xl shadow-xl overflow-hidden`}>
                        <div className="w-full h-full flex justify-center items-center">
                        <button className="py-4 px-10 text-sm bg-slate-100 text-slate-800 rounded-full capitalize hover:bg-blue-200 duration-100 hover:shadow-2xl">{action}</button>
                        
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ServicesCard