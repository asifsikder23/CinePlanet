import React from 'react';
import Hero from './Hero/Hero';
import PopularMovies from './PopularMovies/PopularMovies';

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularMovies/>
        </div>
    );
};

export default Home;