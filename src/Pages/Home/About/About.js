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
                <h4>From Blog</h4>
            <h3> News & blog</h3>
                <h3>We are the best medical services provider in the Worldipsum dolor sit amet, consectetur adipiscing elit, sed do eiudolore magnaveniam</h3>
            </div>
            <div className="inner-section">
                <div className="container inner-design">
                    <div className="row">
                        {/* <div className="col-md-4">
                        HounLare professional services
                        </div>
                        <div className="col-md-4">
                        HounLare professional services
                        </div>
                        <div className="col-md-4">
                        HounLare professional services
                        </div> */}
                        {
                            abouts.map( about => <SpecificAbout about={about} key={about.id}></SpecificAbout> )
                        }
                    </div>
                    <div className="row">
                            
                            <div className="col-md-4 col-12 offset-4">

                            <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                Block level button
                            </Button>
                           
                            </div>

                            </div>
                            
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default About;