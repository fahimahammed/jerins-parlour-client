import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Services/>
        </div>
    );
};

export default Home;