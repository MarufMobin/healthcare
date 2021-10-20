import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('/doctorsdata.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);


    console.log(doctors)

    return (
        <div className="doctor-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner-doctor">
                            <h3>   Helpful Doctors</h3>
                            <h2>Advanced carefully doctors</h2>
                            <p>

                                Why our services is best all time since 1990. desires to obtain of itself, because it is pain, but because occasionally circums tanceprocure him some great deals.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        doctors?.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Doctors;