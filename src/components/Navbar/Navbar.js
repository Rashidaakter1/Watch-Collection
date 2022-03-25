import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Find Your Watch 
                <h6 className='search-icon' ><BsSearch></BsSearch> </h6>
            </h1>
            <h3>Choose Any 4 Watches</h3>
        </div>
    );
};

export default Navbar;