import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1> {props.course} </h1>;
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((parts) => (
        <Part key={parts.name} parts={parts} />
      ))}
    </div>
  );
};

const Part = (props) => {
  console.log(props.parts.name);
  return (
    <p>
      {" "}
      {props.parts.name} {props.parts.exercises}{" "}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      {"Number of exercises "}
      {props.parts
        .map((o) => o.exercises)
        .reduce((a, b) => {
          return a + b;
        })}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
