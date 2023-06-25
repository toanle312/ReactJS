import React from 'react';
import {stats} from '../constants'

const Stats = () => {
  return (
    <section className="flex flex-row justify-center items-center
    flex-wrap flex-1 relative">
      {stats.map((stat, index) => (
        <div key={stat.id} className="flex flex-1 justify-start items-center p-4 flex-row
        sm:mb-20 mb-6 relative sm:ml-6 ml-0">
          <h4 className="font-poppins font-semibold text-white 
          xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]
          mr-6"
          >{stat.value}</h4>
          <p className="text-gradient font-poppins font-medium
          xs:text-[20px] text-[15px] xs:leading-[27px] 
          leading-[22px]"
          >{stat.title.toUpperCase()}</p>
          
          <div className="absolute hidden sm:block
          h-[40%] border-r-4 border-dimWhite left-[0%]"/>
          
        </div>
      ))}
    </section>
  );
}

export default Stats;
