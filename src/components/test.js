import React, { Component } from 'react';

export default class Test extends Component
{

  state = {
    something: false
  }

  toggleIt = () =>{

    console.log(this.state.something);

    this.setState({
      something: this.state.something?false:true
    });

  }

  render()
  {
    return (
      <div className="post_container">
        <button onClick={()=>this.toggleIt()}> Toggle </button>
        <p> Printing the Test Component </p>
        <HOCHolder {...this.props} color="red" />
      </div>
    )
  }
}

const HigherOrderComponent = (Summer) => {

  class HOC extends Component
  {

    constructor(props)
    {
      super(props);

    }

    state = {
      fullName: "karthikeyan",
      control: true,
      firstName: "Karthi",
      lastName: "Keyan"
    }

    controlToggle = () =>{

      this.setState({
        control : this.state.control?false:true
      });
    }

    getFullName = () =>{

      return this.state.control?this.state.fullName:"Get The Permission";
    }

    getFirstName = () =>{
      return this.state.control?this.state.firstName:"Get The Permission";
    }

    getLastName = () =>{
      return this.state.control?this.state.lastName:"Get The Permission";
    }

    render()
    {


      let printer;

      if(this.state.control)
      {
        printer = "Restrict Control";
      }
      else
      {
        printer = "Give Control";
      }

      return (
        <div>
          <button onClick={()=>this.controlToggle()} > {printer} </button>
          <Summer {...this.props} newColor="orange" fullName={this.getFullName()} firstName={this.getFirstName()} lastName={this.getLastName()} />
        </div>
      )
    }
  }

  return HOC;

}

class Something extends Component
{
  render()
  {
    return (
      <div>
        <p> Printing the Something Component </p>
        <p> FirstName : {this.props.firstName} </p>
        <p> LastName : {this.props.lastName} </p>
        <p> FullName : {this.props.fullName} </p>
      </div>
    )
  }
}

const ActualHolder = HigherOrderComponent(Something);


class HOCHolder extends Component
{
  render()
  {
    return (
      <div>
        <ActualHolder {...this.props} color={this.props.color} />
      </div>
    );
  }
}
