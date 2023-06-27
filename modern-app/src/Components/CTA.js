import React from 'react';
import Button from '../Components/Button'
const CTA = () => {
  return (
    <section className="flex justify-center items-center sm:my-16 my-6">
      <div className="w-full flex sm:flex-row flex-col
      justify-center items-center sm:p-16 p-6 bg-black-gradient-2
      rounded-[20px] box-shadow">
        <div className="flex-1 flex flex-col">
          <h1 className="font-poppins font-semibold text-[48px]
          leading-[67.2px] text-white">
            Let's try our service now!
          </h1>
          <p className="font-poppins font-normal text-[18px]
          leading-[28.8px] text-dimWhite max-w-[445px] mt-5">
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>

        </div>
        <div className="flex justify-center items-center md:mt-0 mt-8">
          <Button/>
        </div>
      </div>
    </section>
  );
}

export default CTA;
