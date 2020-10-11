import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
  const handleClick_good = () => {
    setGood(good + 1);
  };
  const handleClick_neutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClick_bad = () => {
    setBad(bad + 1);
  };

  const all = good + neutral + bad;
  const average = all !== 0 ? (good - bad) / all : 0;
  const positive = all !== 0 ? (good / all) * 100 + "%" : 0;

  if (all === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleClick_good} text="good" />
        <Button handleClick={handleClick_neutral} text="neutral" />
        <Button handleClick={handleClick_bad} text="bad" />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClick_good} text="good" />
      <Button handleClick={handleClick_neutral} text="neutral" />
      <Button handleClick={handleClick_bad} text="bad" />
      <h1>statistics</h1>
      <table>
        <Statistic text={"good "} value={good} />
        <Statistic text={"neutral "} value={neutral} />
        <Statistic text={"bad "} value={bad} />
        <Statistic text={"all "} value={all} />
        <Statistic text={"average "} value={average} />
        <Statistic text={"positive "} value={positive} />
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Statistics
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
