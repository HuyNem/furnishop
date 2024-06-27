import React from 'react';

//import components
import TestimonialSlider from './TestimonialSlider';

//import data
import { testimonial, } from '../data';

const Testimonial = () => {
  //destructure testimonial
  const { image, title} = testimonial;
  return <section className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
        <div className='lg:max-w-[50%]'>
          {/* title */}
          <h2 className='title mb-9'>{title}</h2>
          {/* slider */}
          <TestimonialSlider />
        </div>
        {/* image */}
        <div className='order-1'>
          {/* <img src={image.type} alt=''/> */}
          <video className='rounded-lg'  controls autoPlay>
            <source src="https://videos.pexels.com/video-files/8873206/8873206-hd_1920_1080_25fps.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  </section>;
};

export default Testimonial;
