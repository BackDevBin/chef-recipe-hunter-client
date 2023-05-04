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
            <h4>When should you use context API?</h4>
            <p>When avoid passing some props through many levels, then we use context API. 
When some data needs to be accessible by many components at different nesting levels, then Context is primarily used. 
When data changes frequently and needs to be updated in many places
When data is expensive to compute and want to avoid recomputing it every time it’s needed.</p>
            </div>

            <div className='blog'>
            <h4>What is a custom hook?</h4>
            <p>A custom hook always starts with the name ‘use’. It is a special JavaScript function that can be used to call other hooks.It allows to reuse some piece of code in several parts in app. When component logic that needs to be used by multiple components, can extract that logic to a custom Hook. </p>
            </div>

            <div className='blog'>
            <h4>What is useRef?</h4>
            <p>useRef() is a built-in React hook that accepts an argument as an initial value and returns a reference. UseRef is a hook that allows creating a reference to the DOM element directly in the active element. It can be used to store a mutable value that does not cause re-rendering when updated. It can be used to directly access a DOM element.</p>
            </div>


            <div className='blog'>
            <h4>What is useMemo?</h4>
            <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.The useMemo() hook accepts two arguments — a function compute that computes a result, and the dependencies array. During initial rendering, useMemo (compute, dependencies) invokes compute, memoizes the calculation result, and returns it to the component.</p>
            </div>

        </div>
            
        </div>
    );
};

export default Blog;