import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    topLight: "red",
    middleLight: "black",
    bottomLight: "black",
    light: 0,
  };

  nextLight = () => {
    switch (this.state.light) {
      case 0:
        this.setState({ topLight: "black", bottomLight: "green", light: 1 });
        break;
      case 1:
        this.setState({
          bottomLight: "black",
          middleLight: "yellow",
          light: 2,
        });
        break;
      case 2:
        this.setState({ middleLight: "black", topLight: "red", light: 0 });
        break;
    }
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${this.state.topLight}`}></div>
          <div className={`circle ${this.state.middleLight}`}></div>
          <div className={`circle ${this.state.bottomLight}`}></div>
        </div>
        <button className="next-state-button" onClick={this.nextLight}>
          Next State
        </button>
      </div>
    );
  }
}
