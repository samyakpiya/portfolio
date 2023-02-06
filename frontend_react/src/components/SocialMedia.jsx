import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaStackOverflow } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/piyasamyak" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/samyakpiya/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://stackoverflow.com/users/21155572/samyak-piya" target="_blank" rel="noreferrer"><FaStackOverflow /></a>
    </div>
  </div>
);

export default SocialMedia;
