import React from 'react';
import './Timer.css';
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { intervalId: undefined };
  }

  componentDidMount() {
    const intervalId = setInterval(this.props.countDown, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    this.setState(this.state.intervalId);
  }

  render() {
    return (
      <div className="champion-picker__top-section--timer">
        <span>{this.props.time}</span>
      </div>
    );
  }
}

export default Timer;
