import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import MostViewedMovie from '../MostViewedMovie/MostViewedMovie';
import Hero from './Hero/Hero';
import Promos from './Promos/Promos';
import TopRated from './TopRated/TopRated';
import UpcommingMovie from './Upcoming Movie/UpcommingMovie';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Hero/>
            <UpcommingMovie/>
            <Promos/>
            <MostViewedMovie/>
            <TopRated/>
        </div>
    );
};

export default Home;