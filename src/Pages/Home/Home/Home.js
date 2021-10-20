import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Emergency from '../../Contact/Emergency/Emergency';
import Services from '../Services/Services';
import Support from '../Support/Support';
import Trusted from '../Trusted/Trusted';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Trusted></Trusted>
            <Support></Support>
            
        </div>
    );
};

export default Home;