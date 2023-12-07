import React from 'react';
import Image from 'next/image';
import background from '@/public/background.jpg';
import background2 from '@/public/background2.png';
import Header from '@/public/Header.jpg';

const Hero = () => {
  return (
    <>
      <div className='relative  md:mt-24 lg:mt-48'>
        <Image className='w-full h-full object-cover opacity-60 backdrop-blur-2xl' src={background} alt='Background Image' />
        <Image className='absolute inset-0 w-full h-full object-cover' src={background2} alt='Overlay Image' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center mt-10'>
          <span className='text-slate-950 text-3xl md:text-5xl lg:text-5xl font-medium font-montserrat leading-[48px] md:leading-[72px]'>
            Elevate {" "}
          
          <span className='text-blue-600 text-3xl md:text-5xl lg:text-5xl font-bold font-montserrat leading-[48px] md:leading-[72px]'>
            Real Estate Success {''}
          </span>
          <span className='text-slate-950 text-3xl md:text-5xl lg:text-5xl font-medium font-montserrat leading-[48px] md:leading-[72px]'>
            with {" "}
            </span>
          </span>
          <span className='text-slate-950 text-3xl md:text-5xl lg:text-5xl font-medium font-montserrat leading-[48px] md:leading-[72px]'>
            {' '}
             Osumare's Digital Expertise
          </span>
          <div className="w-[899px] text-center text-zinc-800 text-2xl font-normal font-['Open Sans'] leading-9 mt-10">Tailored Solutions for Thriving in the Digital Real Estate Landscape</div>

          <div className="w-[408] h-14 px-[136px] py-[13px] bg-blue-600 rounded-[32px] border justify-center items-center gap-1 inline-flex mt-24">
    <div className="text-center text-white text-2xl font-bold font-['Montserrat'] leading-[30px] ">Get started</div>
</div>


          <Image className='h-[auto] w-96 mt-24' src={Header}/>
        </div>
      </div>
    </>
  );
};

export default Hero;
