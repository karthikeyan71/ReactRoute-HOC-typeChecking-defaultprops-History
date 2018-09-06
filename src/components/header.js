import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component
{
  render()
  {
    return (
      <header>
        <div className="header_style">
          <Link to="/"> <li> Home </li> </Link>
          <Link to="/test"> <li> Test </li> </Link>
          <Link to="/post"> <li> Post </li> </Link>
          <Link to="/user"> <li> User </li> </Link>
          <Link to="/about"> <li> About </li> </Link>
        </div>
      </header>
    )
  }
}
