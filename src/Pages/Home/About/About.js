import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import SpecificAbout from '../../About/SpecificAbout/SpecificAbout';
import './About.css'

const About = () => {
    const [ abouts, setAbouts ] = useState([]);

    useEffect(()=>{
        fetch('/fakedata.json')
        .then( res => res.json())
        .then( data => setAbouts(data))
    },[])
    
    return (
        <div className="about-section">
            <div className="inner-text">
                <h4 className="title">From Blog</h4>
            <h3 className="sub-title"> News & blog</h3>
                <h3 className="description">We are the best medical services provider in the Worldipsum dolor sit amet, consectetur adipiscing elit, sed do eiudolore magnaveniam</h3>
            </div>
            <div className="inner-section">
                <div className="container inner-design">
                    <div className="row">
                        {
                            abouts.map( about => <SpecificAbout about={about} key={about.id}></SpecificAbout> )
                        }
                    </div>
                   
                </div>
               
            </div>
        </div>
    );
};

export default About;