import React from 'react';
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.webp";
import icon3 from "../assets/icon3.jpg";
import icon4 from "../assets/icon4.jpg";
import icon5 from "../assets/icon5.png";

function Footer() {
  return (
    <div className="footer bg-blue-950 text-white px-4 md:px-28 mt-16">
      <div className="body grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 mb-16 pt-4">
        <ul className='text-xs'>
          <li className="text-xl"><strong>Ajio</strong></li>
          <li className='mt-3'>Who We Are</li>
          <li className='mt-3'>Join Our Team</li>
          <li className='mt-3'>Terms & Condition</li>
          <li className='mt-3'>We Respect your Privacy</li>
          <li className='mt-3'>Fees & Payment</li>
          <li className='mt-3'>Return & Refund Policy</li>
          <li className='mt-3'>Promotion & Terms & Condition</li>
        </ul>
        <ul className='text-xs'>
          <li className="text-xl"><strong>Help</strong></li>
          <li className='mt-3'>Track Your Order</li>
          <li className='mt-3'>FAQs</li>
          <li className='mt-3'>Returns</li>
          <li className='mt-3'>Cancellations</li>
          <li className='mt-3'>Payment</li>
          <li className='mt-3'>Customer Service</li>
          <li className='mt-3'>How Do I Redeem My Coupon?</li>
        </ul>
        <ul className='text-xs'>
          <li className="text-xl"><strong>Shop by</strong></li>
          <li className='mt-3'>Men</li>
          <li className='mt-3'>Women</li>
          <li className='mt-3'>Kids</li>
          <li className='mt-3'>New Arrivals</li>
          <li className='mt-3'>Home</li>
          <li className='mt-3'>Collections</li>
        </ul>
        <ul className='text-xs'>
          <li className="text-xl"><strong>Follow us</strong></li>
          <li className='mt-3'>Facebook</li>
          <li className='mt-3'>Instagram</li>
          <li className='mt-3'>Twitter</li>
          <li className='mt-3'>Pinterest</li>
        </ul>
      </div>
      
      <hr />
      
      <div className="last flex flex-col md:flex-row justify-between my-4 pb-8">
        <div className="pay mt-6">
          <h2>Payment Method</h2>
          <div className="img flex flex-wrap justify-start mt-6">
            <img src={icon1} className='h-10 w-28 mr-4 mb-4' alt="Payment icon 1" />
            <img src={icon2} className='h-10 w-28 mr-4 mb-4' alt="Payment icon 2" />
            <img src={icon3} className='h-10 w-28 mr-4 mb-4' alt="Payment icon 3" />
            <img src={icon4} className='h-10 w-28 mr-4 mb-4' alt="Payment icon 4" />
          </div>
        </div>
        
        <div className="pay my-6">
          <h2>Secure System</h2>
          <img src={icon5} className='h-10 w-28 mt-6' alt="Secure system" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
