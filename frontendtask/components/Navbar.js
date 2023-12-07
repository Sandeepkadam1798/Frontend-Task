import React from "react";
import   logo  from "../public/logo.png"
import Image from "next/image";


const Navbar = () => {
  return (
    <>
      <div class="flex flex:row justify-evenly ">
        <div class="w-[1440px] h-[108px] px-20 pt-8 bg-white bg-opacity-60 backdrop-blur-[32px] justify-between items-center inline-flex">
          <Image
            class="w-[200px] h-auto "
            src= {logo}
            alt="logo"
          />
          

          <div class=" w-[216px] h-11 px-6 py-2.5 rounded-[32px] border border-slate-950 justify-center items-center gap-1 flex ">
            <div class="w-[168px] text-center text-slate-950 text-base font-bold font-['Inter'] leading-normal">
              Contact us
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
