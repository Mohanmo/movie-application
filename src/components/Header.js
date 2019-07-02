import React from 'react';
import Search from './Search';
import { Link } from 'react-router';

import '../styles/Header.css';

const Logo = () => (
    <Link className="header-link" to="/">
        <img className="header-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCcbDucTMR8tWzBVuilNi6-6kfmwVZG4HwRerbhxOKs9TGbJR" 
        alt="logo"
        width="250">
        </img>
    </Link>
);

function AppBarHeader({ ...rest }) {
    return (
        <div className="header">
            <div className="header-container">
                <div className="logo"><Logo /></div>                               
                <div className="favorites">
                    <Link className="header-link" to="/favorites">
                        Favorites
                    </Link>
                </div>
                <Search {...rest} />
            </div>
        </div>
    );
}

export default AppBarHeader;
