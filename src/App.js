import "./App.css";
import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const docRef = db.collection("todos").doc("todo").collection("villacidro").doc("guspini");
  useEffect(() => {
    docRef.get()
   .then((doc) => {
     if(doc.exists){
       console.log(doc.data())
     }
     else{
       console.log("no data");
     }
   })
  }, []);

  console.log(input);

  const SaveInput = (event) => {
    event.preventDefault(); //stop refresh
    docRef.set({
      td: input,
    });
    setTodos([...todos, input]);
    setInput(""); // clear up the input after event
  };

  return (
    <div className="App">
      <h1>Hello programmers</h1>
      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={SaveInput}>Add todo</button>
      <ul>
        {todos.map((todo, todo2) => (
          <div>
            <Todo text={todo} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
