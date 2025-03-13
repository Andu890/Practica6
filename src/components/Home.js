import React from 'react';
import Carousel from './Carousel'
import About from "./About";
import Layout from "./Layout";

const Home = ({}) => {
    return (
        <div>
            <h1>Pagina Principal</h1>
            <Carousel />
            <About />
            <Layout />
        </div>
    );
};
export default Home;