import React from 'react';
import {arrowUp} from '../assets'

const GetStarted = () => {
  return (
    <div className="justify-center 
    items-center bg-blue-gradient
    rounded-[50%] w-[140px] h-[140px]
    p-[2px] cursor-pointer button">
      <div className="bg-primary w-[100%] h-[100%]
      rounded-full flex flex-col justify-center 
      items-center">
        <div className="flex flex-row justify-center
        items-start">
          <p className="font-poppins text-white
          text-[18px] leading-[23px] font-medium">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins text-white
          text-[18px] leading-[32px] font-medium">
            <span className="text-gradient">
              Started
            </span>
          </p>
      </div>
    </div>
  );
}

export default GetStarted;
