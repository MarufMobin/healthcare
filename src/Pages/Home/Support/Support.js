import React from 'react';
import supportIcon from '../../../img/support/png-icon-18.png';
import './Support.css'

const Support = () => {
    return (
        <div className="support-section">
           <div className="support-img mb-5">
               <span></span>
           <img src={supportIcon} alt="" />
           </div>
            <h4>Anything missing there? Don't worry</h4>
<h2>Contact for full support</h2>

            <button className="custom-btn mt-5">Take a Teathment</button>
        </div>
    );
};

export default Support;