import React from "react";


const allCardData = [
    {
      title: "Automotive SEO",
      description: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
    },
    {
      title: "PPC Precision",
      description: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
    },
    {
      title: "Social Acceleration",
      description: "Engage and influence your audience across social media platforms, amplifying your brand's presence and connection.",
    },
    {
      title: "Content Excellence",
      description: "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
    },
    {
      title: "Web Design",
      description: "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
    },
    {
      title: "Data-Driven Insights",
      description: "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
    },
    {
      title: "End-to-End Solutions",
      description: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
    },
    {
      title: "Video Marketing",
      description: "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
    },
  ];

const Services = () => {

    

  return (

    <>
    <div className="mt-8 sm:mt-16 lg:mt-32">
  <div className="max-w-[90%] mx-auto text-center text-slate-950 text-4xl sm:text-5xl lg:text-[32px] font-bold font-montserrat leading-tight mb-2">
    Our Service Offerings
  </div>
  <div className="max-w-[90%] mx-auto h-11 text-center text-zinc-800 text-xl sm:text-2xl font-normal font-open-sans lg:text-xl leading-9">
    Strategies that Drive Property Market Excellence
  </div>
</div>


    

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 p-5 m-5">
      {allCardData.map((card, index) => (
        <div key={index} className="w-full md:w-[48%] lg:w-auto px-4 py-8 bg-white rounded-lg shadow border flex-col justify-start items-center gap-4 inline-flex">
          <div className="self-stretch h-[83px] flex-col justify-start items-center gap-2 flex">
            <div className="w-[52px] h-[52px] relative">
              <div className="w-[52px] h-[52px] left-0 top-0 absolute bg-neutral-100 rounded-full" />
              <div className="w-6 h-6 left-[13.50px] top-[14px] absolute" />
            </div>
            <div className="self-stretch text-center text-slate-950 text-lg font-bold font-['Montserrat'] leading-snug">{card.title}</div>
          </div>
          <div className="self-stretch text-center text-zinc-800 text-sm font-normal font-['Open Sans']">{card.description}</div>
        </div>
      ))}

      
    </div>
    <div className="flex items-center justify-center h-full">
  <div className="px-16 py-[16.50px] bg-blue-600 rounded-[32px] border inline-flex items-center gap-1">
    <div className="text-center text-white text-lg font-semibold font-['Montserrat'] leading-7">Get started</div>
  </div>
</div>


    
    </>
  );
};

export default Services;
