import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  const switchOutputNameHandler = () => {
    setOutPutNames({
      outputnames: [
        { name: 'graham', color: 'orange' },
        { name: 'jessica', color: 'organce' },
      ]
    });
  };

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

        <button onClick={switchOutputNameHandler}> switchOutputNameHandler </button>

        <UserOutput name={this.state.outputnames[0].name} color={this.state.outputnames[0].color}> </UserOutput>
        <UserOutput name={this.state.outputnames[1].name} color={this.state.outputnames[1].color}> </UserOutput>

        <UserInput username="timothy"> tim is gay </UserInput>

      </div>
    );
  };
}

export default App;
