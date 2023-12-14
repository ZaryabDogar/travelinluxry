import React, { useEffect, useRef, useState } from 'react';
import { GrFormPrevious } from 'react-icons/gr';
import { MdNavigateNext } from 'react-icons/md';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import './mySwiper.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide1 from '../Components/Slide1';
import Slide2 from '../Components/Slide2';
import S3 from '../Components/S3';
// Swiper.use([ Pagination, Autoplay]);

const Slider = () => {
	
	return (
		<section className="xl:pt-[110px] pt-24">
			{/* remove height from here */}
			<div className="   w-full relative mt- lg:px-12 md:px-8 px-4  bg-mainbg">
				{' '}
				<Swiper
					pagination={{ clickable: true }}
					modules={[Autoplay,Pagination]}
					spaceBetween={50}
					slidesPerView={1}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					loop={true}
					data-swiper-autoplay="4000"
					
					
					className="mySwiper xl:rounded-[32px] md:rounded-[28px] sm:rounded-[24px] rounded-2xl"
				>	
					<SwiperSlide>
						{' '}
				
					
						<Slide1 />
					</SwiperSlide>
					<SwiperSlide>
						{' '}
						<Slide2 />
					</SwiperSlide>
					<SwiperSlide>
					{' '}
				
					<S3></S3>
				</SwiperSlide>
				</Swiper>
				
			</div>
		</section>
	);
};

export default Slider;
