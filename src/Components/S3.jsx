import React from 'react';

import img from '../../public/slide3.jpg';

import { useEffect, useState } from 'react';
const S3 = () => {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		// Set a brief delay to allow the component to render before applying the transition
		const timeout = setTimeout(() => {
			setLoaded(true);
		}, 100);

		// Clear the timeout to avoid memory leaks
		return () => clearTimeout(timeout);
	}, []);


	const backgroundStyle = {
		backgroundImage: `linear-gradient( rgba(0,0,0,0.5), transparent), url(${img})`,
		backgroundSize: 'cover',
		backgroundPosition: 'bottom center',
		// borderRadius: '32px',26px
	};
	// const gradientStyle = {
	// 	backgroundImage:
	// 		'linear-gradient(to top, rgba(76,29,149,0.5), transparent)',
	// 	transition: 'background-image 0.5s ease-in-out', // Add a transition for a smoother effect
	// };
	return (
		<div className="h-full w-full ">
			<div
				style={backgroundStyle}
				className="xl:h-[80vh] lg:h-[80vh] md:h-[65vh] sm:h-[60vh] h-[55vh] xl:rounded-[32px] md:rounded-[28px] sm:rounded-[24px] rounded-2xl w-full flex items-center justify-center "
			>
				<div className=" text-white   flex justify-center  text-center  w-full h-full   items-center">
					<div
						className={`w-full h-full flex justify-center items-center flex-col    transition-all duration-500 ease-in font-Lora text-white px-4  ${
							loaded
								? 'opacity-100 translate-y-0'
								: 'opacity-0 -translate-y-[10%]'
						}`}
					>
						<h1 className="md:text-[50px] sm:text-4xl text-2xl font-[500] leading-[28px]  mb-5">
						RELIABLE CHAUFFEURS
						</h1>
						<p className="sm:text-[16px]  text-sm font-[400] leading-[28px] max-w-lg">
						Expect only the best from our professionally trained and uniformed chauffeurs. Clients can feel comfortable and confident knowing a Cullitons car will arrive on time, with a friendly and professional chauffeur. 
						</p>

						{/* <Button content='Lets Get Started' /> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default S3;
