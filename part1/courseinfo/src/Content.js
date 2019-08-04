import React, { Component } from "react";
import Part from "./Part";

export default class Content extends Component {
  render() {
    const parts = this.props.parts.map((part, key) => (
      <Part key={key} name={part.name} exercises={part.exercises} />
    ));
    return <div>{parts}</div>;
  }
}
