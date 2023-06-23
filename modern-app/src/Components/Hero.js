import React from 'react';
import {discount, robot} from '../assets'
import {GetStarted} from './index'
const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col py-6 sm:py-16">
      <div className="flex flex-col flex-1 justify-center items-start
      xl:px-0 sm:px-16 px-6 relative">
        <div className="absolute white__gradient w-[50%] h-[50%] -left-1/2 rounded-full z-[0]"/>
        <div className="absolute pink__gradient w-[50%] h-[50%] -left-1/2 rounded-full z-[1]"/>
        <div className="flex flex-row items-center bg-discount-gradient rounded-[10px]
        px-2 py-[6px] z-[5]">
          <img 
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px]"
          />
          <p className="font-poppins font-normal 
          text-dimWhite text-[18px] leading-[30.8px]
          mx-2">
            <span
              className="text-white"
            >20%</span> DISCOUNT FOR {" "}
            <span
              className="text-white"
            >1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className="flex flex-row w-full justify-center items-center">
          <h1 className="ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]
          font-poppins font-semibold text-white flex-1">
            The Next <br  className="sm:block hidden"/>  {" "}
            <span
              className="text-gradient"
            > 
            Generation</span> <br className="sm:block hidden"/> {" "}
          </h1>
          <div className="ss:flex hidden md:mx-12 mx-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]
        font-poppins font-semibold text-white w-full">Payment Method.</h1>
        <p className="text-dimWhite max-w-[483px] mt-5 font-poppins font-normal
        text-[18px] leading-[30.3px]">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.</p>
      </div>

      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] z-[5]"
        />
        <div className="absolute z-[0] pink__gradient w-[50%] h-[50%] top-0"/>
        <div className="absolute z-[1] white__gradient w-[80%] h-[80%] bottom-40 rounded-full"/>
        <div className="absolute z-[0] blue__gradient w-[50%] h-[50%] bottom-20 right-20"/>
      </div>
      <div className="flex ss:hidden justify-center items-center">
            <GetStarted />
      </div>
      
    </section>
  );
}

export default Hero;
