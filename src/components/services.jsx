import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const servicesData = [
    {
        id: '1',
        icon: 'fas fa-life-ring',
        title: 'Responsive Design',
        description: 'Our websites adapt seamlessly to any device, ensuring a consistent user experience. Enjoy optimal functionality and aesthetics, whether on a desktop or a smartphone.'
    },
    {
        id: '2',
        icon: 'fas fa-paint-brush',  // Example icon for Creative Design
        title: 'Creative Design',
        description: 'We create visually stunning and unique designs tailored to reflect your brand’s personality. Let us transform your vision into an inspiring and remarkable visual experience.'
    },
    {
        id: '3',
        icon: 'fas fa-plug',  // Example icon for SEO Optimised
        title: 'SEO Optimised',
        description: 'Our SEO-optimized websites rank higher in search results, driving more organic traffic. Enhance your site\'s visibility and user engagement with our expert optimization techniques.'
    },
    {
        id: '4',
        icon: 'fas fa-desktop',
        title: 'Retina Ready',
        description: 'Experience crisp and vibrant visuals with our retina-ready designs for high-resolution displays. Impress your visitors with exceptional clarity and sharpness on any device.'
    },
    {
        id: '5',
        icon: 'fas fa-globe',  // Example icon for Browser Compatibility
        title: 'Browser Compatibility',
        description: 'Our websites are tested for compatibility across all major browsers, ensuring a seamless experience. Enjoy consistent functionality and appearance, no matter how your site is accessed.'
    },
    {
        id: '6',
        icon: 'fas fa-headset',  // Example icon for Customer Support
        title: 'Customer Support',
        description: 'We provide exceptional customer support to assist with any issues or questions. Our dedicated team is here to ensure your satisfaction every step of the way.'
    }
];

export default function AppServices() {
    return (
        <section id='services' className='block services-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>Our Services</h2>
                    <div className="subtitle">Services we provide</div>
                </div>

                <Row>
                    {servicesData.map(service => (
                        <Col sm={4} className='holder' key={service.id}>
                            <div className="icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
