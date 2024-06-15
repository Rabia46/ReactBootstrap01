import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './components/ExampleCarouselImage';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <ExampleCarouselImage text="First slide" />
                <Carousel.Caption>
                    <h3> Innovation in Motion
                    </h3>
                    <p>Transforming Ideas into Reality with Cutting-Edge Technology</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                    <h3> Global Reach</h3>
                    <p>  Connecting Businesses Worldwide </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                    <h3>  Agile Solutions</h3>
                    <p>
                        Adaptable and Scalable for Your Growth
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;