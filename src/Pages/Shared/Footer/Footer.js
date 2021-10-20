import React from 'react';
import './Footer.css';
import footerfirstImg from '../../../img/footer/bg-06.jpg'
import footersecondImg from '../../../img/footer/bg-07.jpg'
import footerthirdImg from '../../../img/footer/bg-08.jpg'
import footerfourImg from '../../../img/footer/bg-09.jpg'
import footerfifthImg from '../../../img/footer/bg-10.jpg'
import footersixImg from '../../../img/footer/bg-11.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3 style={{fontFamily:"cursive"}}>Zulzana</h3>
                        <ul className="footer-list">
                                <li> F1 456 Caron Town.</li>
                                <li>Office No 3456</li>
                                <li>info@example.com</li>
                                <li>234-5825852763</li>
                        </ul>
                       
                        
                        
                        
                    </div>
                    <div className="col-md-3">
                        <h4>Our Departments.</h4>
                        <ul className="footer-list"> 
                        <li> Hounlare & intensive care</li>
                        <li>Home Care</li>
                        <li>Caregivers</li>
                        <li>Diagnosis & Investigation</li>
                        <li>Medical & Surgical</li>
                        <li>Mental Health</li>
                        <li>Specialized Support Service</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Helpful Links.</h4>
                        <ul className="footer-list">
                            <li>Who We Are</li>
                            <li>Our Team Mission History</li>
                            <li>Awards since 1990 - 2020</li>
                            <li>Experience Purpose</li>
                            <li>Success Story</li>
                            <li> Specialized Suppor</li>
                        </ul>
                        
                        
                        
                        
                        
                       
                    </div>
                    <div className="col-md-3">
                        <h4> Instagram.</h4>
                        <div className="row my-5">
                            <div className="col-md-4"><img src={footerfirstImg} alt="" /></div>
                            <div className="col-md-4"><img src={footersecondImg} alt="" /></div>
                            <div className="col-md-4"><img src={footerthirdImg} alt="" /></div>
                        </div>
                        <div className="row">
                            <div className="col-md-4"><img src={footerfourImg} alt="" /></div>
                            <div className="col-md-4"><img src={footerfifthImg} alt="" /></div>
                            <div className="col-md-4"><img src={footersixImg} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondary-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{ textAlign: "left" }}>
                                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "20px", marginRight: "20px" }} />
                                <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "20px", marginRight: "20px" }} />
                                <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "20px", marginRight: "20px" }} />
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "20px", marginRight: "20px" }} />
                            </div>

                        </div>
                        <div className="col-md-6" style={{color:"#222654",fontSize:"18px",fontWeight:"600"}}>
                            @ 2021 ZulZana Hospital
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;