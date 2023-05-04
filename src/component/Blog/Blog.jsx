import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>

            <div className='matchingNav'>
                <h3 className='title'>Blogs</h3>
            </div>

            <div className='blogContainer'>

                <div className='blog'>
                    <h4>Differences between uncontrolled and controlled components ?</h4>
                    <p>In React, controlled components refer to components whose state and behavior are controlled by the parent component. These components rely on props sent from the parent component to update their state and behavior. Uncontrolled components refer to components that internally manage their own state.</p>
                </div>

                <div className='blog'>
                    <h4>How to validate React props using PropTypes ?</h4>
                    <p>We can use PropTypes to validate any data we are receiving from props. But before using it we will have to import it as always in our app: import PropTypes from 'prop-types'; Below are the validators for the basic data types:</p>
                    <li>PropTypes.any: The prop can be of any data type</li>
                    <li>PropTypes.bool: The prop should be a Boolean</li>
                    <li>PropTypes.number: The prop should be a number</li>
                    <li>PropTypes.string: The prop should be a string</li>
                    <li>PropTypes.func: The prop should be a function</li>
                    <li>PropTypes.array: The prop should be an array</li>
                </div>

                <div className='blog'>
                    <h4>Tell us the difference between nodejs and express js?</h4>
                    <p>NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.Node. js is an open-source and cross-platform that is used to execute JavaScript code outside of a browser. Express. js is used to develop complete web applications such as single-page, multi-page, and hybrid web applications and APIs</p>
                </div>


                <div className='blog'>
                    <h4>What is a custom hook, and why will you create a custom hook?</h4>
                    <p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic (say a “setState” or localStorage logic), you can put that code inside a custom hook and reuse it.</p>
                </div>

            </div>

        </div>
    );
};

export default Blog;