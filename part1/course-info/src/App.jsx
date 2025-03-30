const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part partData={props.content[0]} />
      <Part partData={props.content[1]} />
      <Part partData={props.content[2]} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.partData.part} {props.partData.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total[0] + props.total[1] + props.total[2]}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const content = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 }
  ]
  
  return (
    <div>
         <Header course={course} />
         <Content content={content} />  
         <Total total={[exercises1, exercises2, exercises3]} /> 
    </div>
  )
}
    
export default App