import React, { useEffect, useState } from 'react';
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import arrowright from '../assets/arrowright.png';
import arrowleft from '../assets/leftarrow.png';
const Slider = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const nextSlide = () => {
		const nextIndex = (currentSlide + 1) % slides.length;
		setCurrentSlide(nextIndex);
	};
	const prevSlide = () => {
		setCurrentSlide((prevSlide) =>
		  prevSlide === 0 ? slides.length - 1 : prevSlide - 1
		);
	  };
	// useEffect(() => {
	// 	// Auto-play slides every 3000 milliseconds (3 seconds)
	// 	const intervalId = setInterval(() => {
	// 		nextSlide();
	// 	}, 4000);

	// 	// Clear the interval when the component unmounts
	// 	return () => clearInterval(intervalId);
	// }, [currentSlide]);
	// const isAtFirstSlide = currentSlide === 0;
	// const isAtLastSlide = currentSlide === slides.length - 1;
	return (
		<div className="slider text-white relative 2xl:h-[700px] xl:h-[520px] lg:h-[490px] md:h-[430px] sm:h-[600px]  h-[546px] select-none">
			<button
				onClick={prevSlide}
				className="absolute sm:bottom-0 bottom-10 sm:left-10 -left-2  sm:w-[68px] w-[30px] z-30 "
			>
				<img
					src={arrowleft}
					className=" sm:w-[68px] w-[30px]"
					alt="left-arrow"
				/>
				{/* <IoIosArrowRoundBack  className={`xl:text-[155px] sm:text-[100px] text-[50px] absolute xl:bottom-10  sm:-bottom-10 sm:left-10 -left-4 bottom-48 ${isAtFirstSlide?'text-[#808080]':''}`}/> */}
			</button>
			<div className="slide transition-all duration-500 ease-in-out">
				{slides[currentSlide]}
			</div>
			<button
				onClick={nextSlide}
				className="absolute  sm:bottom-0   sm:right-10 -right-2 bottom-10 text-white   sm:w-[68px] w-[30px] "
			>
				{/* <IoIosArrowRoundForward className={`xl:text-[155px] sm:text-[100px] text-[50px] ${isAtLastSlide?'text-[#808080]':''}`}/> */}
				<img
					src={arrowright}
					className=" sm:w-[68px] w-[30px]"
					alt="right-arrow"
				/>
			</button>
		</div>
	);
};

export default Slider;
