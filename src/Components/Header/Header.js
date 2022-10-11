import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/statistics'}>Statistics</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/blog'}>Blog</Link>
        </nav>
    );
};

export default Header;