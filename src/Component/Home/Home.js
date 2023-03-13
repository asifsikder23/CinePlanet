import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import Hero from './Hero/Hero';
import PopularMovies from './PopularMovies/PopularMovies';
import Promos from './Promos/Promos';
import TopRated from './TopRated/TopRated';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
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