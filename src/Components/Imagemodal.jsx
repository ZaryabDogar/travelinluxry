import React from 'react';
import { RxCross2 } from "react-icons/rx";
const Imagemodal = ({ imageSource, closeModal }) => {
  return (
    <>
      <div
        className="fixed sm:top-5 top-10 left-0 w-full h-full flex items-center justify-center bg-black bg-[rgba(0,0,0,0.7)] z-10 px-5 overflow-hidden mb-12"
        onClick={closeModal}
      >
        {/* You can add any content or additional styling for the overlay here */}
      </div>
      <div className=" w-fit  h-auto text-center select-none overflow-y-scroll no-scrollbar scrollbar-track z-30 fixed top-0  left-[50%] -translate-x-[50%] translate-y-[50%]"> 
        <button
          className=" bg-[#CC405D] text-white px-2 py-2 rounded-full float-right mr-5"
          onClick={closeModal}
        >
          <RxCross2 />
        </button>
        <div className="w-full flex justify-center ">
          {/* Use the actual imageSource here */}
          <img src={imageSource} alt="Modal Image" className='2xl:w-[450px] w-[400px]' />
        </div>
     
      </div>
    </>
  );
};

export default Imagemodal;
