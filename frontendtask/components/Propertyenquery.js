import React from 'react'

import Image from "next/image";
import Five from '../public/Five.JPG';



const Propertyenquery = () => {
  return (
    <>
    
    <div className="mt-8 sm:mt-16 lg:mt-32">
  <div className="max-w-[90%] mx-auto text-center text-slate-950 text-4xl sm:text-5xl lg:text-[32px] font-bold font-montserrat leading-tight mb-2">
  Driving Property Inquiries to Conversions
  </div>
  <div className="max-w-[90%] mx-auto h-11 text-center text-zinc-800 text-xl sm:text-2xl font-normal font-open-sans lg:text-xl leading-9">
  Streamlined Strategies for Real Estate Success
  </div>
</div>
 
<div className="flex  justify-evenly mt-10">
        <div className="mt-2 ">
          <Image className="w-[450px] h-auto " src={Five} alt="logo" />
        </div>

        <div className="w-[733px] h-[292px] flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[682px] text-slate-950 text-[32px] font-bold font-['Montserrat'] leading-[48px]">Optimized Path to Property Purchase</div>
        <div className="w-[682px] text-zinc-800 text-2xl font-normal font-['Open Sans'] leading-9">In the dynamic realm of real estate, the journey from a property inquiry to a successful conversion demands a well-crafted approach. At Osumare, we specialize in guiding potential buyers through this journey seamlessly, maximizing inquiries-turned-conversions with expert strategies.</div>
        

          <div className="w-auto h-[61px] px-16 py-[16.50px] bg-blue-600 rounded-[32px] border justify-center items-center  inline-flex">
            <div className="text-center text-white text-lg font-semibold font-['Montserrat'] leading-7">
            Get started
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Propertyenquery