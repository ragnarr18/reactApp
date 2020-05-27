import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
                <form action="/searchForm/">
                <input type="text" className="searchText" ></input>
                <input type="submit"/>
                </form>
            </ul>
        </nav>
    );
  }

export default Nav;