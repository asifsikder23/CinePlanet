import React from 'react';
import Hero from './Hero/Hero';
import PopularMovies from './PopularMovies/PopularMovies';
import Promos from './Promos/Promos';
import TopRated from './TopRated/TopRated';

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularMovies/>
            <Promos/>
            <TopRated/>
        </div>
    );
};

export default Home;