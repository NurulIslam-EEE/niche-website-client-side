import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import RepairAndService from '../RepairAndService/RepairAndService';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner />
            <Services />
            <RepairAndService />
            <Reviews />
            <Footer></Footer>
        </div>
    );
};

export default Home;