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
	const slides = [<Fslide1 key={1} />, <Fslide3 key={3}/>,<Fslide8 key={8}/>, <Fslide5 key={5}/>,<Fslide6 key={6}/>,<Fslide2 key={2}/>,<Fslide4 key={4}/>,<Fslide7 key={7}/>,];

	return (
		<section className="xl:px-14 sm:px-8 px-3 mt-8 w-full mb-12" id='fleet'>
			<div className="bg-[#CC405D] sm:rounded-[32px] rounded-2xl 2xl:py-12 sm:py-6 py-4 pb-8 sm:pb-8 sm:px-5 px-2 text-white lg:w-fi ">
			
				<Slider slides={slides} />
			</div>
		</section>
	);
};

export default Fleet;
