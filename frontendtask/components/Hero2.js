import React from "react";
import Third from "@/public/3_page.jpg";
import Image from "next/image";

const Hero2 = () => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@500&display=swap');
      </style>

      <div className="flex justify-center mt-14">
        <div className="w-[839px] text-center text-slate-950 text-[32px] font-bold font-['Montserrat'] leading-[48px]">
          Real Estate-Focused Digital Mastery
        </div>
      </div>

      <div className="flex  justify-evenly mt-10">
        <div className="mt-2 ">
          <Image className="w-[450px] h-auto " src={Third} alt="logo" />
        </div>

        <div className="w-[733px] h-[292px] flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[646px] text-slate-950 text-[32px] font-bold font-['Montserrat'] leading-[48px]">
            Unlock the Potential of Digital Real Estate Excellence
          </div>
          <div className="self-stretch text-zinc-800 text-2xl font-normal font-['Open Sans'] leading-9">
            At Osumare, we understand that the real estate landscape demands a
            digital presence that aligns with the intricacies of property
            marketing. Our range of specialized services is meticulously
            designed to catapult your brand's success in the ever-evolving
            digital property market.
          </div>

          <div className="w-auto h-[61px] px-16 py-[16.50px] bg-blue-600 rounded-[32px] border justify-center items-center  inline-flex">
            <div className="text-center text-white text-lg font-semibold font-['Montserrat'] leading-7">
            Get started
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
