import React from 'react'
import Image from "next/image";
import Fourth from '../public/4_pge.png';

const Digitallandscape = () => {
  return (

    <>

    <div className="mt-8 sm:mt-16 lg:mt-32">
  <div className="max-w-[90%] mx-auto text-center text-slate-950 text-4xl sm:text-5xl lg:text-[32px] font-bold font-montserrat leading-tight mb-2">
  Navigating Real Estate's Digital Landscape
  </div>
  <div className="max-w-[90%] mx-auto h-11 text-center text-zinc-800 text-xl sm:text-2xl font-normal font-open-sans lg:text-xl leading-9">
  Insights for Real Estate Marketing Advantage
  </div>
</div>




  

<div className='relative flex flex-col lg:flex-row mt-5'>

  <div className="relative lg:w-[586px] lg:ml-10">
  <div className="w-[586px] h-[100px] p-8 bg-white rounded-2xl shadow border border-zinc-100 justify-center items-center gap-4 inline-flex mt-4">
      <div className="w-[52px] h-[52px] relative">
        <div className="w-[52px] h-[52px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
        <div className="w-6 h-6 left-[14px] top-[13.60px] absolute" />
      </div>
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-full lg:w-[454px] text-slate-950 text-2xl font-semibold font-['Poppins'] leading-loose">Competitor Insights</div>
        <div className="w-full lg:w-[454px] text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Stand out in the property market with informed strategies.</div>
      </div>
    </div>

    <div className="w-[586px] h-[100px] p-8 bg-white rounded-2xl shadow border border-zinc-100 justify-center items-center gap-4 inline-flex mt-4">
      <div className="w-[52px] h-[52px] relative">
        <div className="w-[52px] h-[52px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
        <div className="w-6 h-6 left-[14px] top-[13.60px] absolute" />
      </div>
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-full lg:w-[454px] text-slate-950 text-2xl font-semibold font-['Poppins'] leading-loose">Targeted Buyer Persona</div>
        <div className="w-full lg:w-[454px] text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Understand and connect with your ideal property buyers.</div>
      </div>
    </div>

    <div className="w-[586px] h-[100px] p-8 bg-white rounded-2xl shadow border border-zinc-100 justify-center items-center gap-4 inline-flex mt-4">
      <div className="w-[52px] h-[52px] relative">
        <div className="w-[52px] h-[52px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
        <div className="w-6 h-6 left-[14px] top-[13.60px] absolute" />
      </div>
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-full lg:w-[454px] text-slate-950 text-2xl font-semibold font-['Poppins'] leading-loose">Competitor Insights</div>
        <div className="w-full lg:w-[454px] text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Stand out in the property market with informed strategies.</div>
      </div>
    </div>

    <div className="w-[586px] h-[100px] p-8 bg-white rounded-2xl shadow border border-zinc-100 justify-center items-center gap-4 inline-flex mt-4">
      <div className="w-[52px] h-[52px] relative">
        <div className="w-[52px] h-[52px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
        <div className="w-6 h-6 left-[14px] top-[13.60px] absolute" />
      </div>
      <div className="flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-full lg:w-[454px] text-slate-950 text-2xl font-semibold font-['Poppins'] leading-loose">Visual Content Appeal</div>
        <div className="w-full lg:w-[454px] text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Captivate buyers with appealing visuals and immersive experiences.</div>
      </div>
    </div>

  </div>

  <div className="mt-2 lg:mt-0 lg:absolute lg:right-60 lg:translate-x-0 z-1">
    <Image className="w-full lg:w-[550px] h-auto" src={Fourth} alt="logo" />
  </div>

</div>



   






    </>
  )
}

export default Digitallandscape