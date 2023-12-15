import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { SlPlane } from 'react-icons/sl';
import { TbCurrencyDollar } from 'react-icons/tb';
import pass from '../assets/14pass.png';
import int1 from '../assets/int1.png';
import int2 from '../assets/int2.png';
import int3 from '../assets/int3.png';
import map from '../assets/map.pdf';
const Fslide1 = () => {
	return (
		<div className="w-full">
			<div className="flex lg:justify-between lg:flex-row flex-col items-center">
				<div className="">
					<p className="sm:block hidden font-Lora xl:text-[18.14px] lg-[34px] leading-[28px] text-[16px] sm:pb-4  mx-8 lg:text-start text-center">
					11 PASSENGER VAN
					</p>
					<h1 className="font-Lora xl:text-[52px] lg-[34px] leading-[28px] font-bold sm:text-[32px] text-[20px] sm:pb-4  mx-8 lg:text-start text-center  lg:no-underline underline">
						<span className="lg:border-b-4 lg:border-white pb-2">FLEET &</span> RATES
					</h1>
				</div>
				<div className="lg:flex hidden xl:space-x-5 lg:space-x-2  space-x-3 2xl:pr-14 justify-center my-3">
					<img src={int1} className='2xl:w-[210px] xl:h-auto lg:w-[180px] lg:h-[140px] w-[30%]' alt="" />
					<img src={int2} className='2xl:w-[210px] xl:h-auto lg:w-[180px] lg:h-[140px] w-[30%]'alt="" />
					<img src={int3} className='2xl:w-[210px] xl:h-auto lg:w-[180px] lg:h-[140px] w-[30%]' alt="" />
				</div>
			</div>
			<div className="2xl:pt-12 pt-3 w-full font-raleway sm:px-6 flex relative md:flex-row md:justify-between flex-col md:items-start items-center">
				<div>
					<div className="2xl:mb-6 mb-3">
						<div className="flex items-center space-x-5 font-bold">
							<p className="xl:text-[40px] sm:text-[22px] text-[14px] ">
								<TbCurrencyDollar />
							</p>
							<p className="xl:text-[20px] sm:text-[18px] text-[16px]">
								LIVERY RATES (CITY OF TORONTO):
							</p>
						</div>
						<p className="xl:text-[18px] sm:text-[16px] text-[14px]">
							$150.00 per hour to the nearest half hour (min. 2hour)
						</p>
					</div>
					<div className="2xl:mb-8 mb-3">
						<div className="flex items-center space-x-5 font-bold">
							<p className="xl:text-[40px] sm:text-[22px] text-[14px] ">
								<IoTimeOutline />
							</p>
							<p className="xl:text-[20px] sm:text-[18px] text-[16px]">
								11 PASSENGER VAN
							</p>
						</div>
						<p className="xl:text-[18px] sm:text-[16px] text-[14px]">
							+toll surcharges and fuel surcharge (if applicable)
						</p>
					</div>
					<div className="">
						<div className="flex items-center space-x-5 font-bold">
							<p className="xl:text-[40px] sm:text-[22px] text-[14px] ">
								<SlPlane />
							</p>
							<p className="xl:text-[20px] sm:text-[18px] text-[16px]">
								Airport Transfers starting at $150
							</p>
						</div>
						<p className="xl:text-[18px] sm:text-[16px] text-[14px]">
							+airport pickup fee, toll surcharges, stops, waiting time and fuel
							surcharge (if applicable)
						</p>
					</div>
					<div className="w-full sm:justify-start justify-center flex">
					<a href={map} target="_blank" rel="noreferrer">
						<button className="font-raleway font-semibold text-sm text-center bg-[#000000] sm:px-7 px-3 py-2 sm:py-[12px] rounded-[10px] 2xl:mt-12 sm:my-3 my-4 xl:text-[16px] sm:text-[14px] text-[12px]">
							CITY OF TORONTO RATE MAP
						</button>
					</a></div>
				</div>
				<div className=" 2xl:w-full flex justify-end items-end">
					<img src={pass} className="2xl:w-[654px] xl:w-[500px] lg:w-[400px] md:w-[550px] w-[350px] " alt="" />
				</div>
			</div>
		</div>
	);
};

export default Fslide1;
