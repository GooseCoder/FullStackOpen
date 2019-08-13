import React, { Component } from "react";

export default class Total extends Component {
  render() {
    const total = this.props.parts.reduce((acc, part) => {
      const prevAcc = acc.exercises ? acc.exercises : acc;
      return prevAcc + part.exercises;
    });

    return (
      <div>
        <p style={{fontWeight: "bold"}}>Total of {total} exercises</p>
      </div>
    );
  }
}
