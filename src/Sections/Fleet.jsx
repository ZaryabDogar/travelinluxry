import React from 'react';
import Slider from '../Components/Slider';
import Fslide1 from '../Components/Fslide1';
import Fslide2 from '../Components/Fslide2';
import Fslide3 from '../Components/Fslide3';
import Fslide4 from '../Components/Fslide4';
import Fslide5 from '../Components/Fslide5';
import Fslide6 from '../Components/Fslide6';
import Fslide7 from '../Components/Fslide7';
import Fslide8 from '../Components/Fslide8';
const Fleet = () => {
	const slides = [<Fslide1 key={1} />, <Fslide2 key={2}/>, <Fslide3 key={3}/>,<Fslide4 key={4}/>,<Fslide5 key={5}/>,<Fslide6 key={6}/>,<Fslide7 key={7}/>,<Fslide8 key={8}/>,];

	return (
		<section className="xl:px-14 sm:px-8 px-4 mt-8">
			<div className="bg-[#CC405D] sm:rounded-[32px] rounded-2xl sm:py-14 py-8 px-5 text-white lg:w-fit ">
				<h1 className="font-Lora xl:text-[52px] lg-[34px] leading-[28px] font-bold text-[32px] sm:pb-4 underline  mx-8 lg:text-start text-center">
					FLEET
				</h1>
				<Slider slides={slides} />
			</div>
		</section>
	);
};

export default Fleet;
