import React from 'react';

const ErrorComponent = () => {
  <div>{props.somethingWrong}</div>;
};

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

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log('Component Did Mount');
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

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snapshot Before Update');
    return null;
  }

  render() {
    console.log('render');

    if (this.state.error) {
      return <div>Encounterd an error! {this.state.error.message}</div>;
    }

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
        <ErrorComponent></ErrorComponent>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('-------------------');
  }

  componentDidCatch(error, info) {
    console.log('Component Did Catch');

    this.setState({ error, info });
  }
}
