import React from 'react';
import './Footer.css';
import footerfirstImg from '../../../img/footer/bg-06.jpg'
import footersecondImg from '../../../img/footer/bg-07.jpg'
import footerthirdImg from '../../../img/footer/bg-08.jpg'
import footerfourImg from '../../../img/footer/bg-09.jpg'
import footerfifthImg from '../../../img/footer/bg-10.jpg'
import footersixImg from '../../../img/footer/bg-11.jpg'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        Logo
                        F1 456 Caron Town.
                        Office No 3456
                        info@example.com
                        234-5825852763
                    </div>
                    <div className="col-md-3">
                    Our Departments.
                    Hounlare & intensive care
                    Home Care
                    Caregivers
                    Diagnosis & Investigation
                    Medical & Surgical
                    Mental Health
                    Specialized Support Service
                    </div>
                    <div className="col-md-3">
                         Helpful Links.
                        Who We Are
                        Our Team Mission History
                        Awards since 1990 - 2020
                        Experience Purpose
                        Success Story
                        Specialized Suppor
                    </div>
                    <div className="col-md-3">
                   <h3> Instagram.</h3>
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
                            icon icon icon icon
                            
                        </div>
                        <div className="col-md-6">
                        @ 2021 OilyTheme all right reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;