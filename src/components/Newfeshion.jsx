import React from 'react'
import newtrends2 from "../assets/newtrends2.jpg"
import brands from "../assets/brands.jpg"
import women3 from "../assets/women3.jpg"
import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiHandHeartDuotone } from "react-icons/pi";
import { TbBrightness2 } from "react-icons/tb";

function Newfeshion() {
  return (
    <> 
    <div className="newTrand">
    <h2 className="text-6xl text-gray-600  text-center my-6">Hot New Trends </h2>
    <div className="newTrend w-full my-4">
        <img src={newtrends2} alt="" className='w-full h-[25rem] ' />
    </div>

    <h2 className="text-6xl text-gray-600  text-center my-6">Our Brands </h2>
   <div className="brand">
   <img src={brands} alt="" />
   </div>

   <div className="about flex justify-center gap-20">
    <div className="aboutImg h-60">
        <img src={women3} className='h-[32rem] w-[32rem]' alt="" />
    </div>
    <div className="aboutdetail w-[32rem]">
        <h2 className='mb-5 text-[24px]'>About <strong>AZORTE</strong></h2>
        <p className='mb-2 text-[18px]'><strong>India's only faction NeoStore is here !  </strong></p>
        <p className='mb-2 text-[18px]'>Lorem ipsumm Lorem ipsum xplicabo possimus iusto enim  dolor sit amet, consectetur adipisicing elit. Id delectus rerum non.rerum amet consectetur assumenda mollitia!</p>

        <p className='mb-2 text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem autem ad. Velit at, eaque tempora ratione explicabo possimus iusto enim beatae  mollitia!</p>
        <p className='mb-2 text-[18px]'> numquam assumenda xplicabo possimus iusto enim  Lorem ipsum dolor sit amet consectetur adipisicing elit.assumenda xplicabo possimus iusto enim  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, eveniet! mollitia!</p>
        <button className='border-2 border-black pr-10 pl-3 my-5 font-normal rounded-xl'> Explore -- </button>
        <div className="icon flex m-4">

        <BsFacebook  className='mr-4 text-3xl text-white bg-black rounded-2xl p-[0.40rem] '/>
        <IoLogoInstagram className='mr-4 text-3xl text-white bg-black rounded-2xl p-[0.40rem] '/>
        <BsTwitter className='mr-4 text-3xl text-white bg-black rounded-2xl p-[0.40rem] '/>
        <FaYoutube className='mr-4 text-3xl text-white bg-black rounded-2xl p-[0.40rem] '/>
        <MdLocationOn className='mr-4 text-3xl text-white bg-black rounded-2xl p-[0.40rem] '/>
        </div>
    </div>

   </div>

   <div className="bigicon flex  justify-center text-center gap-60 mt-16">
   <div><IoBagHandleOutline className='ml-8 text-6xl my-4 text-gray-700'/> <span className=' font-medium'>EASY EXCHANGE</span></div> 
   <div><PiHandHeartDuotone className='ml-8 text-6xl my-4 text-gray-700'/> <span className=' font-medium'>100% HANDIPICKED</span></div> 
   <div><TbBrightness2 className='ml-8 text-6xl my-4 text-gray-700'/> <span  className=' font-medium'>ASSURED QUALITY</span></div> 
   </div>
    </div>
    </>
  )
}

export default Newfeshion