import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ChefCard = ({ chef }) => {
    const { picture, name, yearsOfExperience, numberOfRecipes, likes, bio } = chef;
    return (
        <div>
            <Card>
                <Card.Img variant="top"  src={picture} />
                <Card.Body className='text-center'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Experience: {yearsOfExperience}+ Year </Card.Text>
                    <Card.Text>Total Recipe: {numberOfRecipes} </Card.Text>
                    <Card.Text>Likes: {likes} </Card.Text>
                    <Button variant="danger">View Recipes</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;