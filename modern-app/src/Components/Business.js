import React from 'react';
import { features } from '../constants';
import {Button} from '../Components'

const FeatureCard = ({icon, title, content, index}) => {
  return (
    <div className={`flex flex-row 
    rounded-[20px] p-6 feature-card
    ${index !== features.length - 1 ? 'mb-6' : 'mb-0'}`}>
      <div className=" flex w-[64px] h-[64px]
      bg-dimBlue rounded-full justify-center items-center
      ">
        <img
          src={icon}
          alt="icon"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col ml-6
      ">
        <h4 className="font-poppins font-semibold text-[18px]
        leading-[23.4px] text-white mb-1">{title}</h4>
        <p className="font-poppins font-normal text-[16px]
        leading-[24px] text-dimWhite">{content}</p>
      </div>
    </div>
  )
}

const Business = () => {
  return (
    <section id="features" className="flex sm:flex-row flex-col
    justify-center items-center
    md:mr-10 mr-0 md:mt-0 mt-10 relative sm:py-16 py-6">
      <div className="flex flex-col flex-1 justify-center items-start">
        <h1 className="font-poppins font-semibold text-white
        text-[48px] leading-[76.8px] mb-6">
          You do the business,<br className="sm:block hidden"/> {" "}
          we'll handle the money.
        </h1>
        <p className="font-poppins font-normal text-dimWhite
        text-[18px] leading-[30.6px] max-w-[570px]">
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10 sm:mb-0 mb-10"/>
      </div>

      <div className="flex flex-col justify-center items-center flex-1">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            index={index}
            {...feature}
          />
        ))}
      </div>
      
    </section>
  );
}

export default Business;
