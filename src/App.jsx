import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Welcome from "./components/Welcome/Welcome";
import Counter from "./components/counter/Counter";
import CounterHard from "./components/counter/CounterHard";

// root functional component
// purpose -> render HTML
function App() {
 
  let year = new Date().getFullYear()

// let [nameOfVariable, setFunctionToUpdateVariable] = useState(<initial_state>)
let [names, setMyName] = useState(["nick","james", "leif", "danika"])

let [ count, setCount ] = useState(4)

  return (
    <>
      <Nav />
      <div>The purpose of  a component is to render something</div>
      <div>we're rendering something else</div>

      {/* <Welcome name={names}/> */}
     {/* names.map(ourcallbackfunction) */}
      {names.map(name =>{
        return(
          <Welcome name={name} allNames={names} updatedNames = {setMyName} />
        )
      })} 
      <Counter /> 
      <CounterHard count = {count} setCount={setCount}/>
      <footer>copyright, {year}</footer>
    </>
  );
}

export default App;
