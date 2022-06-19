import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a
        href='https://github.com/AmanBhanse'
        target='_blank'
        rel='noopener noreferrer'>
        <div>
          <FaGithub />
        </div>
      </a>
      <a
        href='https://www.linkedin.com/in/aman-bhanse/'
        target='_blank'
        rel='noopener noreferrer'>
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href='https://twitter.com/bhanse_aman'
        target='_blank'
        rel='noopener noreferrer'>
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
