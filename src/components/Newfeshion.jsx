import React from 'react';
import newtrends2 from '../assets/newtrends2.jpg';
import brands from '../assets/brands.jpg';
import women3 from '../assets/women3.jpg';
import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiHandHeartDuotone } from "react-icons/pi";
import { TbBrightness2 } from "react-icons/tb";

function Newfashion() {
  return (
    <div className="newTrand mt-[550px] px-4 sm:px-8 md:px-16">
      <h2 className="text-3xl md:text-6xl text-gray-600 text-center my-6">Hot New Trends</h2>
      <div className="newTrend w-full my-4">
        <img src={newtrends2} alt="" className='w-full h-[25rem] object-cover rounded-lg' />
      </div>

      <h2 className="text-3xl md:text-6xl text-gray-600 text-center my-6">Our Brands</h2>
      <div className="brand">
        <img src={brands} alt="" className="w-full h-auto object-cover rounded-lg" />
      </div>

      <div className="about flex flex-col md:flex-row justify-center gap-4 md:gap-20 my-8">
        <div className="aboutImg h-60 md:h-[32rem] w-full md:w-[32rem]">
          <img src={women3} className="h-full w-full object-cover rounded-lg shadow-lg" alt="" />
        </div>
        <div className="aboutdetail w-full md:w-[32rem]">
          <h2 className='mb-5 text-[20px] sm:text-[24px] font-semibold'>About <strong>AZORTE</strong></h2>
          <p className='mb-2 text-sm sm:text-base'><strong>India's only faction NeoStore is here!</strong></p>
          <p className='mb-2 text-sm sm:text-base'>
            Lorem ipsum xplicabo possimus iusto enim dolor sit amet, consectetur adipisicing elit. Id delectus rerum non. 
          </p>
          <p className='mb-2 text-sm sm:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem autem ad. Velit at, eaque tempora ratione.
          </p>
          <p className='mb-2 text-sm sm:text-base'>
            Numquam assumenda xplicabo possimus iusto enim Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className='border-2 border-black pr-10 pl-3 my-5 font-normal rounded-xl'> Explore -- </button>
          <div className="icon flex m-4 justify-center gap-4">
            <BsFacebook className='mr-4 text-3xl text-white bg-black rounded-2xl p-[0.40rem]' />
            <IoLogoInstagram className='mr-4 text-3xl text-white bg-black rounded-2xl p-[0.40rem]' />
            <BsTwitter className='mr-4 text-3xl text-white bg-black rounded-2xl p-[0.40rem]' />
            <FaYoutube className='mr-4 text-3xl text-white bg-black rounded-2xl p-[0.40rem]' />
            <MdLocationOn className='mr-4 text-3xl text-white bg-black rounded-2xl p-[0.40rem]' />
          </div>
        </div>
      </div>

      <div className="bigicon flex flex-wrap justify-center text-center gap-8 mt-16">
        <div className="icon-item">
          <IoBagHandleOutline className='ml-8 text-6xl my-4 text-gray-700' />
          <span className='font-medium text-sm sm:text-base'>EASY EXCHANGE</span>
        </div>
        <div className="icon-item">
          <PiHandHeartDuotone className='ml-8 text-6xl my-4 text-gray-700' />
          <span className='font-medium text-sm sm:text-base'>100% HANDPICKED</span>
        </div>
        <div className="icon-item">
          <TbBrightness2 className='ml-8 text-6xl my-4 text-gray-700' />
          <span className='font-medium text-sm sm:text-base'>ASSURED QUALITY</span>
        </div>
      </div>
    </div>
  );
}

export default Newfashion;
