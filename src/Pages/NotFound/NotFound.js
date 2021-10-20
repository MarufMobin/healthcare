import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './NotFound.css'

const NotFound = ({match}) => {
    const error = match?.params?.value;
    return (
        <div>
            <h1 className="not-found-text">4 <FontAwesomeIcon icon={faSearchLocation} /> 
            {/* <i class="fas fa-search-location"></i> */} 4
</h1>
        <h1 className="text-center my-5">This Page is Not Found</h1>
        </div>
    );
};

export default NotFound;