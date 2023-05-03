import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import './CardHolder.css'

const CardHolder = ({chefs}) => {

    

    return (
        <div>
            <div className='text-center mb-5'>
            <h3>Meet Our Chefs</h3>
            <p className='w-50 mx-auto'>HireAmericanChef.com provides the largest and only open searchable venue for connecting people looking for affordable and healthy eating alternatives with quality personal chefs in their area.</p>
            </div>
           <div className='chef-container'>
           {
                chefs.map(chef => <ChefCard
                chef={chef} key={chef._id}></ChefCard>)
            }
           </div>
        </div>
    );
};

export default CardHolder;