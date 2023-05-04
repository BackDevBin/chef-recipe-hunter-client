import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';

const Latest = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-tishansarker873-gmailcom.vercel.app/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div>
           <div className='text-center my-5'>
                <h3>Latest Recipe by our Private Chefs</h3>
                <p>Every occasion is unique - make sure you have the right chef and menu for it!</p>
            </div>

            <div className='Latest-container'>
                {
                    recipes.map(recipe => <Article
                        key={recipe.recipe_id}
                        recipe ={recipe}
                    ></Article>)
                }


            </div>

            



        </div>
    );
};

export default Latest;