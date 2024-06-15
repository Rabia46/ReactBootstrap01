import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';





export default function AppContact() {
    return (
        <section id="contact" className="block contact-block">
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact Us</h2>

                    <div className='subtitle'> get contacted with us  </div>

                </div>
                <Form className='contact-from'>
                    <Row>
                        <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your first name" required />
                        </Col>
                        <Col>
                            <Form.Control type='email' placeholder="Enter your emaoil adress" required />
                        </Col>

                        <Col>
                            <Form.Control type='to' placeholder="Enter your contact number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Leave a comment here" required />


                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type='submit'>Submit</Button>

                    </div>
                </Form>
                <br />
                <br />

            </Container>
            <div className="google-map">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425292.8127963403!2d72.7564471179763!3d33.
            61567900757843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2s
            Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718280849485!5m2!1sen!2s"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>


            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className='fas fa-envelope'></i>
                            hello@gmail.com
                        </li>
                        <li>
                            <i className='fas fa-phone'></i>
                            +92 3185768352
                        </li>

                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            Pakistan, Islamabad
                        </li>
                    </ul>

                </div>

            </Container>


        </section>

    )
}