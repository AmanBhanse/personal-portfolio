import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
const scaleVariants = {
  whileInView: {
    scale: [0, 1],

    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'>
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div className='profile-picture-container' >
              <img className='profile-picture'
                src={images.profilePicture}
              />
            </div>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello I am</p>
              <h1 className='head-text'>Aman</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>🎓 Computer Science Graduate</p>
            <p className='p-text'>💻 Full Stack developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'>
        <img src={images.profile} alt='profile_bg'></img>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'></motion.img>
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'>
        {[images.redux, images.react, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle'></img>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// eslint-disable-next-line new-cap
export default AppWrap(Header, 'home');
