import React, { Component } from 'react';
import './App.css';
import Markdown from './components/Markdown';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  handleChange(){

  }

  render() {
    return (
      <div className="App container">
        <h1 className="teal-text">Markdown Previewer</h1>
        <Markdown />

      </div>
    );
  }
}

export default App;
