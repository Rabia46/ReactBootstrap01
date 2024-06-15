
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assests/images/img1.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function AppAbout() {
    const html = 80;
    const responsive = 95;
    const photoshop = 60;
    return (
        <section id="about" className='block  about-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>    About Us </h2>
                    <div className='subtitle'>Learn more about us</div>

                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={img1} />
                    </Col>
                    <Col sm={6}>
                        <p> Welcome to Coporate, where innovation and excellence converge to provide top-tier solutions
                            in tech field. Established in 2010, we have consistently delivered outstanding products and
                            services tailored to meet the unique needs of our diverse clientele. Our mission is to drive progress and
                            set new standards in our industry through cutting-edge technology and a dedicated team
                            of professionals who are passionate about their work.

                        </p>
                        <div className="progress-block">
                            <h4>    HTML/CSS/JavaScript </h4>
                            <ProgressBar now={html} label={`${html}%`} />;
                        </div>

                        <div className="progress-block">
                            <h4>  RESPONSIVE </h4>
                            <ProgressBar now={responsive} label={`${responsive}%`} />;
                        </div>

                        <div className="progress-block">
                            <h4>    PHOTOSHOP </h4>
                            <ProgressBar now={photoshop} label={`${photoshop}%`} />;
                        </div>
                    </Col>


                </Row>
            </Container>
        </section>
    )
}