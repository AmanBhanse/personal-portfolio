import React from 'react';
import './Testimonials.scss';
import { motion } from 'framer-motion';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const query = '*[_type == "testimonial"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
      console.log(brands);
    });
  }, []);

  const currTestimonial = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(currTestimonial.imageurl)} alt='testimonial' />
            <div className='app_testimonial-content'>
              <p className='p-text'>{currTestimonial.feedback}</p>
              <div>
                <h4 className='bold-text'>{currTestimonial.name}</h4>
                <h5 className='bold-text'>{currTestimonial.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() => {
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                );
              }}>
              <HiChevronLeft />
            </div>
            <div
              className='app__flex'
              onClick={() => {
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                );
              }}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className='app__testimonial-brands app__flex'>
        {brands.map((brand) => (
          <motion.div
            key={brand._id}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}>
            <img src={urlFor(brand.imgUrl)} alt='brand image' />
          </motion.div>
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line new-cap
export default AppWrap(
  // eslint-disable-next-line new-cap
  MotionWrap(Testimonials, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
);
