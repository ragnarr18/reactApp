import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RegionSearch from './RegionForm';
import RegionForm from './RegionForm';

function Nav() {    
    return (
        <nav>
            <h3> Logo</h3>
            <ul className="nav-links">
                <Link to="/about">
                    <li>About</li>
                </Link>

                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                   
                {/* <Link to="/region"> */}
                <RegionForm></RegionForm>
                {/* </Link> */}
                
            </ul>
        </nav>
    );
  }

export default Nav;