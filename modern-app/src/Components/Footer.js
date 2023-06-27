import React from 'react';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center
    sm:py-16 py-6">
      <div className="flex md:flex-row flex-col
      justify-center items-start w-full mb-8">
        <div className="flex flex-col justify-center items-start mr-10 flex-1">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className="font-poppins font-normal text-[18px]
          leading-[32px] text-dimWhite max-w-[312px] m-6">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map(footerLink => (
            <div key={footerLink.title} className="flex flex-col min-w-[150px] ss:my-0 my-4">
              <h4 className="font-poppins font-medium text-[18px]
              leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <div className="flex flex-col justify-between items-start mt-6">
                {footerLink.links.map((link, index) => (
                  <a 
                    key={link.name}
                    className={`font-poppins font-normal text-[16px]
                    leading-[24px] text-dimWhite
                    ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                    href={link.link}>{link.name}</a>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
      <div className="w-full flex sm:flex-row flex-col
      justify-between items-center mt-8 border-t-[1px] border-t-[#3F3E45]
      py-8">
        <p className="font-poppins font-normal text-[18px]
        leading-[27px] text-dimWhite">
          Copyright Ⓒ &nbsp; 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-8">
          {socialMedia.map(item => (
            <a
              key={item.id}
              href={item.link}
              className="mr-8"
            >
              <img
                src={item.icon}
                alt="media"
              />
            </a>
          ))}
        </div>
      </div>
        
    </section>
  );
}

export default Footer;
