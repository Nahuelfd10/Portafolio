import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nostrum nisi expedita, possimus nobis magni laborum? Molestiae nesciunt sit nisi.'
  },
  {
    avatar: AVTR2,
    name: "Shata Wale",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nostrum nisi expedita, possimus nobis magni laborum? Molestiae nesciunt sit nisi.'
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nostrum nisi expedita, possimus nobis magni laborum? Molestiae nesciunt sit nisi.'
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia nostrum nisi expedita, possimus nobis magni laborum? Molestiae nesciunt sit nisi.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Compañeros</h5>
      <h2>Comentarios</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key= {index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='cliente__name'>{name}</h5>
                <small className='client__review'> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials