'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';

const LogoSlider = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: 'linear',
  });

  const logos = [
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    'https://b-cdn.parcelpanel.com/asset/v3/logo.svg',
    // Add more logos here
  ];
  return (
    <div>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="">
            <img src={logo} alt />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default LogoSlider;
