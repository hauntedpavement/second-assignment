import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  // console.log("i was clicked");
  // DONT DO THIS CANNOT MUTATE STATE DIRECTLY 
  // this.state.outputnames[0].name = 'fucjer';
  // since we extend component, can use set state

  switchOutputNameHandler = (newName) => {
    this.setState({
      outputnames: [
        { name: newName, color: 'gold' },
        { name: 'uio gombdop', color: 'aqua' },
      ]
    })
  };

  // setOutPutNames({
  //   outputnames: [
  //     { name: 'graham', color: 'orange' },
  //     { name: 'jessica', color: 'organce' },
  //   ]
  // });

  state = {
    outputnames: [
      { name: 'mike', color: 'green' },
      { name: 'uio', color: 'yellow' },
    ]
  }

  render() {
    return (
      <div className="App">

        <h1>i am app</h1>

        <button onClick={this.switchOutputNameHandler.bind(this, 'Bindton!')}> switchOutputNameHandler </button>

        <UserOutput 
        name={this.state.outputnames[0].name} color={this.state.outputnames[0].color}
        click={() => this.switchOutputNameHandler('crongon')}>Click meMy Hobbies: racing</UserOutput>
        
        <UserOutput 
        name={this.state.outputnames[1].name} color={this.state.outputnames[1].color}> </UserOutput>

        <UserInput username="timothy"> i am prop.children for user input </UserInput>

      </div>
    );
  };
}

export default App;
