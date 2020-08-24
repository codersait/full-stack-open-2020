import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.content.part1} exercises={props.content.exercises1} />
      <Part part={props.content.part2} exercises={props.content.exercises2} />
      <Part part={props.content.part3} exercises={props.content.exercises3} />

    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.content.exercises1 + props.content.exercises2 + props.content.exercises3}</p>
  )
}
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}






const App = () => {
  const course = 'Half Stack application development'
  const content = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))