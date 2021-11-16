import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Holly'
    };
  }

render(){
  return (
    <div>
      <App name={this.state.name}/>
      <p>
        Hello
        </p>
      </div>
  );
  }
}

render(<App/>, document.getElementById('root'));
export default App;
  