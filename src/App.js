import React from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
    };

    this.mountCounter = () => {
      this.setState({ mount: true });
    };

    this.unmountCounter = () => {
      this.setState({ mount: false });
    };

    this.ignoreProp = () => {
      this.setState({ ignoreProp: Math.random() });
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount
        </button>
        <button onClick={this.ignoreProp}>Ignore prop</button>
        {this.state.mount ? (
          <Counter ignoreProp={this.state.ignoreProp}></Counter>
        ) : null}
      </div>
    );
  }
}

export default App;
