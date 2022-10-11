import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul className='md:flex justify-center gap-6 text-lg p-6 bg-slate-500 text-yellow-300'>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/statistics'}>Statistics</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>

            </ul>
        </nav>
    );
};

export default Header;