import React from "react";

export default function Average({ good, neutral, bad }) {
  const avg =
    good + neutral + bad === 0 ? 0 : (good - bad) / (good + neutral + bad);
  return <div>average {avg}</div>;
}
