import React, { Component } from "react";

export default class Total extends Component {
  render() {
    const total = this.props.parts.reduce((acc, part) => {
      const sum = {
        exercises: acc.exercises + part.exercises
      };
      return sum;
    }).exercises;

    return (
      <div>
        <p>Number of excercises {total}</p>
      </div>
    );
  }
}
