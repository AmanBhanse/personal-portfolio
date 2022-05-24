import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  return (
    <>
      <h2 className='head-text'>
        My creative
        <span> Portfolio </span>
        <br />
        means
        <span> Section </span>
      </h2>
    </>
  );
};

export default Work;
