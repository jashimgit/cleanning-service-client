import React from 'react';
import Features from '../features/Features';
import TopFooter from '../footer/TopFooter';
import Header from '../header/Header';
import PricePlans from '../price&plans/PricePlans';
import Review from '../review/Review';
import Services from '../services/Services';
import Navbar from '../shared/Navbar';
import BottomFooter from './../footer/BottomFooter';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Features></Features>
            <Services></Services>
            <PricePlans></PricePlans>
            <Review></Review>
            <TopFooter></TopFooter>
            <BottomFooter></BottomFooter>
        </div>
    );
};

export default Home;