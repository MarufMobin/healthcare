import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const {id, name, picture, Degisnation }= props.doctor;
    return (
        <div className="col-md-3" >
            <div className="m-3 items ">
               <div className="inner-cart">
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <p>{Degisnation}</p>
                <button className="custom-btn" >MOre Information</button>
               </div>
               
            </div>
        </div>
    );
};

export default Doctor;