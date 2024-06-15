import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import blogImage1 from '../assests/images/blog1.jpg';
import blogImage2 from '../assests/images/blog2.jpg';
import blogImage3 from '../assests/images/blog3.jpg';

const blogData = [
    {
        id: 1,
        image: blogImage3,
        time: '10 May 2024',
        title: 'Beautiful Day',
        description: 'A brief description of the beautiful day. Experience the serene beauty of nature.',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: blogImage1,
        time: '15 April 2024',
        title: 'Coffee Lovers',
        description: 'A brief description for coffee lovers. Discover the rich taste of freshly brewed coffee.',
        link: 'https://www.google.com'
    },
    {
        id: 3,
        image: blogImage2,
        time: '2 May 2024',
        title: 'Tips for UI Designs',
        description: 'Some useful tips for UI designs. Enhance your design skills with these insights.',
        link: 'https://www.facebook.com'
    }
];

export default function AppBlog() {
    return (
        <section id="block" className='block blog-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>Latest from Blog</h2>
                    <div className="subtitle">Get our latest news from the blog</div>
                </div>
                <Row>
                    {blogData.map(blog => (
                        <Col sm={4} key={blog.id}>
                            <div className='holder'>
                                <Card>
                                    <Card.Img variant="top" src={blog.image} alt={blog.title} />
                                    <Card.Body>
                                        <time>{blog.time}</time>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>
                                            {blog.description}
                                        </Card.Text>
                                        <a href={blog.link} className='btn btn-primary'>
                                            Read more <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
