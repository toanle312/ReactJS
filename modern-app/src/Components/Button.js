import React from 'react';

const Button = ({styles}) => {
  return (
    <button type="Button" className={`bg-blue-gradient font-poppins font-medium
    text-[18px] leading-[27px] px-8 py-4 rounded-[10px] outline-none
    ${styles} button`}>
      Get Started
    </button>
  );
}

export default Button;
