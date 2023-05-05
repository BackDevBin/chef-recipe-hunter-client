import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

const Recipe = ({ recipe }) => {

    const [show, setShow] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const toggleShowA = () => {
        setShow(!show);
        setShowBtn(!showBtn);
    }
        


    const { rating, cookingMethod, recipe_id, recipe_name, recipe_pic, ingredients } = recipe;


    return (
        <div>
            <div className="card mb-3 w-100 h-100">
             
                <img className="card-img-top h-100" src={recipe_pic} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{recipe_name}</h5>
                    <p className="card-text"><span>Cooking Method: </span>{cookingMethod}</p>
                    <p className="card-text"><span>Ingredients: </span>{
                        ingredients.map(ingredient => <li>{ingredient}</li>)
                    }</p>
                    <div className='d-flex justify-content-between'>
                        <p className="card-text"><small className="text-muted">Rating: {rating} Star</small></p>
                        <div>
                            <Button onClick={toggleShowA} variant="danger" disabled={showBtn}>Favorite</Button>
                            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                <Toast.Header>
                                    
                                    <strong className="me-auto">{recipe_name}</strong>
                                    
                                </Toast.Header>
                                <Toast.Body>Marked as your Favorite Recipe</Toast.Body>
                            </Toast>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;