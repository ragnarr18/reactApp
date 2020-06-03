import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RegionSearch from './RegionSearch';

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
                {/* <form action="/searchForm/">
                <input type="text" name="searchValue" placeholder="search region"/>
                <button>Search</button>
                </form> */}
                <RegionSearch></RegionSearch>
            </ul>
        </nav>
    );
  }

export default Nav;