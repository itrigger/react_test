import React from 'react';
import TwoCol from "../components/landing/TwoCol";
import HowTo from "../components/landing/HowTo";
import Process from "../components/landing/Process";
import BlockAbout from "../components/landing/BlockAbout";
import MyMap from "../components/yaMap/Map";
import ExchangeRates from "../components/test/ExchangeRates";

const Home = () => {
    return (
        <div>
            <TwoCol/>
            <ExchangeRates />
            <HowTo/>
            <Process/>
            <BlockAbout/>
            <MyMap />

        </div>
    );
};

export default Home;