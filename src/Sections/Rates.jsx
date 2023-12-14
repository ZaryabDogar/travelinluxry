import React from 'react';
import seat from '../../public/seat.png';
import map from '../assets/map.pdf';
const Rates = () => {
	return (
		<section className="sm:px-20 px-4 py-12" name="rates">
			<div className="flex justify-between  lg:flex-row flex-col text-white font-Lora lg:space-x-5">
				<div className="lg:w-[45%] max-w-3xl lg:text-start text-center ">
					<p className="block   mb-16 font-[500] text-[42px] leading-[28px] mt-8 lg:no-underline ">
						<span className="border-b-[3px] border-[#CC405D] pb-4 ">RATES</span>
					</p>
					<p className="text-[20px] leading-[28px] font-bold mb-6">
						LIVERY RATES (CITY OF TORONTO ONLY)
					</p>
					<a href={map} target="_blank" rel="noreferrer">
						<button className="font-raleway font-semibold text-sm text-center bg-[#CC405D] px-3 py-[19px] rounded-[10px] mb-8">
							CITY OF TORONTO RATE MAP
						</button>
					</a>
				</div>
				<div className="flex flex-col space-y-6 items-center ">
					<div className="flex items-center space-x-6 sm:w-[588px]  px-6 py-4 rounded-[32px] bg-[#CC405D0F]">
						<img src={seat} className="w-[37px] h-[45px]" alt="" />
						<div className="flex flex-col sm:space-y-5 space-y-3">
							<p className="sm:text-[20px] text-[16px] leading-[20px] font-bold ">
								4 passenger sedan:
							</p>
							<p className="sm:text-[18px] text-[14px] leading-[20px] font-normal ">
								$70.00 per hour to the nearest half hour (min. 1 hour)
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-6 sm:w-[588px]  px-6 py-4 rounded-[32px] bg-[#CC405D0F]">
						<img src={seat} className="w-[37px] h-[45px]" alt="" />
						<div className="flex flex-col sm:space-y-5 space-y-3">
							<p className="sm:text-[20px] text-[16px] leading-[20px] font-bold ">
								6 passenger van:
							</p>
							<p className="sm:text-[18px] text-[14px] leading-[20px] font-normal ">
								$95.00 per hour to the nearest half hour (min. ​1 hour)
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-6 sm:w-[588px]  px-6 py-4 rounded-[32px] bg-[#CC405D0F]">
						<img src={seat} className="w-[37px] h-[45px]" alt="" />
						<div className="flex flex-col sm:space-y-5 space-y-3">
							<p className="sm:text-[20px] text-[16px] leading-[20px] font-bold ">
								6 passenger SUV:
							</p>
							<p className="sm:text-[18px] text-[14px] leading-[20px] font-normal ">
								$115.00 per hour to the nearest half hour (min. 1 hour)
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-6 sm:w-[588px]  px-6 py-4 rounded-[32px] bg-[#CC405D0F]">
						<img src={seat} className="w-[37px] h-[45px]" alt="" />
						<div className="flex flex-col sm:space-y-5 space-y-3">
							<p className="sm:text-[20px] text-[16px] leading-[20px] font-bold ">
								11 passenger van:
							</p>
							<p className="sm:text-[18px] text-[14px] leading-[20px] font-normal ">
								$150.00 per hour to the nearest half hour (min. 2 hour)
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-6 sm:w-[588px]  px-6 py-4 rounded-[32px] bg-[#CC405D0F]">
						<img src={seat} className="w-[37px] h-[45px]" alt="" />
						<div className="flex flex-col sm:space-y-5 space-y-3">
							<p className="sm:text-[20px] text-[16px] leading-[20px] font-bold ">
								14 passenger van:
							</p>
							<p className="sm:text-[18px] text-[14px] leading-[20px] font-normal ">
								$175.00 per hour to the nearest half hour (min. 2 hour)
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rates;
