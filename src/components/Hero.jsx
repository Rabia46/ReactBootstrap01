import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

let heroData = [
  {
    id: 1,
    image: require('../assests/images/img-hero1.jpg'),
    title: 'The Perfect Design for your Website',
    description: 'Transforming Ideas into Reality with Cutting-Edge Technology',
    link: 'https://www.facebook.com'
  },
  {
    id: 2,
    image: require('../assests/images/img-hero2.jpg'),
    title: 'Connecting Businesses Worldwide',
    description: 'Expand your horizons with our global network. Thrive your business in international markets',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assests/images/img-hero3.jpg'),
    title: ' Agile Solutions',
    description: 'Adaptable and Scalable for Your Growth',
    link: 'https://www.facebook.com'
  }
];

export default function Apphero() {
  return (
    <section id='home' className='hero-block'>
      <Carousel>
        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>
            <img
              className="d-block w-100"
              src={hero.image}
              alt={"slide " + hero.id}
            />
            <Carousel.Caption>
              <h3>{hero.title}</h3>
              <p>{hero.description}</p>
              <a className='btn btn-primary' href={hero.link}>Learn more
                <i className="fas fa-chevron-right"></i></a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
