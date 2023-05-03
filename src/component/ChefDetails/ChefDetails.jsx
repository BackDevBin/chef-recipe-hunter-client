import React from 'react';
import './ChefDetails.css';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const { id } = useParams();
    const chefInfo = useLoaderData();
    const { picture, name, yearsOfExperience, numberOfRecipes, likes, _id, bio } = chefInfo;
    return (
        <div>
            <div className='banner-container'>
                <div >
                    <img className='chef-img' src={picture} alt="" />
                </div>
                <div className='info-container'>
                    <h4>{name}</h4>
                    <p>Total Recipe: {numberOfRecipes}</p>
                    <p>Experience: {yearsOfExperience}+ Year</p>
                    <p>Instagram: {likes} people</p>
                    <p><span className='fs-5'>About {name}:</span> {bio}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;