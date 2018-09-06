import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


export class Post extends Component
{
  render()
  {

    // console.log(this.props.match);

    return (
      <div className="post_container">

        <Link to={`${this.props.match.url}/info`}> Info - </Link>
        <Link to={`${this.props.match.url}/something`}> Load Something </Link>
        <Link to={`${this.props.match.url}/nothing`}> Load Nothing </Link>

        <Route path={`${this.props.match.url}/:section`} component={SubView}/>

      </div>
    )
  }
}

class SubView extends Component
{
  render()
  {

    console.log(this.props.something);
    console.log(this.props.nothing);

    let printer = 0 ;

    if(this.props.match.url == "/post/info")
    {
      printer = (
        <div>
          <p> Inside the info component, so other than this nothing will show </p>
        </div>
      );
    }
    else {

      printer = (

        <div>

          <br />
          <p> Rendering the SubView Component : {this.props.match.url} </p>
          <Link to={`${this.props.match.url}/after`}> After </Link>
          <Link to={`${this.props.match.url}/before`}> Before </Link>

          <Route path={`${this.props.match.url}/:section`}  render={ ({match}) => (
            <p>
            <br/>
              Current Route is {match.url}
            </p>
          )}/>

        </div>

      );

    }


    return (
      <div>
        <p> Something </p>
        { printer }
      </div>

    )
  }
}

SubView.propTypes = {
  something: PropTypes.string,
  nothing: PropTypes.object.isRequired
}


SubView.defaultProps = {
  something: "yes",
  nothing: "no"
};

export class User extends Component
{
  render()
  {
    return (
      <div className="post_container">
        <p> Inside the User Component </p>
      </div>
    )
  }
}

export class Home extends Component
{
  render()
  {
    console.log(this.props.match);
    return (
      <div className="post_container">
        <p> Inside the Home Component </p>
      </div>
    )
  }
}

export class Path extends Component
{
  render()
  {
    return (
      <div>

      </div>
    )
  }
}

export class About extends Component
{

  state = {
    selection:null,
  }

  bringAboutMe = () => {
    console.log("Inside the bringAboutMe function");
  }

  bringAboutPage = () => {
    console.log("Inside the bringAboutPage function");
  }

  render()
  {

    let printer = 0;

    if(this.state.selection)
    {
      if(this.state.selection==="me")
      {
        printer = <p> This is coming the about component. This text will get Replaced. This is coming the about component. This text will get Replaced. This is coming the about component. This text will get Replaced. This is coming the about component. This text will get Replaced. This is coming the about component. This text will get Replaced. This is coming the about component. This text will get Replaced.  </p>
      }
      else {
        printer = <p> This is coming the about component. This text will get Replaced. This is coming the about component. This text will get Replaced. This is coming the about component. This text will get Replaced. This is coming the about component. This text will get Replaced. This is coming the about component. This text will get Replaced. This is coming the about component. This text will get Replaced.  </p>
      }
    }
    else {
      printer = <p> User selection is not yet made. </p>
    }



    return (
      <div className="post_container">

        <div className="about_container">
          <li onClick={()=>this.bringAboutMe()}> About Me </li>
          <li onClick={()=>this.bringAboutPage()}> About Page </li>
        </div>

        <div className="about_detail">

          {printer}

        </div>

      </div>
    )
  }
}
