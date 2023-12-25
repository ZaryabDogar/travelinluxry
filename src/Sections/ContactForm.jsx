import { FaArrowUpLong } from "react-icons/fa6";
import emailjs from 'emailjs-com';
import { useRef,useState, useEffect } from "react";
import {  Link as ScrollLink, scroller } from 'react-scroll';
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [showButton, setShowButton] = useState(false);
  const recaptchaRef = useRef();
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();

    // Check if reCAPTCHA value exists
    if (!recaptchaValue) {
      // Handle the case when reCAPTCHA is not completed
      alert("Please complete the reCAPTCHA");
      return;
    }
    emailjs.sendForm('service_y9v8oni', 'template_kto4lxz', form.current, 'ncon6c2iZsZxgekFO')
      .then((result) => {
        console.log(result.text);
        resetForm();
      }, (error) => {
        console.log(error.text);
      });
  };
 
  const resetForm = () => {
    // Reset each form field to an empty value
    form.current.reset();
  };
  const scrollToSection = (section) => {
		scroller.scrollTo(section, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart',
			offset: -50, // Adjust the offset based on your layout
		});
	};
   useEffect(() => {
    // Add an event listener to track scroll position
    const handleScroll = () => {
      const scrolled = window.scrollY > 450;
      // console.log(window.scrollY)
      // console.log(scrolled)
      setShowButton(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run the effect only once on component mount

  // Rest of your component code
  return (
    <section className="lg:px-12 sm:px-6 px-3 sm:mb-16 flex  " id="contact">
    <div className="flex flex-col lg:flex-row justify-center items-center w-full bg-[#CC405D0F] rounded-[32px] ">
      {/* text Section */}
      <div className="lg:w-1/2 flex    sm:px-10 px-5  sm:py-16 py-10">
      <div className="font-Lora text-white lg:text-start text-center">
      <p className=" lg:block hidden   mb-14 font-[500] text-[42px] leading-[28px]   ">
						<span className="border-b-[3px] border-[#CC405D] pb-2.5 ">Lets Get</span> in Touch!
					</p>
      <p className="lg:hidden block    mb-14 font-[500] sm:text-[42px] text-[25px] leading-[28px]   ">Let
						<span className="border-b-[3px] border-[#CC405D] pb-2.5 ">s Get in To</span>uch!
					</p>
          <p className="sm:text-[16px]  text-[14.5px] font-[400] leading-[28px]   mb-8">
          PLEASE NOTE THAT THIS FORM IS MONITORED MON-FRI FROM 9AM-5PM. IF YOU REQUIRE 24/7 ASSISTANCE PLEASE EMAIL RESERVATION@CULLITONS.COM
						</p> 
            <p className="sm:text-[20px]  text-[16px] font-[700] leading-[25.6px]   mb-4">ADDRESS</p>
            <p className="sm:text-[16px]  text-[14.5px] font-[400] leading-[12.6px]   mb-4">511 McNicoll Ave, Suite 201</p>
            <p className="sm:text-[16px]  text-[14.5px] font-[400] leading-[12.6px]   mb-8">North York, ON M2H 2C9</p>


            <p className="sm:text-[20px]  text-[16px] font-[700] leading-[25.6px]   mb-4">RESERVATION AND DISPATCH</p>
            <p className="sm:text-[16px]  text-[14.5px] font-[400] leading-[12.6px]   mb-4">416-495-1900</p>
            <p className="sm:text-[16px]  text-[14.5px] font-[400] leading-[12.6px]   mb-4">1800-263-8996</p>
            <p className="sm:text-[16px]  text-[14.5px] font-[400] leading-[12.6px]   mb-4">reservation@cullitons.com</p>
            <p className="sm:text-[16px]  text-[14.5px] font-[400] leading-[12.6px]   mb-8">24 hours a day</p>


            <p className="sm:text-[20px]  text-[16px] font-[700] leading-[25.6px]   mb-4">ACCOUNTING AND ADMINISTRATION</p>
            <p className="sm:text-[16px]  text-[14.5px] font-[400] leading-[12.6px]   mb-4">416-495-1900</p>
            <p className="sm:text-[16px]  text-[14.5px] font-[400] leading-[12.6px]   mb-4">administration@cullitons.com</p>
            <p className="sm:text-[16px]  text-[14.5px] font-[400] leading-[12.6px]   mb-4">9AM-5PM Monday to Friday</p>



      </div>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 pt-10 p-6 flex w-full justify-center">
       

        <form ref={form} className="font-inter w-full flex flex-col justify-center lg:items-start items-center"  onSubmit={sendEmail}>
          {/* Name Fields */}

            <div className="xl:w-[485.38px] w-full max-w-[480px] xl:mb-6 mb-4   ">
              <label htmlFor="name" className="block md:text-[17.4px] text-[16px] leading-[20.1px] xl:mb-6 mb-4 text-white   ">
              Full Name*:
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                required
                className=" lg:p-3.5 p-3 pr-0  border-b-[1px] border-white w-full focus:outline-none rounded-[7.61px]  focus:border-white  md:text-[17.4px] text-[16px] leading-[20.1px]    "
              />
            </div>
            
     

          {/* Email and  */}
        <div className="xl:w-[485.38px]    w-full max-w-[480px] xl:mb-6 mb-4  
             ">
              <label htmlFor="email" className="block md:text-[17.4px] text-[16px] leading-[20.1px] xl:mb-6 mb-4 text-white   ">
              Email*:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className=" lg:p-3.5 p-3 pr-0  border-b-[1px] border-white w-full focus:outline-none rounded-[7.61px]  focus:border-white  md:text-[17.4px] text-[16px] leading-[20.1px]    "
              />
            </div>
         
          {/* Phone Fields */}
        
          <div className=" xl:mb-6  xl:w-[485.38px]  w-full max-w-[480px]   mb-4
             ">
              <label htmlFor="phone" className="block md:text-[17.4px] text-[16px] leading-[20.1px] xl:mb-6 mb-4 text-white   ">
              Phone No*:
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                required
                className=" lg:p-3.5 p-3 pr-0  border-b-[1px] border-white w-full focus:outline-none rounded-[7.61px]  focus:border-white  md:text-[17.4px] text-[16px] leading-[20.1px]    "
              />
            </div>
  

          {/* Message Field */}
          <div className=" mb-8 xl:w-[476px]  w-full max-w-[480px]  ">
            <label htmlFor="message" className="block md:text-[17.4px] text-[16px] leading-[20.1px] xl:mb-6 mb-4 text-white    ">
            Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              placeholder="Write your message.."
              className="lg:p-3.5 p-3 w-full   border-b-[1px] border-white  focus:outline-none focus:border-white rounded-[7.61px] md:text-[17.4px] text-[16px] leading-[20.1px]    "
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex lg:justify-between sm:items-start sm:justify-evenly  w-full sm:flex-row flex-col items-center space-y-6 sm:space-y-0">
            <div className=" flex sm:space-x-5 space-x-1"> 
            
         
            <button
              type="submit"
              className="font-[500] text-major  sm:px-6 px-2 py-3 rounded-[10.87px] bg-[#CC405D] text-white text-sm"
            >
              Submit
            </button>
            <button
              type=""
              className="font-[500] text-major  xl:px-5 px-1 py-3 rounded-[10.87px]  text-[#CC405D] hover:bg-[#CC405D] hover:text-white transition-all duration-300 ease-in border text-sm hover:border-[#CC405D]"
            >
              Account Application Form
            </button>
            
            </div>
           
            <ScrollLink
										to="hero"
										smooth={true}
										duration={500}
										onClick={() => scrollToSection('hero')}
									>
										{' '}
										<button
              
              className={`font-[500] text-major  sm:px-6 sm:py-4 sm:rounded-[10.87px] px-4 py-4 rounded-full text-[#000000] bg-[#CC405D] ${showButton?"fixed bottom-5 sm:right-6 right-2":"hidden"} `}
            >
              <FaArrowUpLong className="sm:text-2xl" />
            </button>
									</ScrollLink>
            
          </div>
          <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          // size="invisible"
          // onChange={handleRecaptcha}
          // onErrored={() => console.log("reCAPTCHA error")}
          className="mt-5"
        />
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
