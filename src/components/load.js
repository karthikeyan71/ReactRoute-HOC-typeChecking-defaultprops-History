import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Post, User, Home, About, Path } from './post';
import Test from './test';

export default class Load extends React.Component
{
  render()
  {
      return (
      <div className="load_place">

          <Route path="/" component={Path}/>
          <Route exact path="/" component={Home}/>
          <Route path="/post" component={Post}/>
          <Route exact path="/user" component={User}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/test" component={Test}/>

      </div>
    );
  }
}
