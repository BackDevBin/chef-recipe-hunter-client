import React from 'react';
import { Card } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Article = ({ recipe }) => {

    const { rating, cookingMethod, recipe_id, recipe_name, recipe_pic, ingredients } = recipe;

    return (
        <Card className="bg-dark text-light">
            <LazyLoad>
            <Card.Img className='h-100 opacity-50' src={recipe_pic} alt="Card image" />
            </LazyLoad>
            <Card.ImgOverlay>
                <Card.Title>{recipe_name}</Card.Title>
                <Card.Text>
                    {cookingMethod.slice(3, 90)}... <span className='text-primary'>See more</span>
                </Card.Text>
                <Card.Text>Last updated {recipe_id} mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Article;