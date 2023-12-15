import React from 'react';
import Aboutus from '../Sections/Aboutus';
import Airport from '../Sections/Airport';
import ContactForm from '../Sections/ContactForm';
import Fotter from '../Sections/Fotter';
import Ourservices from '../Sections/Ourservices';
import Slider from '../Sections/Slider';
import Fleet from '../Sections/Fleet';

const Home = () => {
	return (
		<div className="bg-mainbg">
			<Slider></Slider>
			<Ourservices id="service"></Ourservices>
			<Airport></Airport>
			<Aboutus></Aboutus>
       <Fleet></Fleet>
			<ContactForm />
			<Fotter />
		</div>
	);
};

export default Home;
