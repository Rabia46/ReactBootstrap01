import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

let testimonialsData = [
    {
        id: 1,
        name: "John Wills",
        description: "The team ofthis company is simply outstanding.Their ability to provide tailored HR solutions has transformed our employee engagement and retention rates. ",
        designation: "Manager"
    },

    {
        id: 2,
        name: "Rocky Jonshan",
        description: "I am consistently impressed with the level of service provided by [Your Company].Their financial expertise and strategic guidance have been instrumental in optimizing our financial performance. ",
        designation: "Exective"
    },

    {
        id: 3,
        name: "Linda Thompson",
        description: "The sales strategies and support provided by[Your Company] have significantly boosted our sales performance.Their insights and tailored solutions have empowered our sales team to reach new heights.",
        designation: "VP of Sales at Dynamic Ventures"
    },

]

export default function AppTestimonials() {
    return (
        <section id='testimonials' className='block testimonials-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>Client testimonials</h2>
                    <div className="subtitle"> what clients say about us </div>
                </div>
                <Carousel>
                    {testimonialsData.map(testimonials => (
                        <Carousel.Item key={testimonials.id}>
                            <blockquote>
                                <p>{testimonials.description}</p>
                                <cite>
                                    <span className="name">{testimonials.name}</span>
                                    <span className="designation">{testimonials.designation}</span>
                                </cite>
                            </blockquote>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>

        </section>
    )
}