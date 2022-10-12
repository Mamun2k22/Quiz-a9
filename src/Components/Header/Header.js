import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <ul className='md:flex justify-end gap-6 text-base p-6 bg-slate-500 text-white'>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/statistics'}>Statistics</Link></li>
                    <li><Link to={'/quiz'}>Quiz</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>

                </ul>
            </nav>
        </div>

    );

};

export default Header;