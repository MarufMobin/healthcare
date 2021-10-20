import React from 'react';
import { Link } from 'react-router-dom';
import './SpeciticAbout.css'

const SpecificAbout = (props) => {
    // console.log(props.about)
    const { id, Details, name, price, img } = props.about;

    return (
        <div className="col-md-4 mb-5  ">
            <div className="cart-body">
                <img src={img} style={{ width: "300px", height: "200px" }} alt="" className="img-fluid" />
                <h5 className="my-2">{name}</h5>
                <h5 style={{ fontSize: "24px", fontWeight: "700", margin: "10px 0px " }}>Price: {price}</h5>
                <Link to={`/about/${id}`}>
                    <button className="custom-btn-another">Show Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SpecificAbout;