import React from 'react';

import img from '../../public/airport.png';
import t1 from '../assets/t1.pdf'
import t3 from '../assets/t3.pdf'

const Airport = () => {
	

	const backgroundStyle = {
		backgroundImage: `url(${img})`,
		backgroundSize: 'cover',
		backgroundPosition: 'top center',

	};

	return (
		<div className="h-full w-full sm:px-12 px-4 sm:mb-12" name='procedures'>
			<div
				style={backgroundStyle}
				className="  xl:rounded-[32px] md:rounded-[28px] sm:rounded-[24px] rounded-2xl w-full flex items-center justify-center py-12"
			>
				<div className=" text-white   flex justify-center  text-center  w-full h-full   items-center">
					<div
						className={`w-full h-full flex justify-center items-center flex-col  transition-all  font-Lora text-white px-4 `}
					>
						<h1 className="md:text-[50px] sm:text-4xl text-2xl font-[500] leading-[28px] pb-8">
                        AIRPORT PICKUP PROCEDURES
						</h1>
                        <p className="sm:text-[20px]  text-sm font-[700] leading-[28px] max-w-xl pb-8">PROCEDURES FOR PRE-ARRANGED AIRPORT PICK-UPS AT TORONTO’S PEARSON INTERNATIONAL AIRPORT</p>
						<p className="sm:text-[20px]  text-sm font-[400] leading-[28px] max-w-5xl pb-8">
                        Terminal # 1 and terminal # 3 please proceed to Door A, on arrivals level. See Commissionaire please give him the name in which the limousine was booked under and indicate that you are waiting for Cullitons Limousine. If Commissionaire advises you that there is no Cullitons Limousine registered in your name, or within 5 minutes of notifying the Commissionaire a Cullitons Limousine does not appear, please call our dispatch office immediately to assist you at 416-495-1900, or use our toll free number 1-800-263-8996.
						</p>
						<p className="sm:text-[20px]  text-sm font-[400] leading-[28px] max-w-5xl pb-8">
                        NOTE: In the event your flight arrives after midnight, the Commissionaire may not be present. In this case, please call our dispatcher at: 416-495-1900 24 hours a day, 7 days a week, and a vehicle will be sent to you from the compound immediately, this is done in order to better assist you and to prevent the "no show" fee.
						</p>
                        <p className="sm:text-[20px]  text-sm font-[700] leading-[28px] max-w-xl pb-8">PROCEDURES FOR PRE-ARRANGED AIRPORT PICK-UPS AT BILLY BISHOP TORONTO CITY AIRPORT</p>
                        <p className="sm:text-[20px]  text-sm font-[400] leading-[28px] max-w-5xl pb-8">
                        Passengers arriving at Billy Bishop Toronto City Airport can be dropped off and picked up at both the ferry and airport terminals. Due to the limited availability of parking spaces passengers requiring pick-ups from Billy Bishop Airport are advised to call our 24/7 dispatch office at 416-495-1900 or 1-800-263-8996 PRIOR TO BOARDING THE FERRY OR ENTERING THE TUNNEL.
						</p>


						{/* <Button content='Lets Get Started' /> */}
						<div className="flex md:space-x-16 md:space-y-0 space-y-5 md:flex-row flex-col">
  <a href={t1} target="_blank" rel="noopener noreferrer">
    <button className='font-raleway font-semibold text-sm text-center bg-[#CC405D] px-3 py-[19px] rounded-[10px]'>DOWNLOAD THE YYZ T-1 GUIDE</button>
  </a>
  <a href={t3} target="_blank" rel="noopener noreferrer">
    <button className='font-raleway font-semibold text-sm text-center bg-[#CC405D] px-3 py-[19px] rounded-[10px]'>DOWNLOAD THE YYZ T-3 GUIDE</button>
  </a>
</div>
					</div>
				</div>
               
			</div>
		</div>
	);
};

export default Airport;
