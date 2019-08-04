import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Button from "./Button";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  if ((good + bad + neutral) > 0) {
    const positive = (good / (good + bad + neutral)) * 100;
    const avg = (good - bad) / (good + neutral + bad);

    return (
      <div>
        <Header title="statistics" />
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={good + neutral + bad} />
            <Statistic text="average" value={avg} />
            <Statistic text="positive" value={positive.toString() + " %"} />
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div>
      <Header title="statistics" />
      <p> No feedback given </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addToGood = () => {
    setGood(good + 1);
  };

  const addToNeutral = () => {
    setNeutral(neutral + 1);
  };

  const addToBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header title="give feedback" />
      <Button clickHandler={addToGood} text="good" />
      <Button clickHandler={addToNeutral} text="neutral" />
      <Button clickHandler={addToBad} text="bad" />
      <Statistics bad={bad} good={good} neutral={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
