import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppFooter.css'; // Ensure you have a corresponding CSS file for custom styles

export default function AppFooter() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleSubscribe = (event) => {
        event.preventDefault();
        // Handle subscription logic here
        alert(`Subscribed with email: ${email}`);
        setEmail('');
    };

    return (
        <footer className='app-footer'>
            <Container fluid className="footer-container">
                <Row>
                    <Col md={3} className="footer-section fade-in">
                        <h5>Contact Us</h5>
                        <p>123 Corporate Blvd, Suite 100<br />
                            City, State, ZIP Code<br />
                            Phone: (123) 456-7890<br />
                            Email: info@corporate.com</p>
                    </Col>
                    <Col md={3} className="footer-section fade-in">
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/works">Works</a></li>
                            <li><a href="/teams">Teams</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="footer-section fade-in">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" aria-label="Facebook"><i className='fab fa-facebook-f'></i></a>
                            <a href="https://www.twitter.com" aria-label="Twitter"><i className='fab fa-twitter'></i></a>
                            <a href="https://www.linkedin.com" aria-label="LinkedIn"><i className='fab fa-linkedin-in'></i></a>
                            <a href="https://www.instagram.com" aria-label="Instagram"><i className='fab fa-instagram'></i></a>
                        </div>
                    </Col>
                    <Col md={3} className="footer-section fade-in">
                        <h5>Newsletter</h5>
                        <Form onSubmit={handleSubscribe}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Subscribe
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="footer-bottom fade-in">
                    <Col className="text-center">
                        <div className='copyright'>
                            &copy; 2024 Corporate. All Rights Reserved.
                        </div>
                    </Col>
                </Row>
            </Container>
            {showTopBtn && (
                <div className='go-top bounce' onClick={goTop}>
                    <i className="fas fa-chevron-up"></i>
                </div>
            )}
        </footer>
    );
}
















// 8888888888888**********************************8888888888


// import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';

// export default function AppFooter() {
//     const [showTopBtn, setShowTopBtn] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 400) {
//                 setShowTopBtn(true);
//             } else {
//                 setShowTopBtn(false);
//             }
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     function goTop() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     }

//     return (
//         <Container fluid>
//             <div className='copyright'>&copy; 2024 Corporate. All Rights Reserved. </div>
//             <div className="socials">
//                 <ul>
//                     <li> <a href="https://www.facebook.com" ><i className='fab fa-facebook-f'></i></a></li>
//                     <li> <a href="https://www.twitter.com" ><i className='fab fa-twitter'></i></a></li>
//                     <li> <a href="https://www.linkedin.com" ><i className='fab fa-linkedin-in'></i></a></li>
//                 </ul>
//             </div>

//             {showTopBtn && (
//                 <div className='go-top' onClick={goTop}>
//                     <i className="fas fa-chevron-up"></i>
//                 </div>
//             )}
//         </Container>
//     );
// }
