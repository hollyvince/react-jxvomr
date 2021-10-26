import React from "react";


function Welcome(probs){
  return <h1>Hello, {props.name}</h1>;
}

function clickHandler(){
  window.alert("Hello from React!");
}

function App(){
  return (
    <div>
      <Welcome name="Sara"/>
      <h1 style={{color:"red"}}> some text </h1>
      <button onClick={clickHandler}>
        show message
      </button>
    </div>

  );
}
export default App;