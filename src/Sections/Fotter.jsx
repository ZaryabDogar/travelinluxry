import React from 'react';
import { Element, Link as ScrollLink, scroller } from 'react-scroll';
import flogo from '../assets/foterlogo.png';
import mlogo from '../assets/flogo.png'
const Fotter = () => {
	const scrollToSection = (section) => {
		scroller.scrollTo(section, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart',
			offset: -50, // Adjust the offset based on your layout
		});
	};
	return (
		<footer className="lg:pt-20 pt-14">
			<div className="lg:px-12 sm:px-8 px-4">
				<div className="flex sm:justify-between sm:items-center sm:flex-row flex-col items-center sm:text-start text-center pb-10">
					<div className="flex flex-col space-y-12 py-8 sm:mb-0 mb-10">
						<img
							src={mlogo}
							className={` transition-all  ease-in-out duration-300 2xl:w-[328px] xl:[300px] lg:w-[200px] w-[200px]`}
							
						/>
						<img
							src={flogo}
							className={` transition-all  ease-in-out duration-300 2xl:w-[468px] xl:[400px] lg:w-[350px] w-[250px]`}
						/>
					</div>
					<div className="font-raleway text-white 2xl:pr-24">
						<p className="font-[500] sm:text-[32px] text-[25px] leading-[37.57px] text-[#CC405D] sm:pb-8 pb-8">
							Quick Links
						</p>
						<ul
							className={`  font-[500] md:text-sm text-[25px] text-navtext font-Lora flex flex-col space-y-3`}
						>
							<li
								className={`  xl:text-[18px] lg:text-[14px] text-[14px] cursor-pointer select-none capitalize`}
							>
								<ScrollLink
									to="about"
									smooth={true}
									duration={500}
									onClick={() => scrollToSection('about')}
								>
									ABOUT US
								</ScrollLink>
							</li>
							<li
								className={` xl:text-[18px] lg:text-[14px] text-[14px] cursor-pointer select-none  capitalize`}
							>
								<ScrollLink
									to="service"
									smooth={true}
									duration={500}
									onClick={() => scrollToSection('service')}
								>
									{' '}
									Services
								</ScrollLink>
							</li>
							<li
								className={`  xl:text-[18px] lg:text-[14px] text-[14px] cursor-pointer select-none capitalize`}
							>
								<ScrollLink
									to="fleet"
									smooth={true}
									duration={500}
									onClick={() => scrollToSection('fleet')}
								>
									fleet
								</ScrollLink>
							</li>
							<li
								className={`  xl:text-[18px] lg:text-[14px] text-[14px] cursor-pointer select-none capitalize`}
							>
								<ScrollLink
									to="New Bookings "
									smooth={true}
									duration={500}
									onClick={() => scrollToSection('New Bookings ')}
								>
									New Bookings 
								</ScrollLink>
							</li>
							<li
								className={`  xl:text-[18px] lg:text-[14px] text-[14px] cursor-pointer select-none capitalize`}
							>
								<ScrollLink
									to="Manage Booking"
									smooth={true}
									duration={500}
									onClick={() => scrollToSection('Manage Booking')}
								>
									Manage Booking
								</ScrollLink>
							</li>
							<li
								className={`  xl:text-[18px] lg:text-[14px] text-[14px] cursor-pointer select-none capitalize`}
							>
								<ScrollLink
									to="Account Application Form"
									smooth={true}
									duration={500}
									onClick={() => scrollToSection('Account Application Form')}
								>
									Account Application Form
								</ScrollLink>
							</li>
						</ul>
					</div>
				</div>
                <div className="w-full border-[0.7px] border-white"></div>
                <div className="py-8 font-Lora text-white flex justify-center sm:items-center lg:flex-row flex-col items-center lg:text-start text-center ">
                    <div className="lg:mb-0 mb-5">
                        <p className="text-[16px] leading-[20.5px]">© 2024 Cullitons Limousine Service Limited. All Rights Reserved</p>
                    </div>
                    {/* <div className="flex 2xl:space-x-24 xl:space-x-14 lg:space-x-8 lg:flex-row flex-col items-center lg:text-start text-center lg:space-y-0 space-y-8">
                        <div className="">
                        <p className="sm:text-[20px] text-[18px] leading-[25.6px] mb-2">ADDRESS</p>
                        <p className="sm:text-[16px] text-[16px] ">511 McNicoll Ave, Suite 201
</p>
                        <p className="sm:text-[16px] text-[16px] ">North York, ON M2H 2C9</p>
                        </div>
                        <div className="">
                        <p className="sm:text-[20px] text-[18px] leading-[25.6px] mb-2">ACCOUNTING AND ADMINISTRATION</p>
                        <p className="sm:text-[16px] text-[16px] ">416-495-1900
</p>
                        <p className="sm:text-[16px] text-[16px] ">administration@cullitons.com</p>
                        <p className="sm:text-[16px] text-[16px] ">9AM-5PM Monday to Friday</p>
                        </div>
                    </div> */}
                </div>
			</div>
		</footer>
	);
};

export default Fotter;
