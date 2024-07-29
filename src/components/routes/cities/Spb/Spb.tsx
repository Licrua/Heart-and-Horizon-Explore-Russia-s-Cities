import Carousel from 'react-bootstrap/Carousel';
import iconsKazan from '@images/citiesIMG/kazan.jpg';
import iconsMoscow from '@images/citiesIMG/moscow.jpeg';
import iconsNovgorod from '@images/citiesIMG/novgorod.jpeg';

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Spb() {
  return (
    <Carousel>
      <h1>sdasda</h1>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={iconsKazan} alt="" width="50%" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={iconsMoscow} width="150px" alt="" />
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={iconsNovgorod} width="150px" alt="" />
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Spb;
