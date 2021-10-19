import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Emergency from '../Emergency/Emergency';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Emergency></Emergency>
            
        </div>
    );
};

export default Home;