import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from './Header/Header';
import Overview from './Overview/Overview';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Services/>
            <Overview/>
        </div>
    );
};

export default Home;