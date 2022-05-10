import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {

const testimonialData = [
  {
      id: 1,
      avatar: AVTR1,
      name: 'Nombre Apellido',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate deserunt voluptates deleniti dolor vero animi nobis quidem quos reiciendis.'
  },
  {
      id: 2,
      avatar: AVTR2,
      name: 'Nombre Apellido',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate deserunt voluptates deleniti dolor vero animi nobis quidem quos reiciendis.'
  },
  {
      id: 3,
      avatar: AVTR3,
      name: 'Nombre Apellido',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate deserunt voluptates deleniti dolor vero animi nobis quidem quos reiciendis.'
  },
  {
      id: 4,
      avatar: AVTR4,
      name: 'Nombre Apellido',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cupiditate deserunt voluptates deleniti dolor vero animi nobis quidem quos reiciendis.'
  },
]

  return (
    <section id='testimonials'>
      <h3>Review from Clients</h3>
      <h2>Testimonials</h2>

      <Swiper 
      className="container testimonials__container"
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      pagination={{ 
        clickable: true,
      }}
      >
        {testimonialData.map(({id, avatar, name, review}) => 
                <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="description here" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
                </SwiperSlide>
        )}
      </Swiper>

    </section>
  )
}

export default Testimonials