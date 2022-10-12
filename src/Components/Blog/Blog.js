import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Blog Page Here </h2>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                {/* What is the purpose of React Router */}
                <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg mt-8'>
                    <h2 className='text-2xl font-bold text-amber-300'>01. what is the purpose of the react router?</h2>
                    <p ><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>R</span>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </div>
                {/* How does context api work? */}
                <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                    <h2 className='text-2xl font-bold text-amber-300'>02. How does context api work?</h2>
                    <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>T</span>he React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                {/* what is useRef hook in react? */}
                <div className='mb-10 bg-zinc-800 text-white p-8 rounded-lg '>
                    <h2 className='text-2xl font-bold text-amber-300'>03. what is useRef hook in react?</h2>
                    <p><span className='text-xl font-bold text-amber-400'>Ans:</span> <span className='text-xl font-semibold'>T</span>he useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;