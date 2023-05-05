import React from 'react';
import { Button, Card } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { picture, name, yearsOfExperience, numberOfRecipes, likes, _id } = chef;


    return (
        <div>
            <Card>
                <LazyLoad>
                    <Card.Img variant="top" src={picture} />
                </LazyLoad>

                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Experience: {yearsOfExperience}+ Year </Card.Text>
                    <Card.Text>Total Recipe: {numberOfRecipes} </Card.Text>
                    <Card.Text>Likes: {likes} </Card.Text>
                    <Link to={`/chef/${_id}`}><Button variant="danger">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;