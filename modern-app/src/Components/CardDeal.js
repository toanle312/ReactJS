import React from 'react';
import {card} from '../assets'
import Button from './Button';

const CardDeal = () => {
  return (
    <section id="product" className="flex sm:flex-row-reverse flex-col-reverse
    justify-center items-center sm:py-16 py-6">
      <div className="flex-1 md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img
          src={card}
          alt="card"
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
          Find a better card deal<br className="sm:block hidden"/> {" "}
          in few easy steps.
        </h1>
        <p className="font-poppins font-normal text-dimWhite
        text-[18px] leading-[28.8px] max-w-[470px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10"/>
      </div>  
    </section>
  );
}

export default CardDeal;
