import React from 'react';
import Banner from '../Banner/Banner';
import CardHolder from '../CardHolder/CardHolder';
import { useLoaderData } from 'react-router-dom';
import Article from '../Article/Article';
import Question from '../Question/Question';

const Home = () => {
    const chefs = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <CardHolder chefs={chefs}></CardHolder>
            <Article></Article>
            <Question></Question>
        </div>
    );
};

export default Home;