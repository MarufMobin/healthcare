import React from 'react';
import testiOne from '../../../img/trusted/img__rosie.jpg';
import testiTwo from '../../../img/trusted/img__adeniyi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Trusted.css'
import flugOne from '../../../img/trusted/icon__ghana.svg';
import flugTwo from '../../../img/trusted/icon__kenya.svg';
import flugThree from '../../../img/trusted/icon__nigeria.svg';

const Trusted = () => {
    return (
        <div className="testimonial-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 testimonial">
                        <div className="testiOne" style={{display:"flex",boxShadow: "0px 0.75rem 0.25rem rgb(68 83 100 / 10%)"}}>
                           <div>
                           <img src={testiOne} alt="" />
                           </div>
                            <div>
                            <span className="des">Great app to send and receive money across a number of countries, highly recommended as a money transfer alternative.</span>
                            <p className="date">Amai Rosie, 6 June, 2020</p>
                            </div>
                        </div>
                        <div className="testiOne" style={{display:"flex",marginLeft:"80px",boxShadow: "0px 0.75rem 0.25rem rgb(68 83 100 / 10%)"}}>
                           <div>
                           <img src={testiTwo} alt="" />
                           </div>
                            <div>
                            <span className="des">Great app to send and receive money across a number of countries, highly recommended as a money transfer alternative.</span>
                            <p className="date">Amai Rosie, 6 June, 2020</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div> 
                            <h4>Trusted & Secure</h4>
                            <p>Join over 3 million people securely sending and receiving money with Chipper Cash.</p>
                            <h5>Get started with Chipper Cash</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="testiInnerOne">
                            <h5> Community powered by over 3 million users, and we are just getting started.</h5>

                            <div className="row">
                                <div className="col-md-6"><h5>4.5 out of 5</h5>
                                <i class="fab fa-google-play"></i>
                                    Google Play</div>
                                <div className="col-md-6">
                                    <h5>4.4 out of 5</h5>
                                    <i class="fab fa-apple"></i>
                                    App Store</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                           <div className="col-md-12 col-12 ">
                           <div className="flug-first cus-mar flug-second">
                                <div><FontAwesomeIcon icon={faStar} /><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    <img src={flugOne} style={{ width: "30px", height: "50px" }} alt="" /></div>
                                <p>So fast and very easy to transfer money to other countries. I love it!</p>

                                App store review, 11 October, 2020
                            </div>
                           </div>
                        </div>
                        <div className="row">

                        <div className="flug-second  col-md-6">
                                <div ><FontAwesomeIcon icon={faStar} /><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    <img src={flugTwo} style={{ width: "30px", height: "50px" }} alt="" /></div>
                                So fast and very easy to transfer money to other countries. I love it!

                                App store review, 11 October, 2020
                            </div>
                            <div className="flug-third col-md-6 " >
                                <div className="flug-second">
                                <div><FontAwesomeIcon icon={faStar} /><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                    <img src={flugThree} style={{ width: "30px", height: "50px" }} alt="" /></div>
                                So fast and very easy to transfer money to other countries. I love it!

                                App store review, 11 October, 2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trusted;