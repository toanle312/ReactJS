import React from 'react';
import {feedback} from '../constants'
import { quotes } from '../assets';

const FeedBackCard = ({id, name, content, title, img}) => {
  return (
    <div key={id} className="flex flex-col feedback-card px-10
    py-12 rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 justify-between max-w-[370px]">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[28px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px]
      text-white max-w-[290px] mt-8">
        {content}
      </p>
      <div className="flex flex-row mt-8">
        <img
          src={img}
          alt="avatar"
          className="w-[48px] h-[48px] mr-4"
        />
        <div className="flex flex-col justify-center items-start">
          <p className="font-poppins font-normal text-[20px] leading-[32px]
          text-white"
          >{name}</p>
          <p className="font-poppins font-normal text-[16px] leading-[24px]
          text-dimWhite"
          >{title}</p>
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section id="clients" className="flex flex-col justify-center items-center
    sm:py-16 py-6 relative">
      <div className="absolute w-[60%] h-[120%] -right-[55%] blue__gradient rounded-full z-[0]"></div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className="font-poppins font-semibold text-white
        text-[48px] leading-[76.8px] mb-6 w-full">
          What people are<br className="sm:block hidden"/> {" "}
          saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className="font-poppins font-normal text-dimWhite
          text-[18px] leading-[32.4px] max-w-[450px]">
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((feedback) => (
          <FeedBackCard key={feedback.id} {...feedback}/>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
