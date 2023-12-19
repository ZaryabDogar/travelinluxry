import React, { useState, useEffect } from 'react';
import plane from '../assets/plane.png'
import city from '../assets/city.png'
import building from '../assets/building.png'
import bus from '../assets/bus.png'
import livery from '../assets/livery.png'
import greet from '../assets/greet.png'
const Ourservices = () => {
    const [isSectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('service-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        setSectionVisible(rect.top <= window.innerHeight /2);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
<section className='py-14 px-[15px] text-white' name='service' id='service-section'>
<style>
  {`
    .service-card img {
      transition: opacity 1s ease-in-out, width 0.5s ease-in-out;
      opacity: ${isSectionVisible ? 1 : 0};
      width: ${isSectionVisible ? 'fit' : '0'}; /* Adjust the width value based on your design */
    }
  `}
</style>

<div className="flex w-full justify-center sm:mb-12">
    <div className="flex flex-wrap lg:grid grid-cols-4 justify-center xl:w-[92%]  place-items-center">
        <div className="lg:w-full lg:text-start text-center font-Lora 2xl:pl-10 xl:pl-3 lg:pl-8 pl-0 pt-4 lg:pr-6 pb-6 col-span-2">
            <p className="lg:block hidden  mb-16 font-[500] text-[42px] leading-[28px] mt-8 lg:no-underline "><span className='border-b-[3px] border-[#CC405D] pb-4 '>OUR SE</span>RVICES</p>
            <p className="block lg:hidden mb-16 font-[500] text-[28px] sm:text-[42px] leading-[28px] mt-8 lg:no-underline ">OU<span className='border-b-[3px] border-[#CC405D] pb-4 '>R SERVIC</span>ES</p>
            <p className="text-[16px] leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare sem non est iaculis convallis. Suspendisse luctus blandit magna, sed molestie nunc semper sit amet. Vivamus ornare iaculis urna, at ullamcorper </p>
        </div>
        {/* card1  */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] lg:w-[238px] sm:w-[233px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4  lg:ml-0 2xl:mx-0 sm:mx-2 mx-1 2xl:my-2 my-2 service-card">
            <img src={plane} className='sm:w-[93px] sm:h-[93px] w-[80px] h-[80px]' alt="" />
            <p className="font-[500] sm:text-[22px] text-[18px] leading-[28px] text-center">Airport <br />Transfers</p>
        </div>
        {/* card2 */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] lg:w-[238px] sm:w-[233px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 lg:ml-0 2xl:mx-0 sm:mx-2 mx-1 2xl:my-2 my-2 service-card">
            <img src={building} className='sm:w-[93px] sm:h-[93px]  w-[83px] h-[83px]' alt="" />
            <p className="font-[500] sm:text-[22px] text-[18px] leading-[28px] text-center">Corporate <br />Transportation</p>
        </div>
        {/* card2 */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] lg:w-[238px] sm:w-[233px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 lg:ml-0 2xl:mx-0 sm:mx-2 mx-1 2xl:my-2 my-2 service-card">
            <img src={city} className='sm:w-[96px] sm:h-[96px]  w-[86px] h-[86px]' alt="" />
            <p className="font-[500] sm:text-[22px] text-[18px] leading-[28px] text-center">City Tours</p>
        </div>
        {/* card2 */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] lg:w-[238px] sm:w-[233px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 lg:ml-0 2xl:mx-0 sm:mx-2 mx-1 2xl:my-2 my-2 service-card">
            <img src={bus} className='sm:w-[121px] sm:h-[93px]  w-[110px] h-[83px]' alt="" />
            <p className="font-[500] sm:text-[22px] text-[18px] leading-[28px] text-center">Shuttle <br />Transfers</p>
        </div>
        {/* card2 */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] lg:w-[238px] sm:w-[233px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 lg:ml-0 2xl:mx-0 sm:mx-2 mx-1 2xl:my-2 my-2 service-card">
            <img src={livery} className='sm:w-[98px] sm:h-[96px]  w-[88px] h-[86px]' alt="" />
            <p className="font-[500] sm:text-[22px] text-[18px] leading-[28px] text-center">Livery <br />Service </p>
        </div>
        {/* card2 */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] lg:w-[238px] sm:w-[233px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 lg:ml-0 2xl:mx-0 sm:mx-2 mx-1 2xl:my-2 my-2 service-card">
            <img src={greet} className='sm:w-[120px] sm:h-[72px]  w-[110px] h-[62px]' alt="" />
            <p className="font-[500] sm:text-[22px] text-[18px] leading-[28px] text-center">Meet & <br />Greet</p>
        </div>
    </div></div>
</section>
  )
}

export default Ourservices