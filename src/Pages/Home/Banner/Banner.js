import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import firstImg from '../../../img/hero-01.jpg'
import secImg from '../../../img/hero-02.jpg'
import thirdImg from '../../../img/hero-03.jpg'

const Banner = () => {
    return (
        <div className="carousel-div">
            <Carousel fade controls={false} interval={2000}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={firstImg}
                    alt="First slide"
                    />
                   
                    <Carousel.Caption className="carousel-inner">
                            <div className="carousel-text">
                            <h3>Medical Center.</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>                                
                                </div>               
                    </Carousel.Caption>
                  
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={secImg}
                    alt="Second slide"
                    />

<Carousel.Caption className="carousel-inner">
                            <div className="carousel-text">
                            <h3>seCond jsdkfajkdf</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, ipsum officia, ea ab dolor commodi libero eos minima ducimus repudiandae soluta temporibus facere maxime incidunt hic quae. Ducimus, dignissimos iure?</p>                                
                                </div>               
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={thirdImg}
                    alt="Third slide"
                    />

<Carousel.Caption className="carousel-inner">
                            <div className="carousel-text">
                            <h3>THirdsdkajfksdjfkajklsfdj65656</h3>
                        <p>repudiandae soluta temporibus facere maxime incidunt hic quae. Ducimus, dignissimos iure?</p>                                
                                </div>               
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;