import React from 'react';
import {bill, google, apple} from '../assets'

const Billing = () => {
  return (
    <section id="product" className="flex sm:flex-row flex-col-reverse 
    justify-center items-center sm:py-16 py-6">
      <div className="flex-1 md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div
          className="absolute z-[3] w-[50%] h-[50%] top-0 -left-1/2 rounded-full
          pink__gradient"
        />
        <div
          className="absolute z-[1] w-[50%] h-[50%] bottom-0 -left-1/2 rounded-full
          white__gradient"
        />
      </div>
      <div className="flex flex-col flex-1 justify-center items-start
      ">
        <h1 className="font-poppins font-semibold text-white
        text-[48px] leading-[76.8px] mb-6">
          Easily control your<br className="sm:block hidden"/> {" "}
          billing & invoicing.
        </h1>
        <p className="font-poppins font-normal text-dimWhite
        text-[18px] leading-[28.8px] max-w-[470px]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="flex flex-row mt-10 items-center
        justify-center">
          <img
            src={apple}
            alt="Apple Store"
            className="mr-5"
          />
          <img
            src={google}
            alt="CH Play"
          />
          
        </div>
      </div>  
    </section>
  );
}

export default Billing;
