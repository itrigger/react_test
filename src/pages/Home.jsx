import React from 'react';
import TwoCol from "../components/landing/TwoCol";
import HowTo from "../components/landing/HowTo";
import Process from "../components/landing/Process";
import BlockAbout from "../components/landing/BlockAbout";
import MyMap from "../components/landing/Map";

const Home = () => {
    return (
        <div>
            <TwoCol/>
            <HowTo/>
            <Process/>
            <BlockAbout/>
            <MyMap />
        </div>
    );
};

export default Home;