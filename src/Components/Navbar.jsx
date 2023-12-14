import React, { useEffect, useState } from 'react';

import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

import { Element, Link as ScrollLink, scroller } from 'react-scroll'; // Import ScrollLink and scroller

const Navbar = () => {
	//history
	// const history = useHistory();

	// dropdown
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	//   navbar color
	const [isScrolled, setIsScrolled] = useState(false);

	// Function to handle scroll events
	const handleScroll = () => {
		// Check if the user has scrolled beyond a certain point (you can adjust this value)
		const scrollY = window.scrollY;
		if (scrollY > 100) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	// Effect to add scroll event listener
	useEffect(() => {
		// Add event listener when component mounts
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []); // Empty dependency array ensures the effect runs only once on mount

	const scrollToSection = (section) => {
		scroller.scrollTo(section, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart',
			offset: -50, // Adjust the offset based on your layout
		});
	};
	return (
		<nav>
			<div>
				<nav
					className={`fixed   z-50 top-0 start-0 w-full   lg:px-8 px-4 transition-all duration-300 bg-[#0A0B0D] ${
						isScrolled ? ' shadow-sm py-3' : ' py-4'
					}`}
				>
					<div className=" flex flex-wrap items-center justify-between mx-auto  ">
						{/* leftsidew */}
						<div className="flex justify-start items-center  ">
							<ScrollLink to="/">
								<img
									src="/logo.png"
									className={` transition-all  ease-in-out duration-300 ${
										isScrolled
											? '2xl:w-[200px] xl:w-[180px] lg:w-[150px] w-[140px]'
											: '2xl:w-[239px] xl:[220px] lg:w-[190px] w-[160px]'
									}`}
									alt=""
								/>
							</ScrollLink>
						</div>
						{/* right side  */}
						<div className="flex  items-center">
							<ul
								className={`lg:flex hidden  font-[500] md:text-sm text-[25px] text-navtext font-raleway ${
									isScrolled ? 'text-black' : 'text-white'
								}`}
							>
								<li
									className={`px-3 py-1 xl:text-[18px] lg:text-[14px] text-[12px] cursor-pointer select-none  uppercase`}
								>
									<ScrollLink
										to="service"
										smooth={true}
										duration={500}
										onClick={() => scrollToSection('service')}
									>
										{' '}
										SERVICES
									</ScrollLink>
								</li>
								<li
									className={` lg:px-3 2xl:px-7 px-2 py-1 xl:text-[18px] lg:text-[14px] text-[12px] cursor-pointer select-none uppercase`}
								>
									<ScrollLink
										to="procedures"
										smooth={true}
										duration={500}
										onClick={() => scrollToSection('procedures')}
									>
										procedures
									</ScrollLink>
								</li>
								<li
									className={`lg:px-3 2xl:px-7 px-2  py-1  xl:text-[18px] lg:text-[14px] text-[12px] cursor-pointer select-none uppercase`}
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
									className={` lg:px-3 2xl:px-7 px-2 py-1 xl:text-[18px] lg:text-[14px] text-[12px] cursor-pointer select-none uppercase`}
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
									className={` lg:px-3 2xl:px-7 px-2 py-1  xl:text-[18px] lg:text-[14px] text-[12px] cursor-pointer select-none uppercase`}
								>
									<ScrollLink
										to="rates"
										smooth={true}
										duration={500}
										onClick={() => scrollToSection('rates')}
									>
										Rates
									</ScrollLink>
								</li>
								<li
									className={` lg:px-3 2xl:px-7 px-2 py-1  xl:text-[18px] lg:text-[14px] text-[12px] cursor-pointer select-none uppercase`}
								>
									<ScrollLink
										to="contact"
										smooth={true}
										duration={500}
										onClick={() => scrollToSection('contact')}
									>
										Contact
									</ScrollLink>
								</li>
								<li
									className={` lg:px-3 2xl:px-7 px-2 py-1  xl:text-[18px] lg:text-[14px] text-[12px] cursor-pointer select-none uppercase font-[700]`}
								>
									<ScrollLink to="/">new booking</ScrollLink>
								</li>
							</ul>

							<button
								type="button"
								className={`  font-medium text-3xl  px-2 py-2 text-center text-navtext  lg:hidden block ${
									isScrolled ? 'text-black' : 'text-white'
								}`}
								onClick={toggleDropdown}
							>
								<RxHamburgerMenu />
							</button>
						</div>
					</div>
					{/* responsive  */}

					<div
						className={`w-[100vw] p- pb-20 pt-4 shadow-xl absolute top-[0px] right-0 border-1 z-50  h-screen flex flex-col transition-transform duration-500 bg-mainbg text-navtext ${
							isOpen ? 'translate-x-0' : 'translate-x-full'
						}`}
					>
						<div
							className={`flex items-center justify-between w-full py-4  pt-4`}
						>
							{/* img  */}
							<div className="flex md:pr-24 md:pl-0 pl-5">
								<img src="/logo.png" alt="" className="xl:w-full w-[169px] " />
							</div>

							<button
								type="button"
								className={`  text-4xl  px-2 py-2 text-center  focus:outline-none block  pr-5 z-30 font-bold`}
								onClick={toggleDropdown}
							>
								<RxCross2 />
							</button>
						</div>
						<div className=" pt-8 ">
							<ul className="font-normal font-sans   flex flex-col w-full justify-center text-center items-center space-y-8 text-[28px] text-bluetext">
								<ScrollLink
									to="service"
									smooth={true}
									duration={500}
									onClick={() => {
										scrollToSection('service');
										toggleDropdown();
									}}
								>
									{' '}
									SERVICES
								</ScrollLink>
								<ScrollLink
									to="procedures"
									smooth={true}
									duration={500}
									onClick={() => {
										scrollToSection('procedures');
										toggleDropdown();
									}}
								>
									<li className="uppercase">procedures</li>
								</ScrollLink>
								<ScrollLink
									to="about"
									smooth={true}
									duration={500}
									onClick={() => {
										scrollToSection('about');
										toggleDropdown();
									}}
								>
									<li className="uppercase">ABOUT US</li>
								</ScrollLink>
								<ScrollLink
									to="fleet"
									smooth={true}
									duration={500}
									onClick={() => {
										scrollToSection('fleet');
										toggleDropdown();
									}}
								>
									<li className="uppercase">fleet</li>
								</ScrollLink>
								<ScrollLink
									onClick={() => {
										scrollToSection('rates');
										toggleDropdown();
									}}
								>
									<li className="uppercase">Rates</li>
								</ScrollLink>
								<ScrollLink
									onClick={() => {
										scrollToSection('contact');
										toggleDropdown();
									}}
								>
									<li className="uppercase">Contact</li>
								</ScrollLink>
								<ScrollLink to="/">
									<li className={`uppercase font-bold`}>new booking</li>
								</ScrollLink>
							</ul>
							{/* buttons */}
						</div>
						<div className=" flex justify-center w-full items-end h-full"></div>
					</div>
				</nav>
			</div>
		</nav>
	);
};

export default Navbar;
