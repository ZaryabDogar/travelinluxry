

const ContactForm = () => {
  return (
    <section className="lg:px-12 sm:px-6 px-4">
    <div className="flex flex-col lg:flex-row justify-center bg-[#CC405D0F] rounded-[32px] ">
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
       

        <form className="font-inter w-full flex flex-col justify-center lg:items-start items-center">
          {/* Name Fields */}

            <div className="xl:w-[485.38px] w-full max-w-[480px] xl:mb-6 mb-4   ">
              <label htmlFor="firstName" className="block md:text-[17.4px] text-[16px] leading-[20.1px] xl:mb-6 mb-4 text-white   ">
              Full Name*:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className=" lg:p-3.5 p-3 pr-0  border-b-[1px] border-white w-full focus:outline-none rounded-[7.61px]  focus:border-white  md:text-[17.4px] text-[16px] leading-[20.1px]    "
              />
            </div>
            
     

          {/* Email and  */}
        <div className="xl:w-[485.38px]    w-full max-w-[480px] xl:mb-6 mb-4  
             ">
              <label htmlFor="firstName" className="block md:text-[17.4px] text-[16px] leading-[20.1px] xl:mb-6 mb-4 text-white   ">
              Email*:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className=" lg:p-3.5 p-3 pr-0  border-b-[1px] border-white w-full focus:outline-none rounded-[7.61px]  focus:border-white  md:text-[17.4px] text-[16px] leading-[20.1px]    "
              />
            </div>
         
          {/* Phone Fields */}
        
          <div className=" xl:mb-6  xl:w-[485.38px]  w-full max-w-[480px]   mb-4
             ">
              <label htmlFor="firstName" className="block md:text-[17.4px] text-[16px] leading-[20.1px] xl:mb-6 mb-4 text-white   ">
              Phone No*:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
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
              rows="6"
              placeholder="Write your message.."
              className="lg:p-3.5 p-3 w-full   border-b-[1px] border-white  focus:outline-none focus:border-white rounded-[7.61px] md:text-[17.4px] text-[16px] leading-[20.1px]    "
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex lg:justify-start items-start justify-center">
            <button
              type="submit"
              className="font-[500] text-major  px-6 py-4 rounded-[10.87px] bg-[#CC405D] text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
