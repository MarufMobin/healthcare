import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './About.css'

const About = () => {
    const { aboutId } = useParams();
    const [datas, setDatas]  = useState([]);

    useEffect(()=>{
        fetch('/fakedata.json')
        .then( res => res.json())
        .then( data => setDatas(data))
    },[])

    const result = datas.find( data => data.id == aboutId );
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3">
                                <div className="custm-cart my-5">
                                    <img src={result?.img} style={{width: "100%", height:"350px"}} alt="" />
                                        <h3>{result?.name}</h3>
                                        {result?.Details}

                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;