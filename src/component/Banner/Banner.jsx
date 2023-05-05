import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/slide-1.jpg';
import slide2 from '../../assets/slide-2.jpg';
import slide3 from '../../assets/slide-3.jpg';

const Banner = () => {
    return (
        <Carousel className='mx-auto my-5 w-75'>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded "
            src={slide2}
            alt="First slide"
          />
          <Carousel.Caption>
          <h3>British shakshuka</h3>
            <p>This British shakshuka is fun! It’s the full English – sausages, bacon, mushrooms, tomatoes, beans and eggs – all cooked in one pan. And if you like a bit of brown sauce with your brekkie, it’s used to glaze the sausages and give a subtle tang to the tomato sauce..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded "
            src={slide1}
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h3>Baked eggs three ways</h3>
            <p>
            These easy baked eggs take only minutes to assemble – perfect for Sunday brunches, solo lunches or even lazy suppers. They’re also easily scaled up if you’re feeding a crowd – much less work than poaching or frying dozens of eggs!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded "
            src={slide3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h3>Measuring in a Professional Setting</h3>
            <p>Of course, in your personal home kitchen, you can experiment much more with cooking or baking on a whim than you could in someone else’s kitchen. For many chefs who work in restaurants, their home kitchen is where they get to scratch that itch to try new culinary creations. But it still takes experience and trial-and-error to do effectively.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;