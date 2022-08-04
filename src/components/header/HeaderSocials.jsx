import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFrontendmentor} from 'react-icons/si'
import {FaFreeCodeCamp} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nahuelfd10/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Nahuelfd10" target="_blank"><FaGithub/></a>
      <a href="https://www.frontendmentor.io" target="_blank"><SiFrontendmentor/></a>
      <a href="https://www.freecodecamp.org/fccf6d0455c-1f54-4865-9197-c7a4e36c1a44" target="_blank"><FaFreeCodeCamp/></a>
    </div>
  )
}

export default HeaderSocials