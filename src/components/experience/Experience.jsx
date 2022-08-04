import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {DiSass} from 'react-icons/di'
import {DiNodejsSmall} from 'react-icons/di'
import {SiMongodb} from 'react-icons/si'
import {DiPhp} from 'react-icons/di'
import {DiMysql} from 'react-icons/di'
import {DiPython} from 'react-icons/di'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Las habilidades que tengo</h5>
      <h2>Mi experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desarrollador Fronted</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <AiFillHtml5 className='experience__details-icon'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Avanzado</small>
                </div>
              </article>
              <article className='experience__details'>
                <DiCss3 className='experience__details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Avanzado</small>
                </div>
              </article>
              <article className='experience__details'>
                <DiJavascript1 className='experience__details-icon'/>
                <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermedio</small>
                </div>
              </article>
              <article className='experience__details'>
                <DiReact className='experience__details-icon'/>
                <div>
                <h4>React</h4>
                <small className='text-light'>Avanzado</small>
                </div>
              </article>
              <article className='experience__details'>
                <FaBootstrap className='experience__details-icon'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Avanzado</small>
                </div>
              </article>
              <article className='experience__details'>
                <DiSass className='experience__details-icon'/>
                <div>
                <h4>Sass</h4>
                <small className='text-light'>Intermedio</small>
                </div>
              </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Desarrollador Backend</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <DiNodejsSmall className='experience__details-icon'/>
                <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basico</small>
                </div>
              </article>
              <article className='experience__details'>
                <SiMongodb className='experience__details-icon'/>
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basico</small>
                </div>
              </article>
              {/* <article className='experience__details'>
                <DiPhp className='experience__details-icon'/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article> */}
              {/* <article className='experience__details'>
                <DiMysql className='experience__details-icon'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
                </div>
              </article> */}
              {/* <article className='experience__details'>
                <DiPython className='experience__details-icon'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article> */}
          </div>
        </div>
        </div>
    
    </section>
  )
}

export default Experience