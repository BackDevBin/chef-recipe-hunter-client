import React from 'react';
import Banner from '../Banner/Banner';
import CardHolder from '../CardHolder/CardHolder';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import Latest from '../Lattest/Latest';

const Home = () => {
    const chefs = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <CardHolder chefs={chefs}></CardHolder>
            <Latest></Latest>
            <Question></Question>
        </div>
    );
};

export default Home;