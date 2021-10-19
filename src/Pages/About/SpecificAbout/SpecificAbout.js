import React from 'react';
import { Link } from 'react-router-dom';

const SpecificAbout = (props) => {
console.log(props.about)
    const { id, Details,name,price,img} = props.about;

    return (
        <div className="col-md-4 mb-5">
            <img src={img}  style={{width:"300px",height:"200px"}}alt="" />
            <h5 className="my-2">{name}</h5>
            <h5>Price: {price}</h5>
           <Link to={`/about/${id}`}>
                <button className="btn btn-warning">Show Details</button>
           </Link>
        </div>
    );
};

export default SpecificAbout;