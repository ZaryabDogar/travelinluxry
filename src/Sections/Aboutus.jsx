import React, { useState } from 'react';
import about from '../../public/about11.png';
import about2 from '../assets/about2.gif';
import { RxCross2 } from "react-icons/rx";
const Aboutus = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<section className="sm:px-16 px-4 py-8" name="about" id='about'>
			<div className="flex justify-between items-center lg:flex-row flex-col text-white font-Lora lg:space-x-5">
				<div className=" xl:w-[55%] lg:w-[80%] max-w-3xl lg:text-start text-center">
					<p className="block mb-16 font-[500] text-[42px] leading-[28px] mt-8 lg:no-underline">
						<span className="border-b-[3px] border-[#CC405D] pb-4 ">
							ABOUT{' '}
						</span>
						US
					</p>
					<p className="text-[17px] leading-[28px] font-normal mb-6">
					At Cullitons Limousine, our journey began in 1918, shaping a legacy built on a century of dedication to precision, professionalism, and unwavering client-centric service. Over the years, we've seamlessly transitioned through transformative ownership, evolving into a second-generation family-owned enterprise with a commitment to innovation, adaptability, and the pursuit of excellence.
Today, Cullitons stands as one of North America's most respected transportation firms, recognized for unparalleled service to corporate clientele globally. With a dedicated team of professionals and a fleet that exemplifies sophistication and reliability, Cullitons Limousine is more than a transportation provider – we are your strategic partner, ensuring seamless, efficient, and tailored solutions for every journey.
Welcome to a century of excellence. Welcome to Cullitons Limousine.
					</p>
					<p className="text-[22px] leading-[28px] font-bold text-[#CC405D] mb-10">
						<span className="border-b-2 cursor-pointer" onClick={openModal}>
							READ MORE
						</span>
					</p>
				</div>
				<div className="">
					<img
						src={about}
						className="xl:w-[632px] xl:h-[390px] w-full"
						alt=""
					/>
				</div>
			</div>

			{isModalOpen && (
				<div className="">
				<div className="fixed sm:top-5 top-10 left-0 w-full h-full flex items-center justify-center bg-black bg-[rgba(0,0,0,0.7)] z-10 px-5 overflow-hidden mb-12" onClick={closeModal}>
					
				</div><div className="bg-[#000000] text-white sm:p-8 p-2 xl:max-w-4xl md:max-w-3xl w-[90%]  h-[80vh] text-center rounded-2xl select-none overflow-y-scroll no-scrollbar scrollbar-track z-30 fixed sm:top-24 top-10 left-[50%] -translate-x-[50%] ">
						<div className="">
						<button
          className=" bg-[#CC405D] text-white px-2 py-2 rounded-full float-right "
          onClick={closeModal}
        >
          <RxCross2 />
        </button>
						<p className="text-[20px] leading-[28px] font-bold text-[#CC405D] mb-4 text-center ">
							OUR HISTORY
						</p>
						</div>
						{/* Add more detailed information here */}
						<p className="text-[16px] leading-[28px] font-normal mb-5">
							Cullitons Limousine is one of the world's oldest limousine
							services. Although founded in 1918, the lineage can be tracked
							back to the mid 1800's to the times of horse and carriage. Born in
							1881, founder Frederick Cullitons, was the son of Patrick
							Cullitons, the second Sexton of the first Catholic Cemetery in
							Toronto, St. Michael's, opened in 1855. Patrick died in 1891 at
							age 44, leaving 10 year old Fredrick, five brothers and one sister
							to the best of it. As he grew to manhood, Frederick worked around
							St. Michael's with his father's successor, Patrick Crean, a cousin
							from Ireland. Fredrick toiled as a stone mason, a grave digger,
							church sexton and of course, a livery driver. <br /> <span className='font-semibold'>By the end of World War One</span>
							, cars were quickly replacing the horse and carriage as the
							mode of transportation. At age 37, Frederick Culliton had his foot
							in the door of the limousine industry, having worked as a driver
							for a Toronto livery service. In 1918, opportunity was knocking
							and Frederick Culliton answered. He purchased his first cars and
							never looked back. Years passed and the name Cullitons Limousine
							rose to become synonymous with quality and excellence in service.
							Cullitons was the choice of movie stars like Mary Pickford, and
							Captains of industry like Conn Smythe of Maple Leaf Gardens
						</p>
						<div className="">
							<img src={about2} alt="" />
						</div>
						<p className="text-[16px] leading-[28px] font-normal mt-5">
							In 1939, King George VI and Queen Elizabeth came to Toronto. Tour Organizers wanted the best limousine service to carry the Royal Family and only Cullitons would do. To carry the King and Queen, General Motors loaned two specially constructed bullet proof Buick's. Eleven cars in all were driven by the Cullitons chauffeurs. In the Culliton family archives rests a set of photos taken by one of the drivers during the tour. Copies adorn the walls of the present business office. In the years after, Cullitons became the premier limousine company in Toronto and the choice of Torontonians in the good times of weddings and for funerals in the times of sorrow. People knew they could depend on Cullitons to carry them through.Today Cullitons is the embodiment of the legacy of excellence set out by Frederick Culliton. In fact, we continually strive to not only maintain, but exceed, the strict standards clients have expected over the years. Cullitons takes pride in having one of the most extensive and largest fleets in Toronto. Clients have the choice of recent models of Lincoln's and Cadillac's in both sedan and stretch limousines. We also provide passenger vans and SUV service. All vehicle are equipped with cellular phones, POS credit/debit card machines and newspapers for client convenience. Uniformed Cullitons chauffeurs are selected for their extensive knowledge of main business sectors, institutions, hotels, airports, and residential areas in the Greater Metropolitan Toronto Area. As much as things change, much remains the same. For successive generations of clients, Cullitons has been the Limousine service of preference for special occasions. However, Cullitons Limousine is very much a company that reflects the times. Services now include ground transportation consulting, out-of-town services, weddings, sight-seeing tours, convention, business, and social function planning assistance. For your convenience, Cullitons Reservation and Dispatch office is open 24 hours a day, seven days a week. The Accounting and Administration office is open during regular business hours to answer any inquires. Upon request, French speaking staff are available. A toll-free number is also provided 1-800-263-8996 for clients across Canada and the United States.
						</p>
						<button
							className="mt-4 bg-[#CC405D] text-white px-4 py-2 rounded-md"
							onClick={closeModal}
						>
							Close
						</button>
					</div></div>
			)}
		</section>
	);
};

export default Aboutus;
