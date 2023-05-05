import React from 'react';
import './Blog.css'
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {


    return (
        <div >
            <div className='matchingNav'>
                <div className='text-center'>
                    <h3 className='title'>Blogs</h3>
                    <Pdf targetRef={ref} filename="blog.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                </div>
            </div>

            
                <div ref={ref} className='blogContainer'>

                    <div className='blog'>
                        <h4>Differences between uncontrolled and controlled components ?</h4>
                        <p>Controlled components allow to components behavior and states are controlled by the parent component. Uncontrolled components refer to components that internally manage their own state.Controlled components rely on props sent from the parent component to update their state and behavior.</p>
                    </div>

                    <div className='blog'>
                        <h4>How to validate React props using PropTypes ?</h4>
                        <p>We can use PropTypes to validate any data we are receiving from props.PropTypes are a feature for runtime validation of props during development. PropTypes exports a range of validators that can be used to make sure the data you receive is valid.Below are the basic guide:</p>

                        <code>
                            To use PropTypes in your React component, you need to import PropTypes from the ‘prop-types’ package and then define the propTypes property on your component. The propTypes property should be an object whose keys are the names of the props you want to validate and whose values are the validators you want to use.
                        </code>


                    </div>

                    <div className='blog'>
                        <h4>Tell us the difference between nodejs and express js?</h4>
                        <p>Node. js is an open-source and cross-platform that is used to execute JavaScript code outside of a browser And Express. js is used to develop complete web applications such as single-page, multi-page, and hybrid web applications and APIs.NodeJS is the package, which provides the JavaScript run-time environment, where Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                    </div>


                    <div className='blog'>
                        <h4>What is a custom hook, and why will you create a custom hook?</h4>
                        <p>A custom Hook is a Javascript function whose name starts with ”use” and that may call other Hooks. The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic say a “setState” or localStorage logic, you can put that code inside a custom hook and reuse it.</p>
                    </div>

                </div>
            

        </div>
    );
};

export default Blog;