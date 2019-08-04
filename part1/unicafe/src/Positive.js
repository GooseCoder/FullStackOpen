import React from "react";

export default function Positive({ good, bad, neutral }) {
  const positive = (good + bad + neutral) === 0 ? 0 : (good / (good + bad + neutral)) * 100;
  return <div>positive {positive} %</div>;
}
