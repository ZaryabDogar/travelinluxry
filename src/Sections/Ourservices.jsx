import React from 'react'
import plane from '../assets/plane.png'
import city from '../assets/city.png'
import building from '../assets/building.png'
import bus from '../assets/bus.png'
import livery from '../assets/livery.png'
import greet from '../assets/greet.png'
const Ourservices = () => {
  return (
<section className='py-14 px-[15px] text-white' name='service'>
    <div className="flex flex-wrap justify-center">
        <div className="2xl:w-[45%] lg:w-[48%] lg:text-start text-center font-Lora pl-10 pt-4 pr-6 pb-6">
            <p className="lg:block hidden  mb-16 font-[500] text-[42px] leading-[28px] mt-8 lg:no-underline "><span className='border-b-[3px] border-[#CC405D] pb-4 '>OUR SE</span>RVICES</p>
            <p className="block lg:hidden mb-16 font-[500] text-[28px] sm:text-[42px] leading-[28px] mt-8 lg:no-underline ">OU<span className='border-b-[3px] border-[#CC405D] pb-4 '>R SERVIC</span>ES</p>
            <p className="text-[16px] leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare sem non est iaculis convallis. Suspendisse luctus blandit magna, sed molestie nunc semper sit amet. Vivamus ornare iaculis urna, at ullamcorper </p>
        </div>
        {/* card1  */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] sm:w-[230px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 sm:mx-2 mx-1 2xl:my-5 my-2">
            <img src={plane} className='w-[93px] h-[93px]' alt="" />
            <p className="font-[500] text-[22px] leading-[28px] text-center">Airport <br />Transfers</p>
        </div>
        {/* card2 */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] sm:w-[230px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 sm:mx-2 mx-1 2xl:my-5 my-2">
            <img src={building} className='sm:w-[93px] sm:h-[93px]' alt="" />
            <p className="font-[500] text-[22px] leading-[28px] text-center">Corporate <br />Transportation</p>
        </div>
        {/* card2 */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] sm:w-[230px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 sm:mx-2 mx-1 2xl:my-5 my-2">
            <img src={city} className='sm:w-[96px] sm:h-[96px]' alt="" />
            <p className="font-[500] text-[22px] leading-[28px] text-center">City Tours</p>
        </div>
        {/* card2 */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] sm:w-[230px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 sm:mx-2 mx-1 2xl:my-5 my-2">
            <img src={bus} className='sm:w-[121px] sm:h-[93px]' alt="" />
            <p className="font-[500] text-[22px] leading-[28px] text-center">Shuttle <br />Transfers</p>
        </div>
        {/* card2 */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] sm:w-[230px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 sm:mx-2 mx-1 2xl:my-5 my-2">
            <img src={livery} className='sm:w-[98px] sm:h-[96px]' alt="" />
            <p className="font-[500] text-[22px] leading-[28px] text-center">Livery <br />Service </p>
        </div>
        {/* card2 */}
        <div className="bg-[#CC405D0F] flex flex-col justify-center items-center 2xl:w-[302px] xl:w-[280px] sm:w-[230px] w-[302px] h-[275px] rounded-[32px] font-raleway space-y-4 sm:mx-2 mx-1 2xl:my-5 my-2">
            <img src={greet} className='sm:w-[120px] sm:h-[72px]' alt="" />
            <p className="font-[500] text-[22px] leading-[28px] text-center">Meet & <br />Greet</p>
        </div>
    </div>
</section>
  )
}

export default Ourservices