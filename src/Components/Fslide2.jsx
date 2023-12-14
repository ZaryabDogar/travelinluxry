import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { SlPlane } from 'react-icons/sl';
import pass from '../assets/22pass.png';
const Fslide2 = () => {
	return (
		<div className="xl:pt-14 pt-6 w-full font-raleway sm:px-6 flex relative md:flex-row flex-col md:items-start items-center">
			<div>
				<div className="2xl:mb-8 mb-4">
					<div className="flex items-center space-x-5">
						<p className="xl:text-[24px] sm:text-[22px] text-[14px] ">
							<IoTimeOutline />
						</p>
						<p className="xl:text-[24px] sm:text-[22px] text-[14px]">22 PASSENGER BUS</p>
					</div>
					<p className="xl:text-[24px] sm:text-[22px] text-[14px]">
						+toll surcharges and fuel surcharge (if applicable)
					</p>
				</div>
				<div className="">
					<div className="flex items-center space-x-5">
						<p className="xl:text-[24px] sm:text-[22px] text-[14px] ">
							<SlPlane />
						</p>
						<p className="xl:text-[24px] sm:text-[22px] text-[14px]">Airport Transfers starting at $150</p>
					</div>
					<p className="xl:text-[24px] sm:text-[22px] text-[14px]">
						+airport pickup fee, toll surcharges, stops, waiting time and fuel
						surcharge (if applicable)
					</p>
				</div>
			</div>
			<div className="sm:mt-0 mt-10  sm:mr-8 ">
				<img src={pass} className="md:w-[685px] w-[500px] " alt="" />
			</div>
		</div>
	);
};

export default Fslide2;
