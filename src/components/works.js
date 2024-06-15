import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// Import the images correctly
import img2 from '../assests/images/img2.jpg';
import img3 from '../assests/images/img3.jpg';
import img4 from '../assests/images/img4.jpg';
import img5 from '../assests/images/img5.jpg';
import img6 from '../assests/images/img6.jpg';
import img7 from '../assests/images/img7.jpg';
import img8 from '../assests/images/img8.jpg';
import img9 from '../assests/images/img9.jpg';


const worksData = [
    {
        id: '1',
        link: 'https://www.google.com',
        image: img2,
        title: 'Lonely Path',
        subtitle: 'web design'
    },
    {
        id: '2',
        link: 'https://www.google.com',
        image: img3,
        title: 'Game Development',
        subtitle: 'ranking'
    },
    {
        id: '3',
        link: 'https://www.google.com',
        image: img4,
        title: 'Web Design',
        subtitle: 'coding'
    },
    {
        id: '4',
        link: 'https://www.google.com',
        image: img5,
        title: 'Happy Days',
        subtitle: 'Creation'
    },
    {
        id: '5',
        link: 'https://www.google.com',
        image: img6,
        title: '    Branding',
        subtitle: 'Photography'
    },
    {
        id: '6',
        link: 'https://www.google.com',
        image: img7,
        title: 'Art & Design',
        subtitle: 'creativity'
    },
    {
        id: '7',
        link: 'https://www.google.com',
        image: img8,
        title: 'SEO',
        subtitle: 'blogging'
    },
    {
        id: '8',
        link: 'https://www.google.com',
        image: img9,
        title: 'Appreciation',
        subtitle: 'photography'
    }
];

export default function AppWorks() {
    return (
        <section id='works' className='block works-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Works</h2>
                    <div className='subtitle'>Our awesome works</div>
                </div>
                <Row className='portfolioList'>
                    {
                        worksData.map(works => (
                            <Col sm={4} key={works.id}>
                                <div className='portfolio-wrapper'>
                                    <a href={works.link}>
                                        <Image src={works.image} fluid />
                                        <div className='label text-center'>
                                            <h3>{works.title}</h3>
                                            <p>{works.subtitle}</p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
}
