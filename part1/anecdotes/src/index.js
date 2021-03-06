import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Section = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.anecdotes[props.index]}</p>
      <p>has {props.points[props.index]} votes</p>
    </>
  );
};
const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0);

  const Next = () => {
    const rand = Math.floor(Math.random() * anecdotes.length);
    setSelected(rand);
  };

  const Vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    if (copy[selected] > copy[mostVoted]) setMostVoted(selected);
  };

  return (
    <div>
      <Section
        title={"Anecdote of the day"}
        index={selected}
        anecdotes={anecdotes}
        points={points}
      />
      <Button handleClick={Vote} text="vote" />
      <Button handleClick={Next} text="next anecdote" />
      <Section
        title={"Anecdote of the day"}
        index={mostVoted}
        anecdotes={anecdotes}
        points={points}
      />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
