import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        {/* <a href={CV} className='btn'>Descargar CV</a> */}
        <a href="https://docs.google.com/document/d/1EHYAGZmPpMH2FnCBmsVGt4TByImC3MhViWkTK9uB7Fg/edit?usp=sharing" className='btn'>Curriculum</a>
        <a href="#contact" className='btn btn-primary'>Hablemos</a>
    </div>
  )
}

export default CTA