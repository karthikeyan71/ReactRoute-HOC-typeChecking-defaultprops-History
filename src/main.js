import React, {Component} from 'react';
import Load from './components/load';
import Header from './components/header';
import Check from './check';

class Main extends Component
{
  render()
  {

    // let printer = (
    //     <Check />
    // );


    let printer = (
        <div>
          <Header />
          <Load />
        </div>
    );

    return(
      <React.Fragment>
        {printer}
      </React.Fragment>
    )
  }
}

export default Main;
