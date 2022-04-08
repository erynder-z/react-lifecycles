import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      counter: 0,
    };

    this.increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    this.decrement = () => {
      this.setState({ counter: this.state.counter - 1 });
    };
  }

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('-------------------');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('-------------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log('Should Component Update - DO NOT RENDER');
      return false;
    }
    console.log('Should Component Update - RENDER');
    return true;
  }

  render() {
    console.log('render');

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update');
  }
}
