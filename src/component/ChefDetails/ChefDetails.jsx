import React, { useEffect, useState } from 'react';
import './ChefDetails.css';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefDetails = () => {
    const [recipes, setRecipes] = useState([]);
    const { id } = useParams();
    const chefInfo = useLoaderData();
    const { picture, name, yearsOfExperience, numberOfRecipes, likes, _id, bio } = chefInfo;


    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-tishansarker873-gmailcom.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    

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

            <div className='recipe-container'>
                {
                    recipes.map(recipe =><Recipe
                    key={recipe.recipe_id}
                    recipe ={recipe}
                    ></Recipe>)
                }


            </div>


        </div>
    );
};

export default ChefDetails;